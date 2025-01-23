<script lang="ts">
	import { Autocomplete, type AutocompleteOption } from '@skeletonlabs/skeleton';
	export let pokemonList: AutocompleteOption<string>;
	export let selected: string = '';
	let pokemonSearchString: string = '';
	function onSearchSelection(e: CustomEvent<AutocompleteOption<unknown, unknown>>) {
		selected = e.detail.value;
	}
</script>

<div class="card w-full max-w-sm p-4 m-4 rounded-lg variant-filled-surface">
	<label for="autocomplete-search" class="label"
		>Search
		<input
			class="input"
			type="search"
			name="autocomplete-search"
			placeholder="Search pokemon..."
			bind:value={pokemonSearchString}
		/>
	</label>
</div>

<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto variant-filled-surface" tabindex="-1">
	<Autocomplete
		bind:input={pokemonSearchString}
		options={pokemonList}
		on:selection={onSearchSelection}
	/>
</div>
