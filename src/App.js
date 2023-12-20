import { AboutJamus } from "./modules/aboutJamus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-jamus" element={AboutJamus()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

