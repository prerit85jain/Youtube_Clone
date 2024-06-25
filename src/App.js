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
    dispay:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.dispay==="none"){
      setToggleDrawerSidebar({
        dispay:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        dispay:"none"
      })
    }
  }
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer}/>

        <DrawerSidebar toggleDrawer={toggleDrawer}/>

      <AllRoutes/>
    </Router>
  );
}

export default App;
