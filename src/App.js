import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (  
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer dialogsPage={props.state.dialogsPage}                                      
                                                      dispatch = {props.dispatch}
                                                      />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/news" element={<News newsPage={props.state.newsPage}
                                                dispatch={props.dispatch}/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}


export default App;
