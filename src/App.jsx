import { useState } from "react";
import { BrowserRouter as Router  , Routes, Route } from "react-router-dom";
import "./App.css";
import Navbars from "./components/Navbars";
import Contact from "./components/contact";
import Addscontact from "./components/Addscontact";
import Update from "./components/update";
import Anotheracount from "./components/anotheracount";
import footer from "./components/footer"; 
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<Navbars />} />
          <Route path="/Addscontact" element={<Addscontact />} />
          <Route path="/update" element={<Update />} />
          <Route path="/anotheracount" element={<Anotheracount />} />
           <Route path="/Footer" element={<footer />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
