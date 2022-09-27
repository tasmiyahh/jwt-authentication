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
import { useContext , useEffect } from 'react';
import { GlobalContext } from './context';
import axios from "axios"





// function App() {
//   const {state ,dispatch} = useContext(GlobalContext)
//   useEffect(()=>{
//     let baseUrl = "http://localhost:5000";

//     axios.get(`${baseUrl}/profile`, {
     
//     }, {withCredentials:true})
//     .then(function (response) {
//       if (response.status === 200) {
//         console.log("response: ", response.data.profile);
//         dispatch({
//           type: "USER_LOGIN",
//           payload: response.data.profile
//         })
//       } else {
//         dispatch({
//           type: "USER_LOGOUT"
//         })
//       }
      
//     })
//     .catch(function (error) {
//       console.log("error in api call" , error.message);
//       dispatch({
//         type : "USER_LOGOUT"
//       })
     
//     });
//   },[])

  
//   return (
//     <>
    
//      <Router>
//        <NavBar/>

//       <Routes>

//         <Route path='/login' element={<Login/>}/>
//         <Route path='/signup' element={<Signup/>} />
//         <Route path='/profile' element={<Profile/>}/>
//       </Routes>
//      </Router>

//     </>

//   );
// }


function App() {

  let { state, dispatch } = useContext(GlobalContext);


  useEffect(() => {

    const getProfile = async () => {
      let baseUrl = "http://localhost:5000";
      try {
        let response = await axios({
          url: `${baseUrl}/profile`,
          method: "get",
          withCredentials: true
        })
        if (response.status === 200) {
          console.log("response: ", response.data);
          dispatch({
            type: "USER_LOGIN",
            payload: response.data
          })
        } else {
          dispatch({
            type: "USER_LOGOUT"
          })
        }
      } catch (e) {
        console.log("Error in api call: ", e);
        dispatch({
          type: "USER_LOGOUT"
        })
      }
    }
    getProfile();
  }, [])
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
