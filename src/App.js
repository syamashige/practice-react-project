import logo from './logo.svg';
import './App.css';
import Test from './test.js';
import Welcome from './sections/welcome.js';
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
        <Test/> 
        <div id="test-section-2" style={{height: "50vh", backgroundColor:"pink", border: "2px solid purple", padding: 20}}>
          <h2 style={{border: "2px solid blue", marginTop: 0}}>Test Section 2</h2>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </main>
  );
}

export default App;
