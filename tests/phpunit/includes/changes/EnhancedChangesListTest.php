<?php

/**
 * @covers EnhancedChangesList
 *
 * @group Database
 *
 * @author Katie Filbert < aude.wiki@gmail.com >
 */
class EnhancedChangesListTest extends MediaWikiLangTestCase {

	/**
	 * @var TestRecentChangesHelper
	 */
	private $testRecentChangesHelper;

	public function __construct( $name = null, array $data = [], $dataName = '' ) {
		parent::__construct( $name, $data, $dataName );

		$this->testRecentChangesHelper = new TestRecentChangesHelper();
	}

	public function testBeginRecentChangesList_styleModules() {
		$enhancedChangesList = $this->newEnhancedChangesList();
		$enhancedChangesList->beginRecentChangesList();

		$styleModules = $enhancedChangesList->getOutput()->getModuleStyles();

		$this->assertContains(
			'mediawiki.special.changeslist',
			$styleModules,
			'has mediawiki.special.changeslist'
		);

		$this->assertContains(
			'mediawiki.special.changeslist.enhanced',
			$styleModules,
			'has mediawiki.special.changeslist.enhanced'
		);
	}

	public function testBeginRecentChangesList_jsModules() {
		$enhancedChangesList = $this->newEnhancedChangesList();
		$enhancedChangesList->beginRecentChangesList();

		$modules = $enhancedChangesList->getOutput()->getModules();

		$this->assertContains( 'jquery.makeCollapsible', $modules, 'has jquery.makeCollapsible' );
		$this->assertContains( 'mediawiki.icon', $modules, 'has mediawiki.icon' );
	}

	public function testBeginRecentChangesList_html() {
		$enhancedChangesList = $this->newEnhancedChangesList();
		$html = $enhancedChangesList->beginRecentChangesList();

		$this->assertEquals( '<div class="mw-changeslist">', $html );
	}

	/**
	 * @todo more tests
	 */
	public function testRecentChangesLine() {
		$enhancedChangesList = $this->newEnhancedChangesList();
		$enhancedChangesList->beginRecentChangesList();

		$recentChange = $this->getEditChange( '20131103092153' );
		$html = $enhancedChangesList->recentChangesLine( $recentChange, false );

		$this->assertInternalType( 'string', $html );

		$recentChange2 = $this->getEditChange( '20131103092253' );
		$html = $enhancedChangesList->recentChangesLine( $recentChange2, false );

		$this->assertEquals( '', $html );
	}

	public function testCategorizationLineFormatting() {
		$html = $this->createCategorizationLine(
			$this->getCategorizationChange( '20150629191735', 0, 0 )
		);
		$this->assertNotContains( '(diff | hist)', strip_tags( $html ) );
	}

	public function testCategorizationLineFormattingWithRevision() {
		$html = $this->createCategorizationLine(
			$this->getCategorizationChange( '20150629191735', 1025, 1024 )
		);
		$this->assertContains( '(diff | hist)', strip_tags( $html ) );
	}

	/**
	 * @todo more tests for actual formatting, this is more of a smoke test
	 */
	public function testEndRecentChangesList() {
		$enhancedChangesList = $this->newEnhancedChangesList();
		$enhancedChangesList->beginRecentChangesList();

		$recentChange = $this->getEditChange( '20131103092153' );
		$enhancedChangesList->recentChangesLine( $recentChange, false );

		$html = $enhancedChangesList->endRecentChangesList();
		$this->assertRegExp( '/data-mw-revid="5" data-mw-ts="20131103092153" class="[^"]*mw-enhanced-rc[^"]*"/', $html );

		$recentChange2 = $this->getEditChange( '20131103092253' );
		$enhancedChangesList->recentChangesLine( $recentChange2, false );

		$html = $enhancedChangesList->endRecentChangesList();

		preg_match_all( '/td class="mw-enhanced-rc-nested"/', $html, $matches );
		$this->assertCount( 2, $matches[0] );

		$recentChange3 = $this->getLogChange();
		$enhancedChangesList->recentChangesLine( $recentChange3, false );

		$html = $enhancedChangesList->endRecentChangesList();
		$this->assertContains( 'data-mw-logaction="foo/bar"', $html );
		$this->assertContains( 'data-mw-logid="25"', $html );
	}

	/**
	 * @return EnhancedChangesList
	 */
	private function newEnhancedChangesList() {
		$user = User::newFromId( 0 );
		$context = $this->testRecentChangesHelper->getTestContext( $user );

		return new EnhancedChangesList( $context );
	}

	/**
	 * @return RecentChange
	 */
	private function getEditChange( $timestamp ) {
		$user = $this->getMutableTestUser()->getUser();
		$recentChange = $this->testRecentChangesHelper->makeEditRecentChange(
			$user, 'Cat', 0, 5, 191, $timestamp, 0, 0
		);

		return $recentChange;
	}

	private function getLogChange() {
		$user = $this->getMutableTestUser()->getUser();
		$recentChange = $this->testRecentChangesHelper->makeLogRecentChange( 'foo', 'bar', $user,
			'Title', '20131103092153', 0, 0
		);

		return $recentChange;
	}

	/**
	 * @return RecentChange
	 */
	private function getCategorizationChange( $timestamp, $thisId, $lastId ) {
		$wikiPage = new WikiPage( Title::newFromText( 'Testpage' ) );
		$wikiPage->doEditContent( new WikitextContent( 'Some random text' ), 'page created' );

		$wikiPage = new WikiPage( Title::newFromText( 'Category:Foo' ) );
		$wikiPage->doEditContent( new WikitextContent( 'Some random text' ), 'category page created' );

		$user = $this->getMutableTestUser()->getUser();
		$recentChange = $this->testRecentChangesHelper->makeCategorizationRecentChange(
			$user, 'Category:Foo', $wikiPage->getId(), $thisId, $lastId, $timestamp
		);

		return $recentChange;
	}

	private function createCategorizationLine( $recentChange ) {
		$enhancedChangesList = $this->newEnhancedChangesList();
		$cacheEntry = $this->testRecentChangesHelper->getCacheEntry( $recentChange );

		$reflection = new \ReflectionClass( get_class( $enhancedChangesList ) );
		$method = $reflection->getMethod( 'recentChangesBlockLine' );
		$method->setAccessible( true );

		return $method->invokeArgs( $enhancedChangesList, [ $cacheEntry ] );
	}

}
