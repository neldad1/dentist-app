import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Procedure from './Procedure';

function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <Procedure />
    </div>
  );
}

export default App;
