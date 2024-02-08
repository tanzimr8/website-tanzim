import './assets/styles.scss'
import './assets/media.scss'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './common/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
