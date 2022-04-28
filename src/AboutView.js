import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

class AboutView extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={'10%'}
        
      >
        <img 
          loading="lazy"
          alt="imagea"
          src="./me.jpg" 
          style={{  
            width: 350,
            height: 'auto',
            marginRight: 40,
            borderRadius: '50%'
          }}
        />
        
        <Box maxWidth={500}>
          <Typography variant="h3" gutterBottom>
          About Me
          </Typography>
          <Typography variant="body1" gutterBottom>
          👋🏻 My name is Leticia Monteiro, but you can call me Lemon (because LEticia MONteiro, get it? 😅), or Fox, or Leticia, or whatever you want really, I'm cool with that. My pronouns are she/her/hers.
          <br />
          🌎 I'm a brazilian located in western Canada with a bachelor's degree in Graphic Design, with a little bit of work experience in UX/UI Design.
          <br />
          💻 Currently enrolled in a full-stack development bootcamp (since Jan-2022), and making my way to shifting careers into development. I plan on concluding the bootcamp around May, so stay tuned.
          <br />
          🙋🏻‍♀️ Currently looking for a job as a junior developer, so if you got something let me know!
          <br />
          ❤️ My hobbies are singing, playing videogames and watching weird videos on Youtube
          </Typography>
          <p></p>
          <Button variant="contained" disableElevation color="secondary" style={{marginRight: 10}} >
            <Link to='/portfolio/work' style={{textDecoration: 'none', color: 'black'}}>
              Check out my work
            </Link>    
          </Button>
          <Button variant="contained" disableElevation color="primary" Link to="/contact">
          <Link to='/portfolio/contact' style={{textDecoration: 'none', color: 'white'}}>
              Contact me
          </Link>
          </Button>
        </Box>

      </Grid>
    );
  }
}

export default AboutView;