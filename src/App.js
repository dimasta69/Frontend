import React from 'react';
import axios from 'axios';
import "./App.css"

import Header from './Header/Header.jsx'
import Category from './Category/Category.jsx'
import Photos from './Photos/Photos.jsx'

function App() {
  return (
    <div className='body'>

      <Header />

      <main className='main'>

        <Category />
        <Photos />

      </main>

    </div> 
  );
}

export default App;