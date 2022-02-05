import { Routes, Route } from "react-router-dom";
import { Globalstyle } from "./globalstyles";
import Homepage from "./pages/homepage/homepage";
import Services from "./pages/services/services";

function App() {
  return (
    <>
      <Globalstyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
