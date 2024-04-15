<?php

namespace MediaWiki\OutputTransform\Stages;

use MediaWiki\Html\HtmlHelper;
use MediaWiki\OutputTransform\ContentTextTransformStage;
use MediaWiki\Parser\Parser;
use MediaWiki\Parser\ParserOutput;
use MediaWiki\Parser\Parsoid\ParsoidParser;
use ParserOptions;
use Psr\Log\LoggerInterface;
use Wikimedia\RemexHtml\Serializer\SerializerNode;

/**
 * Applies base href, and strip everything but the <body>
 * @internal
 */
class ExtractBody extends ContentTextTransformStage {

	private LoggerInterface $logger;

	public function __construct( LoggerInterface $logger ) {
		$this->logger = $logger;
	}

	public function shouldRun( ParserOutput $po, ?ParserOptions $popts, array $options = [] ): bool {
		return ( $options['isParsoidContent'] ?? false );
	}

	private const EXPAND_ELEMENTS = [
		'a' => true, 'img' => true, 'video' => true, 'audio' => true,
	];

	private static function expandRelativeAttrs( string $text, string $baseHref, string $pageFragmentPrefix ): string {
		// T350952: Expand relative links
		// What we should be doing here is parsing as a title and then
		// using Title::getLocalURL()
		return HtmlHelper::modifyElements(
			$text,
			static function ( SerializerNode $node ): bool {
				if ( !isset( self::EXPAND_ELEMENTS[$node->name] ) ) {
					return false;
				}
				$attr = $node->name === 'a' ? 'href' : 'resource';
				return str_starts_with( $node->attrs[$attr] ?? '', './' );
			},
			static function ( SerializerNode $node ) use ( $baseHref, $pageFragmentPrefix ): SerializerNode {
				$attr = $node->name === 'a' ? 'href' : 'resource';
				$href = $node->attrs[$attr];
				// Convert page fragment urls to true fragment urls
				// This ensures that those fragments include any URL query params
				// and resolve internally. (Ex: on pages with ?useparsoid=1,
				// cite link fragments should not take you to a different page).
				if ( $pageFragmentPrefix && str_starts_with( $href, $pageFragmentPrefix ) ) {
					$node->attrs[$attr] = substr( $href, strlen( $pageFragmentPrefix ) - 1 );
				} else {
					$href = $baseHref . $href;
					$node->attrs[$attr] = wfExpandUrl( $href, PROTO_RELATIVE );
				}
				return $node;
			}
		);
	}

	protected function transformText( string $text, ParserOutput $po, ?ParserOptions $popts, array &$options ): string {
		// T350952: temporary fix for subpage paths: use Parsoid's
		// <base href> to expand relative links
		$baseHref = '';
		if ( preg_match( '{<base href=["\']([^"\']+)["\'][^>]+>}', $text, $matches ) === 1 ) {
			$baseHref = $matches[1];
		}
		$title = $po->getExtensionData( ParsoidParser::PARSOID_TITLE_KEY );
		if ( !$title ) {
			// We don't think this should ever trigger, but being conservative
			$this->logger->error( __METHOD__ . ": Missing title information in ParserOutput" );
		}
		$pageFragmentPrefix = "./" . $title . "#";
		foreach ( $po->getIndicators() as $name => $html ) {
			$po->setIndicator( $name, self::expandRelativeAttrs( $html, $baseHref, $pageFragmentPrefix ) );
		}
		$text = Parser::extractBody( $text );
		return self::expandRelativeAttrs( $text, $baseHref, $pageFragmentPrefix );
	}
}
