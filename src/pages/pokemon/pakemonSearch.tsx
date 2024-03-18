
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CardContent, Modal, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import '../../index.scss';
import usePokemonSearch from './usePokemonSearch';

const PokemonSearch = () => {

  const {
    getDescriptionSpanish,
    hadlerGetDataSubmit,
    pokemonList,
    handleClose,
    handleOpen,
    showButton,
    pokemonModal,
    open,
  } = usePokemonSearch();

  return (
    <Box>
      <Header />

      <Box className='container'>
        <Typography className='font-title-principal text-center mt-5'> Bienvenidos al maravilloso mundo de los Pokemones <CatchingPokemonIcon /> </Typography>

        {
          showButton
            ?
            <Box className='d-flex mt-3'>
              <Typography className='font-title-Secundary text-Center'>Ver lista completa de pokemones</Typography>
              <Button className='ms-3' endIcon={<SearchIcon />} variant='contained' onClick={() => hadlerGetDataSubmit()}> Buscar</Button>
            </Box>
            :
            <Typography className='mt-3 font-title-Secundary text-Center'>lista completa de pokemones </Typography>
        }

        <Box className='row'>
          {
            pokemonList && pokemonList.length > 0
              ?
              pokemonList.map((pokemon, index) => (
                <Box key={index} className='col-6 mt-3'>
                  <CardContent className='border-card'>
                    <Typography className='font-title-card'>
                      <strong>Nombre:</strong> {pokemon.results.name}
                    </Typography>
                    <Typography className='font-title-card'>
                      <strong>Foto: </strong> <a href={`${pokemon.results.url}`} target="_blank">{pokemon.results.url}</a>
                    </Typography>
                    <Typography className='font-title-card'>
                      <strong>Peso:</strong> {`${pokemon.weight} kilogramos`}
                    </Typography>
                    <Typography className='font-title-card'>
                      <strong>Tipo:</strong> {pokemon.types.map((type, index) => (
                        <span key={index}>{type.type.name}{index !== pokemon.types.length - 1 ? ', ' : ''}</span>
                      ))}
                    </Typography>
                    <Typography className='font-title-card'>
                      <strong>Lista de habilidades :</strong> {pokemon.abilities.map((ability, index) => (
                        <span key={index}>{ability.ability.name}{index !== pokemon.types.length - 1 ? ', ' : ''}</span>
                      ))}
                    </Typography>
                    <Box sx={{ justifyContent: 'end', display: 'flex' }}>
                      <Button size='small' onClick={() => handleOpen(pokemon)}>Leer Mas +</Button>
                    </Box>
                  </CardContent>
                </Box>
              ))
              :
              <Box></Box>
          }
        </Box>
      </Box>

      <Footer />

      <Box >
        <Modal className='modal-size' open={open} onClose={() => handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              padding: '20px',
              outline: 'none',
              borderRadius: '4px',
            }}
          >
            <Typography variant='h6'>
              Infomarción adicional
            </Typography>
            <Typography>
              <strong className='font-title-modal'>Infomarción:</strong>
              {`Altura: ${pokemonModal.height} centímetros`}
            </Typography>
            <Typography>
              <strong className='font-title-modal'>Descripción:</strong>
              {` ${getDescriptionSpanish(pokemonModal)}`}
            </Typography>
            <Typography>
              <strong className='font-title-modal'>Lista de movimientos:</strong>
              {`${pokemonModal.moves.map((move) => " " + move.move.name)}`}
            </Typography>
            <Box sx={{ textAlign: 'right' }}>
              <Button variant="contained" onClick={() => handleClose()}>
                Volver
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>

  )
}

export default PokemonSearch;