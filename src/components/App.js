import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import UserContext from '../context/UserContext';
import SignUpPage from '../pages/SignUpPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user == null){
      fetch('/api/check_session')
      .then(response => {
        if (response.ok) {
          response.json().then( user => {setUser(user)})
        }
      })
    }
  }, [])

  



  return (
<UserContext.Provider value={{user, setUser}}>
  <div className='app-container'>
  <BrowserRouter>
    <NavBar />
   <div className='content-container'>
   <Routes>
      <Route path='/'index element = {<Home />}/>
      <Route path='/login' element = {<LoginPage />}/>
      <Route path='/signup' element={<SignUpPage />}/>
    </Routes>
    </div>
    </BrowserRouter>
  </div>
</UserContext.Provider>
  );
}

export default App;
