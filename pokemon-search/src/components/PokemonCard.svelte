<script lang="ts">
    export let pokemon: string;

    async function getPokemon(pokemonName: string) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.json();
    }
</script>

{#await getPokemon(pokemon)}
    <p>Fetching pokemon...</p>
{:then data}
    <h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1).replace('-', ' ')} ({data.id})</h1>
    <img src={data.sprites.front_default} alt={data.name} />
    <img src={data.sprites.back_default} alt={data.name} />
    <p>Type: {data.types.map((type) => type.type.name).join('/')}</p>
    {#each data.abilities as ability}
        <p>Ability: {ability.ability.name} {ability.is_hidden ? "(Hidden)" : ""}</p>
    {/each}
    <h1><b>Stats</b></h1>
    {#each data.stats as stat}
        <p>{stat.stat.name}: {stat.base_stat}</p>
    {/each}
{:catch error}
    <p style="color-red">{error.message}</p>
{/await}
