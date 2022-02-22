import {useState, React} from "react"
import "./app.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLoader from "./components/pageloader/homeloader";
import Interests from "./components/pageloader/interests";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <div>
       <Router>
          <Routes>
            <Route path="/" element= {<HomeLoader/>} exact />
            <Route path="/interests" element = {<Interests/>} exact />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
