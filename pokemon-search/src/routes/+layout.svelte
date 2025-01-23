<script lang="ts">
	import '../app.postcss';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">CaraCaro </svelte:fragment>
	<h1 class="h1">
		<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">Jus' Pokedex Searcher</span>
	</h1>
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
<slot />
