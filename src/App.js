import React from 'react';
import axios from 'axios';
import "./App.css"

import Header from './Header/Header.jsx'
import Category from './Category/Category.jsx'
import Content from './Content/Content.jsx';

function App() {
  return (
    <body>

      <Header />

      <main>

        <Category />
        <Content />

      </main>

    </body>
  );
}

export default App;