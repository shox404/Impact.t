import { Routes, Route } from "react-router-dom"; 
import Index from "./pages/open-space"; 
import Home from "./pages/home"; 
import AboutStudio from "./pages/AboutStudio"; 
import Gallery from './pages/Gallery/Index'
import News from "./pages/news/news";
import About from "./pages/about"; 
import Meeting from './pages/meetings rooms/meeting';
import Offece from './pages/offece/offece'

export default function Router() { 
  return ( 
    <Routes> 

      <Route path="/" element={<Home />} />
      <Route path="/open-space" element={<Index />} /> 
      <Route path="/About" element={<About/>}/> 
      <Route path="/about-studio" element={<AboutStudio />} /> 
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/new" element={<News/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/rooms" element={<Meeting/>}/>
      <Route path="/office" element={<Offece/>}/>
    </Routes>
  ); 
}

