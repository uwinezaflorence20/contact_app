import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbars from "./components/navbars";
import Contact from "./components/contact";
import Addcontact from "./components/addcontact";
import Update from "./components/update";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<Navbars />} />
          <Route path="/addcontact" element={<Addcontact />} />
        </Routes>
      </Router>
      <Update/>
    </>
  );
}

export default App;
