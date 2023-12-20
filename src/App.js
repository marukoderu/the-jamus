import { AboutJamus } from "./modules/aboutJamus";
import { JamuTypes } from "./modules/jamuTypes";
import { StepByStep } from "./modules/stepByStep";
import { AboutGeneralJamus } from "./modules/aboutGeneralJamu";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/step-by-step" element={StepByStep()} />
        <Route path="/jamu-types" element={JamuTypes()} />
        <Route path="/about-jamus" element={AboutJamus()} />
        <Route path="/about-general-jamu" element={AboutGeneralJamus()}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

