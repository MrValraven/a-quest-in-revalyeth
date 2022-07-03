import { useEffect } from "react";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Deities from "./pages/Deities/Deities";
import Home from "./pages/Home/Home";
import CharacterBuilder from "./pages/CharacterBuilder/CharacterBuilder";

function App() {
  let location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deities" element={<Deities />} />
        <Route path="/characterbuilder" element={<CharacterBuilder />} />
      </Routes>
    </div>
  );
}

export default App;
