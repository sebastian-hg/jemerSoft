import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './userSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});