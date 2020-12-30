import logo from './logo.svg';
import './App.css';
import Main from './Components/main.jsx'
import Login from './Components/Login'
import {useSelector, useDispatch} from 'react-redux'
import {auth, db} from './firebase';
import { useEffect, useState } from 'react';
import {setUser} from './actions/Login.actions'



const App = (props)  => {
  

  const dispatch = useDispatch();
  const userloggedin = useSelector((state) => state.appReducer.currentUser)
  const [display, setDisplay] = useState(<Login />)
  

  
  useEffect(() => {
    console.log("Mounted")
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        console.log(user)
        dispatch(setUser(user))
        setDisplay(<Main />)
      }
      else{
        setDisplay(<Login />)
      }
    })

    return () => {
      unsubscribe()
    };
  }, [])
  
  
  
  return (
    <div className="App">
      
      {display}

    </div>
  );
}

export default App;
