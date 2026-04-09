export default function Hero() {
  return (
    <section className="bg-warm-white py-24 sm:py-32 w-full flex justify-center border-b border-warm-cream-dark">
      <div className="max-w-4xl px-8 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <p className="text-accent-copper font-semibold tracking-wide uppercase text-sm mb-4">
            Anatomical Visualization
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 drop-shadow-sm">
            The Human Pancreas
          </h1>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            Nestled deep within the abdomen, the pancreas is a dual-function powerhouse. 
            It acts as both an endocrine gland—secreting essential hormones like insulin and glucagon directly into the bloodstream—and an exocrine gland, producing digestive enzymes vital for breaking down nutrients.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Understanding its architecture is key to studying metabolic regulation and gastrointestinal health. 
            Scroll down to explore a fully interactive, labeled 3D model of this extraordinary organ.
          </p>
        </div>
        
        {/* Optional decorative image or abstract graphic here if desired */}
        <div className="hidden md:flex flex-1 justify-center items-center opacity-60">
           <div className="w-64 h-64 border-[0.5px] border-accent-copper rounded-full flex items-center justify-center p-4">
              <div className="w-full h-full border-[0.5px] border-stone-300 rounded-full flex items-center justify-center p-4">
                 <div className="w-full h-full border-[0.5px] border-accent-copper border-dashed rounded-full" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
