import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Cosmetic from './components/Services/Cosmetic';
import Restorative from './components/Services/Restorative';
import Preventative from './components/Services/Preventative';
import Terms from './components/Footer/Terms';
import Privacy from './components/Footer/Privacy';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cosmetic" element={<Cosmetic />} />
      <Route path="/restorative" element={<Restorative />} />
      <Route path="/preventative" element={<Preventative />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default AppRoutes;
