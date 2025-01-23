<script lang="ts">
	import { onMount } from "svelte";
	import { Autocomplete, LightSwitch, popup, ProgressRadial, type AutocompleteOption, type PopupSettings } from '@skeletonlabs/skeleton';
	import PokemonSearchBar from "../components/PokemonSearchBar.svelte";

	export let data; // data awaited from +page.ts load() function gets passed here

	let loading = true;
	let pokemons: AutocompleteOption<string>[];
	onMount(() => {
		loading = false;
	});

	let selected: string = '';
	$: { selected }
</script>

<main>
	{#if loading}
		<div class="h-screen flex items-center justify-center"> 
			<ProgressRadial />
		</div>
	{:else}
		<PokemonSearchBar pokemonList={data.pokemons} bind:selected />
		<h1>{selected}</h1>
		<LightSwitch />
	{/if}
</main>
