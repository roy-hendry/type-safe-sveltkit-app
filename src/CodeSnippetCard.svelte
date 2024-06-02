<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { addSnippet, deleteSnippet, toggleFavourite } from './SnippetStore';

	export let snippet: CodeSnippet = {
		title: 'Hello World',
		language: 'html',
		code: '<h1>Hello World</h1>',
		isFavourite: false
	};

	export let index: number;

	// This could be put into a component folder
</script>

<div class="card">
	<header class="card-header">
		{snippet.title}
		<div class="float-right">
			<button
				class="btn btn-sm {snippet.isFavourite
					? 'variant-filled-tertiary'
					: 'variant-filled-secondary'}"
				type="button"
				on:click={() => toggleFavourite(index)}
				>{snippet.isFavourite ? 'Unfavourite' : 'Favourite'}</button
			>
			<button
				class="btn btn-sm variant-filled-error"
				type="button"
				on:click={() => deleteSnippet(index)}>❌</button
			>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={snippet.language} code={snippet.code} />
	</section>
</div>
