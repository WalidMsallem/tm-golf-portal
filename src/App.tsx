import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import FacilitiesManagement from './pages/FacilitiesManagement';
import Layout from './components/Layout';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <FacilitiesManagement />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
