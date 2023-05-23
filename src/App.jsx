import './App.css';

// Home component
import Home from './components/Home/Home';

// Intro component
import Intro from './components/Intro/Intro';

// Projects component
import Projects from './components/Projects/Projects';

// Conclusion component
import Conclusion from './components/Conclusion/Conclusion';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <Intro />
        <Projects />
        <Conclusion />
      </div>
    </div>
  );
}

export default App;
