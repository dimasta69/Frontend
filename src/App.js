import React from 'react'; 
import axios from 'axios'; 
import "./App.css" 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
 
import Header from './Header/Header.jsx' 
import Category from './Category/Category.jsx' 
import Content from './Content/Content.jsx'; 
import Contents from './Contents/Contents.jsx';
import RegistrationForm from './RegistrationForm/RegistrationForm.jsx';
import LoginForm from './LoginForm/LoginForm.jsx';
 
function App() { 
  return ( 
    <body>
      <RegistrationForm />
      <LoginForm />
      <Header /> 
      <main> 
        <Category /> 
        <BrowserRouter> 
          <Routes> 
            <Route path='/1/' element={<Contents className="contents" />}/> 
            <Route path='/' element={<Content />} /> 
          </Routes> 
        </BrowserRouter> 
      </main> 
    </body> 
  ); 
} 
 
export default App;