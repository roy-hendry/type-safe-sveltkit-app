// Anywhere in our project we can have TypeScript files to hold certain logic. In this case, we have a file called SnippetStore.ts that holds the logic for our SnippetStore class.

import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]); // This is a Svelte store that holds an array of CodeSnippet objects.
// e.g. [{ title: 'Hello World', language: 'JavaScript', code: 'console.log("Hello World")', isFavourite: false }]

export function addSnippet(input: CodeSnippetInput) {
	// Gives access to the current value of the store
	let snippets = get(snippetStore);
	snippetStore.update(() => {
		// Adds a new CodeSnippet object to the snippets array - it doesn't have a favourite status yet so we set it to false by default
		return [{ ...input, isFavourite: false }, ...snippets];
	});
}

export function deleteSnippet(index: number) {
	let snippets = get(snippetStore);
	// Removes the snippet at the specified index
	snippets.splice(index, 1);
	snippetStore.update(() => {
		return snippets;
	});
}

export function toggleFavourite(index: number) {
	let snippets = get(snippetStore);
	// Toggles the isFavourite property of the snippet at the specified index
	snippetStore.update(() => {
		return snippets.map((snippet, snippetIndex) => {
			if (snippetIndex === index) {
				return { ...snippet, isFavourite: !snippet.isFavourite };
			}
			return snippet;
		});
	});
}
