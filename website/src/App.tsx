import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { WhyAerisk } from './components/WhyAerisk';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <WhyAerisk />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
