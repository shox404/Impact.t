import { Routes, Route } from "react-router-dom"; 
import Index from "./pages/open-space"; 
import Home from "./pages/home"; 


import About from "./pages/about";

import AboutStudio from "./pages/AboutStudio"; 

 
export default function Router() { 
  return ( 
    <Routes> 

      <Route path="/" element={<Home />} />
      <Route path="/open-space" element={<Index />} /> 
      <Route path="/About" element={<About/>}/> 
      <Route path="/about-studio" element={<AboutStudio />} /> 
    </Routes> 
  ); 
}

