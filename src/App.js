import { AboutJamus } from "./modules/aboutJamus";
import { JamuTypes } from "./modules/jamuTypes";
import { StepByStep } from "./modules/stepByStep";
import { AboutGeneralJamus } from "./modules/aboutGeneralJamu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./modules/landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Landing()} />
        <Route path="/step-by-step" element={StepByStep()} />
        <Route path="/jamu-types" element={JamuTypes()} />
        <Route path="/jamu/:jamu" element={<AboutJamus/>} />
        <Route path="/about-general-jamu" element={AboutGeneralJamus()}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

