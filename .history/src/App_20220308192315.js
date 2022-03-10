import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Procedure from './Procedure';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
