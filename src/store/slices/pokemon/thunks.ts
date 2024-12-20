import { pokemonApi } from "../../../api";
import { AppDispatch, RootState } from "../../store";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0  ) => {
  
  return async ( dispatch: AppDispatch, getState: () => RootState ) => {
    dispatch( startLoadingPokemons() );

    // offset: Desde qué número de registro se va a traer
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10}`);
    console.log( data.results );

    dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
  }
}