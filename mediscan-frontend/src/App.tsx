import { Route, Routes } from "react-router-dom";
import PageShell from "./components/layout/PageShell";
import DiabetesPrediction from "./pages/DiabetesPrediction";
import HeartPrediction from "./pages/HeartPrediction";
import Home from "./pages/Home";

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<HeartPrediction />} />
        <Route path="/diabetes" element={<DiabetesPrediction />} />
      </Routes>
    </PageShell>
  );
}
