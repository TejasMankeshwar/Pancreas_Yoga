export default function Footer() {
  return (
    <footer className="bg-stone-900 text-warm-cream py-12 w-full flex justify-center">
      <div className="max-w-4xl px-8 w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-white mb-2">Pancreas Anatomy</h3>
          <p className="text-sm text-stone-400 max-w-xs">
            Interactive medical visualization for educational and exploratory purposes.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-stone-300">
          <a href="#" className="hover:text-accent-copper transition-colors">About</a>
          <a href="#" className="hover:text-accent-copper transition-colors">Sources</a>
          <a href="#" className="hover:text-accent-copper transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent-copper transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
