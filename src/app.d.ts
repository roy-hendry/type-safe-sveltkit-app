// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

// This is where you can add your own custom types
interface CodeSnippetInput {
	title: string;
	language: string;
	code: string;
}

interface CodeSnippet {
	title: string;
	language: string;
	code: string;
	isFavourite: boolean;
}
