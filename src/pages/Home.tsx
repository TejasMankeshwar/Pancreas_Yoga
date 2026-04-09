import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import PancreasViewer from '../components/PancreasViewer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <PancreasViewer />
      
      <section className="py-24 bg-warm-white flex justify-center">
        <div className="max-w-4xl px-8 w-full flex flex-col items-center">
          <div className="w-full h-px bg-warm-cream-dark mb-16" />
          <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center">Homeostasis & The Pancreas</h2>
          <p className="text-lg text-stone-600 text-center mb-10 max-w-2xl">
            The pancreas is the master regulator of blood glucose levels. Through a sophisticated feedback system, it ensures your body's energy levels stay within a narrow, healthy range.
          </p>
          <Link 
            to="/stage-1" 
            className="flex items-center gap-2 px-8 py-4 bg-stone-900 text-warm-white rounded-full font-bold hover:bg-stone-800 transition-all group active:scale-95"
          >
            Start the Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
