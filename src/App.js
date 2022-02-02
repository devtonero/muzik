import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Services from "./pages/services/services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
