import '../i18n/config';
import './App.css';

import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import FacilitiesManagement from '../pages/FacilitiesManagement';
import Layout from '../components/Layout';
import theme from '../theme';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    // <LanguageProvider>
    <Suspense fallback={<div> hello load</div>}>
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
