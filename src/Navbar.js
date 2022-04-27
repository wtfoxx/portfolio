import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { IconButton, Typography } from '@mui/material';


const Navbar = () => {
  
 
  return (
    <AppBar position="static" color='primary' variation='outlined' enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Button href="/">
          <Typography variant='h4'>🍋</Typography>
          </Button>  
        

          <Button 
            sx={{ color: 'white', display: 'block', marginLeft: '2%'}}
            href="/work"
          >
            Work
          </Button>
          <Button 
            sx={{ color: 'white', display: 'block', marginLeft: '2%'}}
            href="/about"
          >
            About me
          </Button>
          <Button 
            sx={{ color: 'white', display: 'block', marginLeft: '2%'}}
            href="/contact"
          >
            Contact
          </Button> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;