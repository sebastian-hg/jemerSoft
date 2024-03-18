import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GenericInformationDTO, InformationPokemonResponseDTO } from '../interfaces/interfaces';

const resultInitialState: GenericInformationDTO = {
  name: "",
  url: ""
}

const initialState: InformationPokemonResponseDTO[] = ([
  {
    id: 0,
    results: resultInitialState,
    weight: 0,
    height: 0,
    abilities: [],
    types: [],
    moves: [],
    descriptions: []
  }
]);

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<InformationPokemonResponseDTO[]>) => {
      return action.payload;
    }
  }
})

export const { addPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;