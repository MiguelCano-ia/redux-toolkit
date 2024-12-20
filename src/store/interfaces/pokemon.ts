export interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  page: number;
  pokemons: Pokemon[];
  loading: boolean;
}

export const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  loading: false,
};