import { Box } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <Box className='' sx={{bottom:'0', display:'block', left:'0', position:'fixed', width:'100%', zIndex:'10'}}>
      <Box sx={{background:'#DAE9EA', height:'25px'}}>
        <Box className='text-center'>
          Jermersoft ®  <strong> - Todos los derechos reservados </strong>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer