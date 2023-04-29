import Home from './components/Blocks/Home';
import Skills from './components/Blocks/Skills';
import Projects from './components/Blocks/Projects';
import Contact from './components/Blocks/Contact';
import Footer from './components/Blocks/Footer';
import Header from './components/Blocks/Header';

function App() {
  return (
    <div className="bg-neutral-100 dark:bg-indigo-950 duration-300 relative">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
