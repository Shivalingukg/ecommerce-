import React from 'react';
import Header from './Components/Header';
import NavBar from './components/NavBar';
import Footer from './Components/Footer';
import Body from './Components/Body';


import './App.css'
const App = () => {
  return (
    <>
    
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
