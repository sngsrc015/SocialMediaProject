import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import ScrollToTop from './components/ScrollToTop';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Services from './components/Services';

export default function App() {
  return <>

<ScrollToTop />
<Navbar />
<Hero/>
<Services/>
<Recommend/>
<Testimonials/>
<Footer/>



</>
}
