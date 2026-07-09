import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import JogoDoGalo from "./pages/JogoDoGalo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="/jogodogalo" element={<JogoDoGalo />} />
    </Routes>
  );
}

export default App;