import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/HomePage"
import ItemAudit from "./pages/inventory_audit"
import NegativePI from "./pages/negative_pi"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/inventory_audit" element = {<ItemAudit/>}/>
        <Route exact path = "/negative_pi" element = {<NegativePI/>}/>
        
      </Routes>
      </Router>
        
    </div>
  );
}

export default App;
