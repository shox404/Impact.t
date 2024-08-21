import Footer from "./components/footer";
import Router from "./router";
import AOS from 'aos'
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,

    });
  }, []);
  return (
    <main>
      <Router />
      <Footer/>
    </main>
  );
}
