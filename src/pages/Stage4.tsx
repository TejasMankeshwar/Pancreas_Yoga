import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { Home, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stage4() {
  return (
    <PageWrapper>
      <div className="bg-warm-white min-h-[90vh] py-16 flex flex-col items-center">
        <div className="max-w-6xl w-full px-8 flex flex-col md:flex-row-reverse gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <Link to="/stage-3" className="flex items-center gap-1 text-stone-500 hover:text-stone-900 transition-colors text-sm font-bold mb-4">
              <ChevronLeft className="w-4 h-4" /> BACK TO STAGE 3
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              Stage 4: <br/> 
              <span className="text-accent-copper">Systemic Restoration</span>
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              Glucagon acts as a biological alarm, specifically targeting the liver to release the energy stores built up during Stage 2.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border-b border-warm-cream-dark">
                 <div className="w-8 h-8 rounded-full bg-accent-copper/20 flex items-center justify-center text-accent-copper font-bold flex-shrink-0">1</div>
                 <p className="text-stone-700 text-sm"><strong>Glycogenolysis:</strong> The liver breaks down stored glycogen back into glucose molecules.</p>
              </div>
              <div className="flex items-start gap-4 p-4 border-b border-warm-cream-dark">
                 <div className="w-8 h-8 rounded-full bg-accent-copper/20 flex items-center justify-center text-accent-copper font-bold flex-shrink-0">2</div>
                 <p className="text-stone-700 text-sm"><strong>Gluconeogenesis:</strong> The liver begins synthesizing new glucose from non-carbohydrate sources.</p>
              </div>
              <div className="flex items-start gap-4 p-4">
                 <div className="w-8 h-8 rounded-full bg-accent-copper/20 flex items-center justify-center text-accent-copper font-bold flex-shrink-0">3</div>
                 <p className="text-stone-700 text-sm"><strong>Release:</strong> Glucose is pumped back into the bloodstream, bringing the levels back to steady-state homeostasis.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center">
            {/* Animate a balance scale icon or abstract shape */}
            <motion.div 
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-80 h-80 rounded-full border-2 border-dashed border-accent-copper/30 flex items-center justify-center relative shadow-inner italic text-xs text-stone-400"
            >
              DYNAMIC EQUILIBRIUM
              <div className="absolute top-1/2 left-0 w-full h-px bg-accent-copper shadow-sm" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-stone-900 rounded-full" />
            </motion.div>
          </div>

        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Homeostasis Achieved</h2>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-stone-900 text-warm-white rounded-full font-bold hover:bg-stone-800 transition-all group shadow-xl"
          >
            Finish Presentation
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
