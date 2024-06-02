import type { PageLoad } from './$types';

export const load = (() => {
	// You can get this data from any source
	// e.g. fetching from a server
	return {
		snippets: [
			{
				title: 'Hello World',
				language: 'html',
				code: '<h1>Hello World</h1>',
				isFavourite: false
			},
			{
				title: 'Hello World',
				language: 'javascript',
				code: 'console.log("Hello World")',
				isFavourite: false
			}
		]
	};
}) satisfies PageLoad;
