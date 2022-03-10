import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Services from '../Services';
import Contact from '../Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/procedures" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
