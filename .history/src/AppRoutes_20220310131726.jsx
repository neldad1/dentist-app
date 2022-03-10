import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Cosmetic from './components/Services/Cosmetic';
import Restorative from './components/Services/Restorative';
import Preventative from './components/Services/Preventative';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cosmetic" element={<Cosmetic />} />
      <Route path="/restorative" element={<Restorative />} />
      <Route path="/preventative" element={<Preventative />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
