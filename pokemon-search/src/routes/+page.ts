import type { PageLoad } from './types';

//eslint-disable-next-line
export const load: PageLoad = async ({ fetch, params }) => {
	const result = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=6969');
	const json = await result.json();

	//eslint-disable-next-line
	let pokemons = json.results.map((pokemon: any) => {
		return {
			label: pokemon.name.toUpperCase(),
			value: pokemon.name
		};
	});

	pokemons = pokemons.sort((a, b) => a.value.localeCompare(b.value));
	return { pokemons };
};
