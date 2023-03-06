import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {

  Routes,
  Route
 
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Appoint from "./components/Appoint";
import Error from "./components/Error";
import Logout from "./components/Logout";


function App() {

  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appoint />} />
        <Route path="/logout" element={<Logout />} />
        <Route  path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
