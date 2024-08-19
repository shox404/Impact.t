import { Routes, Route } from "react-router-dom"; 
import Index from "./pages/open-space"; 
import Home from "./pages/home"; 
import AboutStudio from "./pages/AboutStudio"; 
import News from "./pages/news/news";
export default function Router() { 
  return ( 
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/open-space" element={<Index />} /> 
      <Route path="/about-studio" element={<AboutStudio />} />
      <Route path="/news" element={<News />} />

    </Routes> 
  ); 
}