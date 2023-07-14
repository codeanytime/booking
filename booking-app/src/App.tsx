import React, { useState, useMemo } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppMenu from './common/Menu';
import Footer from './common/Footer';
import AppBody from './common/AppBody';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [theme, selectTheme] = useState(lightTheme)

  const callbackFunction = (childData: boolean) => {
    if (childData) {
      selectTheme(lightTheme)
    } else {
      selectTheme(darkTheme);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppMenu parentCallback={callbackFunction} />
      <AppBody />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
