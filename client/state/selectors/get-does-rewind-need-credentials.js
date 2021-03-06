/**
 * Internal dependencies
 */
import getRewindState from 'state/selectors/get-rewind-state';

/**
 * Get the entire Rewind state object.
 *
 * @param {object} state Global state tree
 * @param {?number|string} siteId the site ID
 * @returns {object} Rewind state object
 */
export default function getDoesRewindNeedCredentials( state, siteId ) {
	return [ 'awaiting_credentials' ].includes( getRewindState( state, siteId ).state );
}
