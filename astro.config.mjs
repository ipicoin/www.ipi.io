// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.ipi.io',
	integrations: [
		starlight({
			title: 'IPI.IO',
			social: [{ icon: 'github', label: 'IPI DAO on GitHub', href: 'https://github.com/ipicoin' }],
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Czym jest IPI', slug: 'intro' },
						{ label: 'Ekosystem', slug: 'ecosystem' },
					],
				},
				{
					label: 'Sieć',
					items: [
						{ label: 'Parametry sieci', slug: 'network/parameters' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Portfel — wallet-core.js', slug: 'guides/wallet' },
						{ label: 'Uruchomienie węzła / devnet', slug: 'guides/run-node' },
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
