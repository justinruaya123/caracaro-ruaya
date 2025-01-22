<script>
	import { onMount } from "svelte";
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	export let data; // data awaited from +page.ts load() function gets passed here

	let loading = true;
	onMount(() => {
		loading = false;
	});
</script>

<main>
	{#if loading}
		<div class="h-screen flex items-center justify-center"> 
			<ProgressRadial />
		</div>
	{:else}
		{#each Object.entries(data.pokemons) as [name, id]}
			<div>
				<a href={`https://pokeapi.co/api/v2/pokemon/${id}`}>{name}</a>
			</div>
		{/each}
	{/if}
</main>
