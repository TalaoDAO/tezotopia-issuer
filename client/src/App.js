import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Dashboard from './pages/Dashboard';
import Issuer from './pages/Issuer';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/issuer/:voucherId/:qrCode" element={<Issuer />}/>
          <Route exact path="/issuer/:voucherId" element={<Dashboard />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
