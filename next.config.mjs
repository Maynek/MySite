/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
    images: {
		remotePatterns:[
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io'
			}
		]
	},
	experimental: {
		scrollRestoration: true
	},
};
export default nextConfig;
