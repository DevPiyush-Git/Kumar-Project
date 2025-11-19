import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Carousel from './components/Carousel';
import Measurement from './components/Measurement';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import PageLoader from './components/PageLoader';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets and components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero onBookingClick={() => setIsBookingModalOpen(true)} />
        <About />
        <Expertise onBookingClick={() => setIsBookingModalOpen(true)} />
        <Carousel />
        <Measurement onBookingClick={() => setIsBookingModalOpen(true)} />
        <Testimonials />
        <Footer />
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}

export default App;
