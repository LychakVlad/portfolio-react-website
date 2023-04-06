import Home from './components/Pages/Home';
import Navbar from './components/Navbar';
import Skills from './components/Pages/Skills';
import ReactFullpage from '@fullpage/react-fullpage';
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" bg-neutral-100 dark:bg-indigo-950 duration-300">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
