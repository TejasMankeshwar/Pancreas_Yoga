import Hero from './components/Hero';
import PancreasViewer from './components/PancreasViewer';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-warm-cream font-sans flex flex-col">
      <Hero />
      <PancreasViewer />
      <Footer />
    </main>
  );
}

export default App;
