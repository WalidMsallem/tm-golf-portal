import '../i18n/config';
import './App.css';

import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import FacilitiesManagement from '../pages/FacilitiesManagement';
import Layout from '../components/Layout';
import theme from '../theme';

function App(): JSX.Element {
  return (
    <Suspense fallback={<div>...</div>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <FacilitiesManagement />
        </Layout>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
