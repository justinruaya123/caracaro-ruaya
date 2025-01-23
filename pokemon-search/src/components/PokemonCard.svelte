<script lang="ts">
	import { Accordion, AccordionItem, Avatar } from '@skeletonlabs/skeleton';

	export let pokemon: string;

	async function getPokemon(pokemonName: string) {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		return response.json();
	}
</script>

{#await getPokemon(pokemon)}
	<p>Fetching pokemon...</p>
{:then data}
	<div
		class="card max-w-[512px] min-w-[512px] m-4 p-4 min-h-80 card-hover rounded-lg variant-filled-success"
	>
		<div class="header flex justify-left items-center">
			<Avatar src={data.sprites.front_default} alt={data.name} width="w-32" />
			<span class="m-10 text-3xl"
				>{data.name.charAt(0).toUpperCase() + data.name.slice(1).replace('-', ' ')} ({data.id})</span
			>
		</div>
		<section>
			<button type="button" class="btn rounded-full variant-ghost-surface m-4">
				<span><b>Type:</b></span>
				<span>{data.types.map((type) => type.type.name).join('/')}</span>
			</button>
			<Accordion>
				<AccordionItem open>
					<svelte:fragment slot="summary"><h1><u><b>Abilities</b></u></h1></svelte:fragment>
					<svelte:fragment slot="lead">💪</svelte:fragment>
					<svelte:fragment slot="content">
						<ol class="list-dl">
							<div>
								{#each data.abilities as ability}
									<span class="badge bg-secondary-500 rounded-full"></span>
									<span class="flex-auto">
										<dt>{ability.ability.name}</dt>
										<dd>{ability.is_hidden ? '(Hidden)' : ''}</dd>
									</span>
								{/each}
							</div>
						</ol>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary"><h1><u><b>Stats</b></u></h1></svelte:fragment>
					<svelte:fragment slot="lead">💖</svelte:fragment>
					<svelte:fragment slot="content">
						{#each data.stats as stat}
							<span class="badge variant-ghost-surface">
								<p><b>{stat.stat.name.replace('-', ' ')}</b>: {stat.base_stat}</p>
							</span>
						{/each}
					</svelte:fragment>
				</AccordionItem>
				<!-- ... -->
			</Accordion>
		</section>
		<footer class="card-footer flex justify-center items-center">
			<h1>* * *</h1>
		</footer>
	</div>
{:catch error}
	<p style="color-red">{error.message}</p>
{/await}
