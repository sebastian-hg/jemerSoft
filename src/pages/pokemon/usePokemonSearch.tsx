import { useState } from "react";
import { useDispatch } from "react-redux";
import { GenericInformationDTO, InformationPokemonResponseDTO } from "../../interfaces/interfaces";
import { addPokemons } from "../../redux/userSlice";
import pokemonService from "../../services/pokemonService";

interface OutputProps {
  handleClose: Function;
  open: boolean;
  pokemonList: InformationPokemonResponseDTO[];
  handleOpen: Function;
  showButton: boolean;
  hadlerGetDataSubmit: Function;
  pokemonModal: InformationPokemonResponseDTO;
  getDescriptionSpanish: Function;
}

const usePokemonSearch = (): OutputProps => {

  const resultInitialState: GenericInformationDTO = {
    name: "",
    url: ""
  }

  const initialState: InformationPokemonResponseDTO = {
    id: 0,
    results: resultInitialState,
    weight: 0,
    height: 0,
    abilities: [],
    types: [],
    moves: [],
    descriptions: []
  }

  //hooks
  const dispactch = useDispatch();

  //states
  const [showButton, setShowButton] = useState<boolean>(true);
  const [pokemonModal, setPokemonModal] = useState<InformationPokemonResponseDTO>(initialState);
  const [pokemonList, setPokemonlist] = useState<InformationPokemonResponseDTO[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (pokemon: InformationPokemonResponseDTO) => {
    setPokemonModal(pokemon);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hadlerGetDataSubmit = () => {
    pokemonService.getPokemon()
      .then(data => {
        if (data) {
          setShowButton(false);
          console.log(data, "lista de pokemones obtenidos desde el backend");
          setPokemonlist(data);
          dispactch(addPokemons(data));
        } else {
          console.log('error en service', data);
        }
      }), (error: any) => {
        console.log('error en service, no se logro establecer conexion con el backend',error);
      }
  }

  const getDescriptionSpanish = (pokemon: InformationPokemonResponseDTO):string => {
    let description = "El pokemóm no posee descripcion en español"
        // if ()

        // const spanishDescriptions = pokemon.descriptions.filter
        pokemon.descriptions.map((desc)=>{
          if (desc.language.name === 'es') 
            description =desc.description.toString();
        })

    return description;
  }

  return {
    open,
    hadlerGetDataSubmit,
    pokemonList,
    handleClose,
    handleOpen,
    showButton,
    pokemonModal,
    getDescriptionSpanish
  }
}

export default usePokemonSearch;