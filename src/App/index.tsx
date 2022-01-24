import '../i18n/config';
import './App.css';

import React, { Suspense } from 'react';

import FacilitiesManagement from '../pages/FacilitiesManagement';
import Layout from '../components/Layout';

function App(): JSX.Element {
  return (
    <Suspense fallback={<div>...</div>}>
      <Layout>
        <FacilitiesManagement />
      </Layout>
    </Suspense>
  );
}

export default App;
