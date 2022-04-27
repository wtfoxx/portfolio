import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

class ContactView extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={'5%'}
        
      >
        
        <Box maxWidth={500} textAlign={'center'}>
          <Typography variant="h3" gutterBottom>
          Contact Me
          </Typography>
          <p></p>
          <br />
          <Button variant="contained" startIcon={<GitHubIcon />} disableElevation color="secondary" href="https://github.com/wtfoxx" target='_blank' style={{minWidth: 130}} >GitHub</Button>
          <p></p>
          <Button variant="contained" startIcon={<LinkedInIcon />} disableElevation color="secondary" href="https://www.linkedin.com/in/leticia-monteiro-408ba2111/" target='_blank' style={{minWidth: 130}} >LinkedIn</Button>
          <p></p>
          <Button variant="contained" startIcon={<EmailIcon />} disableElevation color="secondary" href="mailto:leticiagmonteiro@gmail.com" target='_blank' style={{minWidth: 130}} >Email</Button>
        </Box>

      </Grid>
    );
  }
}

export default ContactView;