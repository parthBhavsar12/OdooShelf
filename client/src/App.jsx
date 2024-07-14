import { useState } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/home';
import Books from './components/books/books';

function App() {
  
  return (
    <>
      {/* <Nav/><Home/> */}
      <Nav/><Books/>
    </>
  )
}

export default App;
