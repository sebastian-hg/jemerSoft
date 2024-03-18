import axios from "axios";
import { InformationPokemonResponseDTO } from "../interfaces/interfaces";
import { API_ENDPOINT } from "./contans";


class PokemonService {
  getPokemon = async () => {
    return axios.get<InformationPokemonResponseDTO>(API_ENDPOINT)
      .then(response => response.data)
      .catch(error => error.response.data)
  }
}

export default new PokemonService();