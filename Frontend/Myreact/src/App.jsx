import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axiosInstance from './api/axiosInstance';

import Login from './Components/Login';
import Footer from './Components/Footer';
import UploadImage from './Components/Upload';
import LandingPage from './Components/Landing';
import Navbar from './Components/Navbar';
import RegisterComponent from './Components/Register';
import FileChat from './Components/Filechat';
import Feature from './Components/Feature';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Ctabanner from './Components/Ctabanner';
import Popup from './Components/Popup';
import FeedbackPopup from './Components/Feedback';

function App() {

  const userId = localStorage.getItem('userId') || 'guest_user';

useEffect(() => {
  axiosInstance
    .get('/health')
    .then((response) => {
      console.log('Backend awakened:', response.data);
    })
    .catch((error) => {
      console.error('Failed to wake backend:', error);
    });
}, []);


  return (
    <Router>
      <FeedbackPopup userId={userId} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Feature />
              <Pricing />
              <Ctabanner />
              <Testimonials />

            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/filechat" element={<FileChat />} />
        <Route path="/popup" element={<Popup />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
