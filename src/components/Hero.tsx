export default function Hero() {
  return (
    <section className="bg-warm-white py-24 sm:py-32 w-full flex justify-center border-b border-warm-cream-dark">
      <div className="max-w-4xl px-8 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <p className="text-accent-copper font-semibold tracking-wide uppercase text-sm mb-4">
            Anatomical Visualization
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 drop-shadow-sm">
            Pancreas: The Master of Homeostasis
          </h1>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            Biological homeostasis is the maintenance of a stable internal environment. The pancreas plays a critical role in this process by monitoring and adjusting blood glucose levels with pinpoint precision.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            By coordinating the release of Insulin and Glucagon, the pancreas ensures that every cell in your body has the energy it needs to thrive.
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
