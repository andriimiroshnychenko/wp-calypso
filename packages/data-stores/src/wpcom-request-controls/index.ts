/**
 * External dependencies
 */
import wpcomProxyRequest from 'wpcom-proxy-request';

type WpcomProxyRequestOptions = Parameters< typeof wpcomProxyRequest >[ 0 ];

export const wpcomRequest = ( request: WpcomProxyRequestOptions ) =>
	( { type: 'WPCOM_REQUEST', request } as const );

export interface WpcomClientCredentials {
	client_id: string;
	client_secret: string;
}

export const controls = {
	WPCOM_REQUEST: ( { request }: ReturnType< typeof wpcomRequest > ) => wpcomProxyRequest( request ),
} as const;
