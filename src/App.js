import Home from './components/Pages/Home';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import Footer from './components/Pages/Footer';
import Header from './components/Pages/Header';

function App() {
  return (
    <div className=" bg-neutral-100 dark:bg-indigo-950 duration-300 relative">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
