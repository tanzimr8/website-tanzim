import './assets/styles.scss';
import './assets/media.scss';
import Social from './common/Social';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      {/* <Social/> */}
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
