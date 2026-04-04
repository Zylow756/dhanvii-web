import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Training from "./pages/Courses";
import Career from "./pages/Career";
import Admin from "./pages/admin/Admin";
import Services from "./pages/Services";
import Placement from "./pages/Placement";


// Gallery Pages
import FuncGallery from "./pages/gallery/FuncGallery";
import InstitGallery from "./pages/gallery/InstitGallery";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Training />} />
        <Route path="/career" element={<Career />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/placement" element={<Placement />} />

        {/*  Gallery Routes */}
        <Route path="/func-gallery" element={<FuncGallery />} />
        <Route path="/instit-gallery" element={<InstitGallery />} />
      </Routes>
  );
}

export default App;