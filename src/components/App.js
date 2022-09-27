import React from 'react';
import Register from './authentication/Register';
import {Container} from 'react-bootstrap'
import { AuthProvider } from './authentication/contexts/AuthContexts';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserProfile from './authentication/UserProfile'
import Login from './authentication/Login'
import PrivateRoute from './authentication/PrivateRoute';
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'
import NavBar from './navigation/navigation_bar'
import Home from './home/home'
import About from './about/about'
import Competition from './competition/competition'
import Contact from './contact/contact'
import Download from './download/download'
import Leaderboard from './leaderboard/leaderboard'
import Verification from './verification/verification'

function App() {
  return (
    <Router>
      <NavBar/>
        <div>
            <AuthProvider>
              <Routes>
                <Route path='/user-profile' element={<PrivateRoute component={UserProfile}/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/update-profile' element={<PrivateRoute component={UpdateProfile}/>}/>
              </Routes>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/competition' element={<Competition/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/download' element={<Download/>}/>
                <Route path='/verification' element={<Verification/>}/>
                <Route path='/leaderboard' element={<Leaderboard/>}/>
              </Routes>
            </AuthProvider>
        </div>
    </Router>
  )}
    

export default App;
