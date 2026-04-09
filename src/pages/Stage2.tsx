import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stage2() {
  return (
    <PageWrapper>
      <div className="bg-warm-white min-h-[90vh] py-16 flex flex-col items-center">
        <div className="max-w-6xl w-full px-8 flex flex-col md:flex-row-reverse gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <Link to="/stage-1" className="flex items-center gap-1 text-stone-500 hover:text-stone-900 transition-colors text-sm font-bold mb-4">
              <ChevronLeft className="w-4 h-4" /> BACK TO STAGE 1
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              Stage 2: <br/> 
              <span className="text-accent-copper">Glucose Sequestration</span>
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              Once insulin enters the bloodstream, it travels to various tissues, primarily the liver, muscle cells, and adipose (fat) tissue. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-warm-cream p-5 rounded-2xl border border-warm-cream-dark">
                 <h4 className="font-bold text-stone-900 mb-2">Cellular Uptake</h4>
                 <p className="text-xs text-stone-600">Insulin binds to surface receptors, signaling cells to open glucose transporters and absorb sugar from the blood.</p>
              </div>
              <div className="bg-warm-cream p-5 rounded-2xl border border-warm-cream-dark">
                 <h4 className="font-bold text-stone-900 mb-2">Glycogenesis</h4>
                 <p className="text-xs text-stone-600">In the liver, insulin promotes the conversion of excess glucose into glycogen for long-term storage.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-3xl shadow-2xl overflow-hidden border-8 border-warm-cream-dark"
            >
              <img 
                src="/homeostasis_overview.png" 
                alt="Glucose feedback loop illustration" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

        </div>

        <div className="mt-24">
          <Link 
            to="/stage-3" 
            className="flex items-center gap-2 px-10 py-5 bg-stone-900 text-warm-white rounded-full font-bold hover:bg-stone-800 transition-all group shadow-xl"
          >
            Stage 3: Energy Deficit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
