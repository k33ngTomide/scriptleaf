import { Container } from '@mui/material'
import React from 'react'
import { NavBar } from '../../components/navbar/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import BookContainer from '../../components/booksContainer/BookContainer';
import { Outlet } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', 
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