<?php

namespace Mediawiki\OutputTransform\Stages;

use Mediawiki\OutputTransform\ContentTextTransformStage;
use ParserOptions;
use ParserOutput;

/**
 * Hydrate slot section header placeholders generated by RevisionRenderer.
 * @internal
 */
class HydrateHeaderPlaceholders extends ContentTextTransformStage {

	public function shouldRun( ParserOutput $po, ?ParserOptions $popts, array $options = [] ): bool {
		return true;
	}

	protected function transformText( string $text, ParserOutput $po, ?ParserOptions $popts, array &$options ): string {
		return preg_replace_callback( '#<mw:slotheader>(.*?)</mw:slotheader>#', static function ( $m ) {
			$role = htmlspecialchars_decode( $m[1] );
			// TODO: map to message, using the interface language. Set lang="xyz" accordingly.
			$headerText = $role;

			return $headerText;
		}, $text );
	}
}
