import { Routes, Route } from "react-router-dom";
import Index from "./pages/open-space";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/open-space" element={<Index />} />
    </Routes>
  );
}
