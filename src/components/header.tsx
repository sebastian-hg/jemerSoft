import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import React from 'react'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, width:'100%', }}>
    <AppBar position="static" sx={{width:'100%'}}>
      <Toolbar>
        <IconButton sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Menu
        </Typography>
        <Button color="inherit">Login</Button>
        <AccountCircleIcon/>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header