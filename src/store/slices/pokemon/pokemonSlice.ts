import { initialState, Pokemon } from '../../interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: ( state ) => {
      state.loading = true;
    },
    setPokemons: ( state, action: PayloadAction<{ pokemons: Pokemon[], page: number }> ) => {
      state.loading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

// thunks: Accion que tiene un codigo asincrono y dependiendo de este dispara una accion.