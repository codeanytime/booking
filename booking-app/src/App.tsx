import React from 'react';
import './App.css';
import AppMenu from './common/Menu';
import Footer from './common/Footer';
import AppBody from './common/AppBody';

function App() {
  return (
    <div className="App">
      <AppMenu />
      <AppBody />
      <Footer />
    </div>
  );
}

export default App;
