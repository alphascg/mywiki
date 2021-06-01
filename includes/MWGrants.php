<?php
/**
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 * http://www.gnu.org/copyleft/gpl.html
 *
 * @file
 */

use MediaWiki\MediaWikiServices;

/**
 * @deprecated since 1.37, use GrantsInfo instead
 *
 * A collection of public static functions to deal with grants.
 */
class MWGrants {

	/**
	 * List all known grants.
	 * @deprecated since 1.37, use GrantsInfo::getValidGrants() instead
	 * @return array
	 */
	public static function getValidGrants() {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getValidGrants();
	}

	/**
	 * Map all grants to corresponding user rights.
	 * @deprecated since 1.37, use GrantsInfo::getRightsByGrant() instead
	 * @return array grant => array of rights
	 */
	public static function getRightsByGrant() {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getRightsByGrant();
	}

	/**
	 * Fetch the description of the grant
	 * @deprecated since 1.37, use GrantsInfo::getGrantDescription() instead
	 * @param string $grant
	 * @param Language|string|null $lang
	 * @return string Grant description
	 */
	public static function grantName( $grant, $lang = null ) {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getGrantDescription( $grant, $lang );
	}

	/**
	 * Fetch the descriptions for the grants.
	 * @deprecated since 1.37, use GrantsInfo::getGrantDescriptions() instead
	 * @param string[] $grants
	 * @param Language|string|null $lang
	 * @return string[] Corresponding grant descriptions
	 */
	public static function grantNames( array $grants, $lang = null ) {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getGrantDescriptions( $grants, $lang );
	}

	/**
	 * Fetch the rights allowed by a set of grants.
	 * @deprecated since 1.37, use GrantsInfo::getGrantRights() instead
	 * @param string[]|string $grants
	 * @return string[]
	 */
	public static function getGrantRights( $grants ) {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getGrantRights( $grants );
	}

	/**
	 * Test that all grants in the list are known.
	 * @deprecated since 1.37, use GrantsInfo::grantsAreValid() instead
	 * @param string[] $grants
	 * @return bool
	 */
	public static function grantsAreValid( array $grants ) {
		return MediaWikiServices::getInstance()->getGrantsInfo()->grantsAreValid( $grants );
	}

	/**
	 * Divide the grants into groups.
	 * @deprecated since 1.37, use GrantsInfo::getGrantGroups() instead
	 * @param string[]|null $grantsFilter
	 * @return array Map of (group => (grant list))
	 */
	public static function getGrantGroups( $grantsFilter = null ) {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getGrantGroups( $grantsFilter );
	}

	/**
	 * Get the list of grants that are hidden and should always be granted
	 * @deprecated since 1.37, use GrantsInfo::getHiddenGrants() instead
	 * @return string[]
	 */
	public static function getHiddenGrants() {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getHiddenGrants();
	}

	/**
	 * Generate a link to Special:ListGrants for a particular grant name.
	 *
	 * This should be used to link end users to a full description of what
	 * rights they are giving when they authorize a grant.
	 *
	 * @deprecated since 1.37, use GrantsInfo::getGrantsLink() instead
	 *
	 * @param string $grant the grant name
	 * @param Language|string|null $lang
	 * @return string (proto-relative) HTML link
	 */
	public static function getGrantsLink( $grant, $lang = null ) {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getGrantsLink( $grant, $lang );
	}

	/**
	 * Generate wikitext to display a list of grants
	 * @deprecated since 1.37, use GrantsInfo::getGrantsWikiText() instead
	 *
	 * @param string[]|null $grantsFilter If non-null, only display these grants.
	 * @param Language|string|null $lang
	 * @return string Wikitext
	 */
	public static function getGrantsWikiText( $grantsFilter, $lang = null ) {
		return MediaWikiServices::getInstance()->getGrantsInfo()->getGrantsWikiText( $grantsFilter, $lang );
	}

}
