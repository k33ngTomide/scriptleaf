import { Button, ButtonGroup, Container, Typography } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react';

const NavContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const NavBar = () => {
  return (
    <NavContainer>
      <Typography
        variant='h4'
        color={'primary'}
      >
        ScriptLeaf
      </Typography>
      
      <ButtonGroup variant='outline' >
        <Button>
          Recent Views
        </Button>

        <Button>
          Movies
        </Button>

        <Button>
          Books
        </Button>
      </ButtonGroup>
    </NavContainer>
  );
};

