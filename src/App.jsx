import Footer from "./components/footer";
import Router from "./router";
import AboutStudio from './pages/AboutStudio/index'
export default function App() {
  return (
    <main>
      <Router />
      <AboutStudio/>
      <Footer/>
    </main>
  );
}
