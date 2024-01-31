import './App.css';
import Welcome from '../sections/welcome_section/welcome.js';
// import SplineExample from './spline.js';


function App() {
  return (
    <main className='App'>
       {/* <SplineExample/> */}
      <div style={{marginTop: "15vh"}}>
        <Welcome/>
        <div id="test-section-1" style={{height: "50vh", backgroundColor: "pink", border: "2px solid purple", padding: 20}}>
          <h2 style={{border: "2px solid blue", marginTop: 0}}>Test Section 1</h2>
        </div>
        <div id="test-section-2" style={{height: "50vh", backgroundColor:"pink", border: "2px solid purple", padding: 20}}>
          <h2 style={{border: "2px solid blue", marginTop: 0}}>Test Section 2</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
