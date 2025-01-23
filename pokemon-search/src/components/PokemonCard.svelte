<script lang="ts">
    export let pokemon: string;

    async function getPokemon(pokemonName: string) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data;
    }
    $: { pokemon }
</script>

{#await getPokemon(pokemon)}
    <p>Fetching pokemon...</p>
{:then data}
    <h1>{data.name} ({data.id})</h1>
    <img src={data.sprites.front_default} alt={data.name} />
    <img src={data.sprites.back_default} alt={data.name} />
    <p>Height: {data.height}</p>
    <p>Weight: {data.weight}</p>
    <p>Base experience: {data.base_experience}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
