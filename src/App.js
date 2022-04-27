import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, CardContent, Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainView from './MainView';
import WorkView from './WorkView';
import AboutView from './AboutView';
import ContactView from './ContactView';
import { indigo, yellow, grey } from '@mui/material/colors';


const myTheme = createTheme({
  palette: {
    
    primary: {
      main: indigo[400],
    },

    secondary: {
      main: yellow[500]
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Paper elevation={0} sx={{height: '100vh'}}>
        <Router>
          <Navbar />
          <Box>
            <Routes>
              <Route exact path="/" element={<MainView />} />
              <Route path="/work" element={<WorkView />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/contact" element={<ContactView />} /> 
            </Routes>
          </Box>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
