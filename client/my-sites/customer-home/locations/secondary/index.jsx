/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import FreePhotoLibrary from 'my-sites/customer-home/cards/education/free-photo-library';
import GoMobile from 'my-sites/customer-home/cards/features/go-mobile';
import GrowEarn from 'my-sites/customer-home/cards/features/grow-earn';
import QuickStart from 'my-sites/customer-home/cards/features/quick-start';
import LaunchSite from 'my-sites/customer-home/cards/features/launch-site';
import Stats from 'my-sites/customer-home/cards/features/stats';
import Support from 'my-sites/customer-home/cards/features/support';

const cardComponents = {
	'home-action-launch-site': LaunchSite,
	'home-education-free-photo-library': FreePhotoLibrary,
	'home-feature-go-mobile-desktop': GoMobile,
	'home-feature-grow-and-earn': GrowEarn,
	'home-feature-stats': Stats,
	'home-feature-support': Support,
};

const Secondary = ( { cards } ) => {
	return (
		<>
			<QuickStartCard />
			{ cards &&
				cards.map(
					( card, index ) =>
						cardComponents[ card ] &&
						React.createElement( cardComponents[ card ], {
							key: index,
						} )
				) }
		</>
	);
};

export default Secondary;
