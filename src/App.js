import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor="#3f6d91"
      showAlert("dark mode enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("light mode enabled","success")
    }
  }
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode,setMode] = useState('light')
  const [alert , setAlert]= useState(null)
    return (
<>
<Router>
 
  <Navbar title={'TextUtils'} about={'AboutTextUtils'} mode={mode} toggleMode={toggleMode}/>
  <Alert alert = {alert}/>
  <Routes>
    <Route path = "/about" element= {<About mode = {mode}/>}>
    </Route>
    <Route path = "/" element = {<TextForm showAlert={showAlert} mode = {mode} heading = {'Try TextUtils: word counter | character counter | lowercase to uppercase And vice-versa'} />}>
    </Route>
   </Routes>
</Router>
</>
        
    );
}

export default App;