import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculadora" element={<Calculadora />} />
    </Routes>
  );
}

export default App;