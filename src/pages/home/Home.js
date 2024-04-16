import { Container } from '@mui/material'
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#135D66', 
    },
    secondary: {
      main: '#ffc107', 
    },
  },
  typography: {
    fontFamily: 'Roboto', 
  },
  
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar/>
        <Outlet/>
        
      </Container>
    </ThemeProvider>
  )
}

export default Home