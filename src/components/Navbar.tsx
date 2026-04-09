import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { path: '/', label: 'Overview' },
  { path: '/stage-1', label: 'Stage 1' },
  { path: '/stage-2', label: 'Stage 2' },
  { path: '/stage-3', label: 'Stage 3' },
  { path: '/stage-4', label: 'Stage 4' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-warm-white/80 backdrop-blur-md border-b border-warm-cream-dark py-4 px-8 overflow-x-auto no-scrollbar">
      <div className="max-w-6xl mx-auto flex items-center justify-between min-w-[500px]">
        <Link to="/" className="text-stone-900 font-bold tracking-tight text-lg">
          PANCREAS<span className="text-accent-copper">VIEW</span>
        </Link>
        <div className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-accent-copper' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-copper"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
