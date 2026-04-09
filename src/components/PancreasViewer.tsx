import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Pancreas } from './Pancreas';

export default function PancreasViewer() {
  const pancreasRef = useRef<THREE.Group>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Tuned parameters for standard viewing
  // Increased by 20%: 0.05 * 1.2 = 0.06
  const pancreasScale = 0.06;
  const pancreasY = 0;
  const pancreasZ = 0;
  const initialZ = 5;

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section className="w-full bg-warm-cream py-16 flex flex-col items-center border-b border-warm-cream-dark">
      <div className="max-w-4xl px-8 w-full mb-8 text-center">
        <h2 className="text-3xl font-bold text-stone-900 mb-3">Interactive Explorer</h2>
        <p className="text-stone-600">
          Click and drag to rotate the model. Scroll to zoom in and out. Hover over labels to identify anatomical regions.
        </p>
      </div>
      
      <div 
        ref={containerRef}
        className={`w-[90%] max-w-5xl ${isFullscreen ? 'h-screen w-screen' : 'h-[70vh] min-h-[500px] rounded-3xl'} bg-warm-white shadow-xl overflow-hidden border border-warm-cream-dark relative transition-all duration-300`}
      >
        <button 
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-20 px-4 py-2 bg-stone-900/10 backdrop-blur-md text-stone-900 text-sm font-semibold rounded-full border border-stone-900/10 shadow-sm hover:bg-stone-900/20 transition-all active:scale-95"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>

        <Canvas camera={{ position: [0, 0, initialZ], fov: 45 }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 10, 10]} intensity={1.5} castShadow />

          <group>
            <Pancreas 
              ref={pancreasRef} 
              scale={[pancreasScale, pancreasScale, pancreasScale]} 
              position={[0, pancreasY, pancreasZ]} 
              labelScale={1} 
            />
          </group>

          <OrbitControls 
            enableZoom={true} 
            enablePan={true}
            // Strict distance limits requested to prevent clipping or getting lost
            minDistance={2}  
            maxDistance={12} 
            // Prevent camera from flipping entirely upside down
            maxPolarAngle={Math.PI / 1.2}
            minPolarAngle={Math.PI / 6}
          />
        </Canvas>
      </div>
    </section>
  );
}
