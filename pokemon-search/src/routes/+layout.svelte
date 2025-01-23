<script lang="ts">
	import '../app.postcss';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">CaraCaro </svelte:fragment>
	<h1>Jus' Pokedex Searcher</h1>
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
<slot />
