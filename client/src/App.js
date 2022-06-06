import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Dashboard from './pages/Dashboard';
import Issuer from './pages/Issuer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/issuer" element={<Issuer />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
