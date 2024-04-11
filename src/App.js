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
import Profile from './Profile/Profile.jsx';
import WebSocketComponent from './WebSocketComponent/WebSocketComponent.jsx';
 
function App() {
  const [dataCategory, setDataCategory] = useState(null);

  return (
    <body>
      <RegistrationForm />
      <LoginForm />
      <Header />
      <main>
        <Category setDataCategory={setDataCategory} />
        <WebSocketComponent /> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/sort_by/:sort_by?/:asc?' element={<Content />} />
            <Route path='/category/:category?' element={<Content />} />
            <Route path='/photo/:id?/' element={<Contents className="contents" dataCategory={dataCategory} />} />
            <Route path='/add_photo/' element={<AddPhoto className="AddPhoto" dataCategory={dataCategory} />} />
            <Route path='/my_photo/status/:status?' element={<MyPhoto className='q' />} />
            <Route path='/profile/' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
    </body>
  );
} 
 
export default App;