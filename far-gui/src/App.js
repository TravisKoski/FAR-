import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/HomePage"
import ItemView from "./pages/inventory_view"
import ItemAudit from "./pages/item_audit"
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
        <Route exact path = "/inventory_view" element = {<ItemView/>}/>
        <Route exact path = "/item_audit/:id" elemend = {<ItemAudit/>}/>
        <Route exact path = "/negative_pi" element = {<NegativePI/>}/>
        
      </Routes>
      </Router>
        
    </div>
  );
}

export default App;
