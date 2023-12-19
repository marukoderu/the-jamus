import { AboutJamus } from "./modules/aboutJamus";
import { JamuTypes } from "./modules/jamuTypes";
import { StepByStep } from "./modules/stepByStep";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-jamus" element={AboutJamus()} />
        <Route path="/step-by-step" element={StepByStep()} />
        <Route path="/jamu-types" element={JamuTypes()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

