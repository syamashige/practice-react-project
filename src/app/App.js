import './App.css';
import Welcome from '../sections/1_welcome_section/welcome.js';
import About from '../sections/2_about_me_section/about.js';
import Background from '../sections/3_background_section/background.js';
import Projects from '../sections/4_projects_section/projects.js';
import Contact from '../sections/5_contact_section/contact.js';


function App() {
  return (
    <main className='App'>
      <div>
        <Welcome/>
        <About/>
        <Background/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  );
}

export default App;