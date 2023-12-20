import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Notfound from "./pages/notfound/Notfound";
import Footer from "./components/Footer";
import Gallery from "./pages/gallery/Gallery";
import Query from "./pages/contactForm/ContactForm";
import Admission from "./pages/admission/Admission";

const App = () => {
  useEffect(() => {
    fetch("/api/check")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="Query" element={<Query />} />
        <Route path="admission" element={<Admission />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
