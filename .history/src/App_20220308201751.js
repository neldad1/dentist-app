import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Procedures from './Procedures';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          {'  '}
          <Link to="/procedures">Our Procedures</Link>
          {'  '}
          <Link to="/contact">Contact Us</Link>
        </nav>
        <Routes className="App">
          <Route exact path="/" element={<Home />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
