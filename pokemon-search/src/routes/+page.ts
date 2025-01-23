import type { PageLoad } from './types';

export const load: PageLoad = async ( { fetch, params } ) => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=6969');
    const json = await result.json();

    let pokemons = json.results.map((pokemon: any) => {
        return {
            label: pokemon.name.toUpperCase(),
            value: pokemon.name,
        };
    });

    pokemons = pokemons.sort((a, b) => a.value.localeCompare(b.value));
    return { pokemons };
}