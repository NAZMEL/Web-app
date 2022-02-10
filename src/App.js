import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import NewsContainer from './components/News/NewsContainer';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = () => {
  console.log(React.version);
  return (  
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer/>}/>
            <Route path="/profile/:userId" element={<ProfileContainer />}/>
            <Route path="/users" element={<UsersContainer />}/>
            <Route path="/news" element={<NewsContainer/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}


export default App;
