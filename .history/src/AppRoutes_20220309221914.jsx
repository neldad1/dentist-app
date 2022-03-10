import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Contact from '../Contact';
import Cosmetic from '../Services/Cosmetic';
import Restorative from '../Services/Restorative';
import Preventative from '../Services/Preventative';

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
