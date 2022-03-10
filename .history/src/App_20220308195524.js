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
          <Link to="/">Go to Home Page</Link>{' '}
          <Link to="/procedures">See Our Procedures</Link>{' '}
          <Link to="/contact">Contact Us!</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
