//app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Home from './components/Home';
import Destinations from './components/Destinations';
import TravelGuides from './components/TravelGuides';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import DestinationDetail from './components/DestinationDetail'; // Import the new component
import NotFound from './components/NotFound';
import './styles/styles.css';

// Main App component
const App = () => {
  const location = useLocation();
  const showCarousel = location.pathname === '/';

  return (
    <>
      <Header />
      <Navbar />
      {showCarousel && <Carousel />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/guides" element={<TravelGuides />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/destination-detail/:type" element={<DestinationDetail />} /> {/* Updated Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

// AppWrapper component to handle routing
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
