import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Career from "./pages/Career";
import Login from "./pages/Login";

// Gallery Pages
import FuncGallery from "./pages/gallery/FuncGallery";
import CongGallery from "./pages/gallery/CongGallery";
import InstitGallery from "./pages/gallery/InstitGallery";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />

        {/*  Gallery Routes */}
        <Route path="/func-gallery" element={<FuncGallery />} />
        <Route path="/cong-gallery" element={<CongGallery />} />
        <Route path="/instit-gallery" element={<InstitGallery />} />
      </Routes>
  );
}

export default App;