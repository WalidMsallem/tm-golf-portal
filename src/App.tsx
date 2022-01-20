import React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import FacilitiesManagement from './pages/FacilitiesManagement';

import theme from './theme';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <FacilitiesManagement />
      </ThemeProvider>
    </div>
  );
}

export default App;
