<script lang="ts">
	import CodeSnippetCard from '../CodeSnippetCard.svelte';
	import { addSnippet, snippetStore } from '../SnippetStore';
	import type { PageData } from './$types';
	export let data: PageData;

	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create A Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input
					class="input"
					type="text"
					placeholder="Enter a title for your snippet"
					bind:value={formData.title}
				/>
			</label>
			<label class="label">
				<span>Programming Langauge</span>
				<select class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="javascript">JavaScript</option>
					<option value="typescript">TypeScript</option>
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter code for your snippet"
					bind:value={formData.code}
				></textarea>
			</label>
			<button
				class="btn btn-sm variant-filled-primary"
				type="button"
				on:click={() => {
					addSnippet(formData);
				}}
			>
				Create Snippet
			</button>
		</div>
		<div>
			<h2 class="text-center py-6">My Code Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard {snippet} {index} />
		{/each}
	</div>
</div>
