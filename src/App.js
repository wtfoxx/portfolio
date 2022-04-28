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
import { Link } from 'react-router-dom';


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
    <ThemeProvider theme={myTheme} sx={{height: '100vh'}}>     
      <Navbar />
        <Box>
          <Router>
            <Routes>
              <Route exact path="/portfolio/" element={<MainView />} />
              <Route path="/portfolio/work" element={<WorkView />} />
              <Route path="/portfolio/about" element={<AboutView />} />
              <Route path="/portfolio/contact" element={<ContactView />} /> 
            </Routes>
          </Router>
        </Box>
        
    </ThemeProvider>
  );
}

export default App;
