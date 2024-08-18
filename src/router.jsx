import { Routes, Route } from "react-router-dom";
import AboutStudio from './pages/AboutStudio/AboutStudio'
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={null} />
      <Route path="/about-studio" element={<AboutStudio/>}/>
    </Routes>
  );
}
