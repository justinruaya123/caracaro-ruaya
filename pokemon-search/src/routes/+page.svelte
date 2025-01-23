<script lang="ts">
	import { onMount } from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import PokemonSearchBar from '../components/PokemonSearchBar.svelte';
	import PokemonCard from '../components/PokemonCard.svelte';

	export let data; // data awaited from +page.ts load() function gets passed here

	let loading = true;
	onMount(() => {
		loading = false;
	});

	let selected: string = '';
	$: {
		// eslint-disable-next-line
		selected;
	}
</script>

<main>
	{#if loading}
		<div class="h-screen flex items-center justify-center">
			<ProgressRadial />
		</div>
	{:else}
		<div class="flex flex-col items-center">
			<PokemonSearchBar pokemonList={data.pokemons} bind:selected />
			{#if selected}
				<PokemonCard pokemon={selected} />
			{/if}
		</div>
	{/if}
</main>
