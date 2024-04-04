import { Container, Typography } from '@mui/material'
import React from 'react'

const ShowGlass = ({show}) => {
  return (
    <Container>
      <Typography
        variant='h2'
        color={'primary'}

      >
        {show}
      </Typography>

    </Container>
  )
}

export default ShowGlass