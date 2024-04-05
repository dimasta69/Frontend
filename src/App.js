import React, { useState } from 'react'; 
import "./App.css" 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
 
import Header from './Header/Header.jsx' 
import Category from './Category/Category.jsx' 
import Content from './Content/Content.jsx'; 
import Contents from './Contents/Contents.jsx';
import RegistrationForm from './RegistrationForm/RegistrationForm.jsx';
import LoginForm from './LoginForm/LoginForm.jsx';
import AddPhoto from './AddPhoto/AddPhoto.jsx';
import MyPhoto from './MyPhoto/MyPhoto.jsx';
 
function App() {
  const [dataCategory, setDataCategory] = useState(null); 
  
  return ( 
    <body>
      <RegistrationForm />
      <LoginForm />
      <Header /> 
      <main> 
        <Category setDataCategory={setDataCategory}/> 
        <BrowserRouter> 
          <Routes> 
            <Route path='/' element={<Content />} />
            <Route path='/category/:category?' element={<Content/>} />
            <Route path='/photo/:id?/' element={<Contents className="contents" dataCategory={dataCategory}/>}/> 
            <Route path='/add_photo/' element={<AddPhoto className="AddPhoto" />}/>
            <Route path='/my_photo/' element={<MyPhoto/>} />  
          </Routes> 
        </BrowserRouter> 
      </main> 
    </body> 
  ); 
} 
 
export default App;