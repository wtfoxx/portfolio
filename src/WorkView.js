import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Tooltip, Stack, Chip, Grid, Typography, IconButton, Collapse, CardActions, CardContent, CardMedia, CardHeader, Card } from '@mui/material';


export default function WorkView() {

    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        marginTop={'3%'}
      >
        <Grid item>
          
          <Card sx={{width: 400}}>
            <CardHeader
              title="Flexnit"
              subheader="Single page web app"
            />
            <CardMedia
              component="img"
              height="200"
              image="./flexnit.png"
              alt="placeholder"
            />
            <CardContent>
              <Typography variant='button'>Summary</Typography>
              <Typography variant="body2" minHeight={150}>
                Flexnit is a single page app that uses state routing and a responsive UI library for a seamless, smooth experience. The app provides movies from a dedicated API and allows users to view information about the movies, Directors and Genres, and add/remove Movies to a list of favorites. New users are able register, registered users can login, interact with the app and logout.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip arrow title="Github">
                <IconButton aria-label="github" href='https://github.com/wtfoxx/flexnit-client' target='_blank'>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Deployed app">
                <IconButton aria-label="live" href='https://flexnit.netlify.app/' target='_blank'>
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </Grid>


        <Grid item>
          
          <Card sx={{width: 400}}>
            <CardHeader
              title="Meet App"
              subheader="PWA app"
            />
            <CardMedia
              component="img"
              height="200"
              image="./meet.png"
              alt="placeholder"
            />
            <CardContent>
              <Typography variant='button'>Summary</Typography>
              <Typography variant="body2" minHeight={150}>
                Meet is a PWA app that uses the Google Calendar API to fetch events and display them. The user can filter the events by city and number of events to show. There is also a graph visualization of the selected events.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip arrow title="Github">
                <IconButton aria-label="github" href='https://github.com/wtfoxx/meet' target='_blank'>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Deployed app">
                <IconButton aria-label="live" href='https://wtfoxx.github.io/meet/' target='_blank'>
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </Grid>


        <Grid item>
          
          <Card sx={{width: 400}}>
            <CardHeader
              title="Pokedex"
              subheader="First JS app"
            />
            <CardMedia
              component="img"
              height="200"
              image="./poke.png"
              alt="placeholder"
            />
            <CardContent>
              <Typography variant='button'>Summary</Typography>
              <Typography variant="body2" minHeight={150}>
              This is my first JavaScript project.
              It consists of a Pokedex app that will retrieve information from an API to display on a usable app. It uses JS, HTML and CSS, and with external libraries like Bootstrap and JQuery, it ensures a better looking and smoother performing app. You can search for any pokemon on the top right!
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip arrow title="Github">
                <IconButton aria-label="github" href='https://github.com/wtfoxx/pokedex-app' target='_blank'>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Deployed app">
                <IconButton aria-label="live" href='https://wtfoxx.github.io/pokedex-app/' target='_blank'>
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </Grid>
         

      </Grid>
    );
  }


