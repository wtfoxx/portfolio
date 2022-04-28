import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  
 
  return (
    <AppBar position="static" color='primary' variation='outlined' enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Button href="/portfolio">
          <Typography variant='h4'>🍋</Typography>
          </Button>  
          
          <Button 
            sx={{ color: 'white', display: 'block', marginLeft: '2%'}}
          >
            <Link to='/portfolio/work' style={{textDecoration: 'none', color: 'white'}}>
              Work
            </Link>
          </Button>


          <Button 
            sx={{ color: 'white', display: 'block', marginLeft: '2%'}}
          >
            <Link to='/portfolio/about' style={{textDecoration: 'none', color: 'white'}}>
              About me
            </Link>
          </Button>
          <Button 
            sx={{ color: 'white', display: 'block', marginLeft: '2%'}}
            href="/portfolio/contact"
          >
            <Link to='/portfolio/contact'style={{textDecoration: 'none', color: 'white'}}>
              Contact
            </Link>
          </Button> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;