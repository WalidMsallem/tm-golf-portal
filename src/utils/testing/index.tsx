import '../../i18n/config';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { render } from '@testing-library/react';

import store from '../../features/store';
import theme from '../../theme';

// type AllProviderPropsType = {
//   children: JSX.Element | JSX.Element[];
// };

// const AllProvider = ({ children }) => (
const AllProvider = ({ children }: any): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  </ThemeProvider>
);
// const hhhhh = (ui: JSX.Element, {  ...options } = {}) =>
//     rtlRender(ui, {
//         wrapper: ({ children }) => (
//             <QueryClientProvider client={client}>
//                 {children}
//             </QueryClientProvider>
//         ), ...options
//     });

// export const customRender = (ui: JSX.Element) => render(ui, { wrapper: AllProvider });
export const customRender = (ui: JSX.Element, { ...options } = {}) => render(ui, { wrapper: AllProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
