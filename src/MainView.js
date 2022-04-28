import { Grid, Typography, Box, Button } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";

class MainView extends React.Component {
  render() {
    return (
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop={'12%'}
        >
          <img 
            loading="lazy"
            alt="imagea"
            src="./typing.gif" 
            style={{  
              width: 350,
              height: 'auto',
              marginRight: 40,
              borderRadius: '50%'
            }}
          />
          
          <Box maxWidth={500}>
            <Typography variant="h3" gutterBottom>
            Hello World ✌️(^-^)
            </Typography>
            <Typography variant="body1" gutterBottom>
            My name is Leticia Monteiro, but you can call me Lemon (because LEticia MONteiro, get it? 😅), or Fox, or Leticia, or whatever you want really, I'm cool with that. My pronouns are she/her/hers.
            <br />
            I'm a brazilian located in western Canada with a bachelor's degree in Graphic Design and a little bit of work experience in UX/UI Design.
            </Typography>
            <p></p>
            <Button variant="contained" disableElevation color="secondary" href="/portfolio/work">Check out my work</Button>
          </Box>

        </Grid>
    );
  }
}

export default MainView;