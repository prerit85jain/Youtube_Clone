import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar'
import { useState } from 'react';

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer}/>

        <DrawerSidebar 
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />

      <AllRoutes/>
    </Router>
  );
}

export default App;
