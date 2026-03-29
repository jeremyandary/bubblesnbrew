import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeBring from './components/WhatWeBring';
import Services from './components/Services';
import BarOptions from './components/BarOptions';
import About from './components/About';
import Packages from './components/Packages';
import Contact from './components/Contact';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeBring />
      <Services />
      <BarOptions />
      <About />
      <Packages />
      <Contact />
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default App;
