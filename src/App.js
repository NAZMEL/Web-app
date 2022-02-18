import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import NewsContainer from './components/News/NewsContainer';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginPage from "./components/Login/Login"
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />

          <div className="app-wrapper-content">
            <Routes>
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<NewsContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default connect(mapStateToProps, { initializeApp })(App);

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app-wrapper">
//         <HeaderContainer />
//         <Navbar />

//         <div className="app-wrapper-content">
//           <Routes>
//             <Route path="/dialogs" element={<DialogsContainer />} />
//             <Route path="/profile/:userId" element={<ProfileContainer />} />
//             <Route path="/users" element={<UsersContainer />} />
//             <Route path="/news" element={<NewsContainer />} />
//             <Route path="/music" element={<Music />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/login" element={<LoginPage />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }


// export default App;
