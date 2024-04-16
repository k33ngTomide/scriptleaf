import { Container} from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/navbar/NavBar'

const ShowGlass = ({content}) => {
  return (
    <Container>
      {/* <Detail showing={content}/> */}
      <NavBar/>
      <Outlet/>
    </Container>
  )
}

export default ShowGlass