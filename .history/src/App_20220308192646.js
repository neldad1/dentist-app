import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Procedures from './Procedures';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
