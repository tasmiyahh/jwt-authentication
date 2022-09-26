import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import NavBar from './components/navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";





function App() {
  return (
    <>
    
     <Router>
       <NavBar/>

      <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
     </Router>

    </>

  );
}

export default App;
