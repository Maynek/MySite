/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		scrollRestoration: true
	},
    images: {
		remotePatterns:[
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io'
			}
		]
	},
};
export default nextConfig;
