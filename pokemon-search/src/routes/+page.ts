import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    // Fetch list of pokemons. This only contains name and URL to save data.
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=69420');
    const json = await result.json();

    // Get the ID and turn it into a data structure with O(1) lookup
    const pokemons = json.results.reduce((map: Record<string, string>, pokemon: any) => {
        const id = pokemon.url.split('/').slice(-2, -1)[0];
        map[pokemon.name] = id;
        return map;
    }, {});

    return { pokemons };
};
