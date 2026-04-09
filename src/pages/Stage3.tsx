import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stage3() {
  return (
    <PageWrapper>
      <div className="bg-warm-cream min-h-[90vh] py-16 flex flex-col items-center">
        <div className="max-w-6xl w-full px-8 flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <Link to="/stage-2" className="flex items-center gap-1 text-stone-500 hover:text-stone-900 transition-colors text-sm font-bold mb-4">
              <ChevronLeft className="w-4 h-4" /> BACK TO STAGE 2
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              Stage 3: <br/> 
              <span className="text-accent-copper">Hypoglycemic Detection</span>
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              When you go for long periods without eating, or engage in intense physical activity, your blood glucose levels begin to drop below the optimal baseline.
            </p>

            <div className="bg-white/50 border border-warm-cream-dark p-6 rounded-2xl border-l-4 border-l-accent-copper">
              <h3 className="text-stone-900 font-bold mb-2">Alpha Cell Activation</h3>
              <p className="text-stone-600 italic">
                The pancreas now switches its focus. <strong>Alpha cells</strong> detect the deficit and begin secreting <strong>Glucagon</strong>, the counterpart to insulin.
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-3xl shadow-2xl overflow-hidden border-8 border-white/60"
            >
              <img 
                src="/glucagon_flow.png" 
                alt="Pancreas releasing glucagon" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

        </div>

        <div className="mt-24">
          <Link 
            to="/stage-4" 
            className="flex items-center gap-2 px-10 py-5 bg-stone-900 text-warm-white rounded-full font-bold hover:bg-stone-800 transition-all group shadow-xl"
          >
            Stage 4: Glucose Mobilization
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
