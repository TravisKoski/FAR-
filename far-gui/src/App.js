import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/HomePage"
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
        
      </Routes>
      </Router>
        
    </div>
  );
}

export default App;
