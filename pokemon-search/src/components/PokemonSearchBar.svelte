<script lang="ts">
	import { Autocomplete, type AutocompleteOption } from '@skeletonlabs/skeleton';

	export let pokemonList: AutocompleteOption<string>;
	export let selected: string = '';

	let pokemonSearchString: string = '';

	function onSearchSelection(e: CustomEvent<AutocompleteOption<unknown, unknown>>) {
		selected = e.detail.value;
	}
</script>

<input
	class="input"
	type="search"
	name="autocomplete-search"
	placeholder="Search pokemon..."
	bind:value={pokemonSearchString}
/>
<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
	<Autocomplete
		bind:input={pokemonSearchString}
		options={pokemonList}
		on:selection={onSearchSelection}
	/>
</div>
