import { useState } from "react";
import { BrowserRouter as Router  , Routes, Route } from "react-router-dom";
import "./App.css";
import Navbars from "./components/navbars";
import Contact from "./components/contact";
import Addcontact from "./components/addcontact";
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
          <Route path="/addcontact" element={<Addcontact />} />
          <Route path="/update" element={<Update />} />
          <Route path="/anotheracount" element={<Anotheracount />} />
           <Route path="/Footer" element={<footer />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
