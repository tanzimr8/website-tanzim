import './assets/styles.scss';
import './assets/media.scss';
import Social from './common/Social';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './common/Footer';
import RecentActivity from './components/RecentActivity';
import ChangeTheme from './components/utils/ChangeTheme';
import useLocalStorage from './components/CustomHooks/useLocalStorage';
import ScrollIndicator from './components/utils/Scroll-indicator';


function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.style.setProperty("--primary-color", "red");

  }

  return (
    <div className="App" data-theme={theme}>
      {/* <ChangeTheme /> */}
      <ScrollIndicator />
      <Navbar theme={theme} setTheme={setTheme} handleChangeTheme={handleChangeTheme} />
      <Social/>
      <Slider />
      <div className='container'>
        <About />
        <Experience />
        <Projects />
        {/* <RecentActivity /> */}
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
