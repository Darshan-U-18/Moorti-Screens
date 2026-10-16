import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { FeaturedServices } from './components/FeaturedServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Quote } from './components/Quote';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-silver-200 selection:bg-gold/30 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Trust />
        <Services />
        <FeaturedServices />
        <WhyChooseUs />
        <HowItWorks />
        <Quote />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
