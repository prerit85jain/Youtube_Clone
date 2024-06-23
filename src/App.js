import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar'

function App() {
  return (
    <Router>
      <Navbar/>
      {
        <DrawerSidebar/>
      }
      <AllRoutes/>
    </Router>
  );
}

export default App;
