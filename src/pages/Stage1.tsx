import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stage1() {
  return (
    <PageWrapper>
      <div className="bg-warm-cream min-h-[90vh] py-16 flex flex-col items-center">
        <div className="max-w-6xl w-full px-8 flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <Link to="/" className="flex items-center gap-1 text-stone-500 hover:text-stone-900 transition-colors text-sm font-bold mb-4">
              <ChevronLeft className="w-4 h-4" /> BACK TO OVERVIEW
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              Stage 1: <br/> 
              <span className="text-accent-copper">Rising Glucose Levels</span>
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              After a meal, your blood glucose levels begin to rise as carbohydrates are broken down into simple sugars. This elevation is the primary trigger for the first stage of homeostasis.
            </p>

            <div className="bg-white/50 border border-warm-cream-dark p-6 rounded-2xl">
              <h3 className="text-stone-900 font-bold mb-2">Detection by Beta Cells</h3>
              <p className="text-stone-600">
                Specialized clusters of cells in the pancreas, known as <strong>Beta cells</strong> (located in the Islets of Langerhans), sense the rising glucose concentrations. In response, they immediately begin secreting <strong>Insulin</strong> into the bloodstream.
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-3xl shadow-2xl overflow-hidden border-8 border-white/40"
            >
              <img 
                src="/insulin_flow.png" 
                alt="Pancreas releasing insulin" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-copper/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>

        <div className="mt-24">
          <Link 
            to="/stage-2" 
            className="flex items-center gap-2 px-10 py-5 bg-stone-900 text-warm-white rounded-full font-bold hover:bg-stone-800 transition-all group shadow-xl"
          >
            Stage 2: Storage & Uptake
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
