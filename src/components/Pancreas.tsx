import React, { forwardRef } from 'react';
import { useGLTF, Html, Line } from '@react-three/drei';
import * as THREE from 'three';

/**
 * LABEL CONFIGURATION
 * To update positions:
 * - 'target': The point on the pancreas surface the line points to.
 * - 'label': The point in space where the text box is rendered.
 */
const LABELS = [
  {
    id: 'head',
    name: 'Head of Pancreas',
    target: [-3.6, -1.4, 1] as [number, number, number],
    label: [5.3, 1.0, -4.2] as [number, number, number]
  },
  {
    id: 'body',
    name: 'Body of Pancreas',
    target: [-4.2, 0.2, 0.0] as [number, number, number],
    label: [-3.2, 5.2, 0.5] as [number, number, number]
  },
  {
    id: 'tail',
    name: 'Tail of Pancreas',
    target: [-9.7, 0.8, -0.4] as [number, number, number],
    label: [-8.5, -5.8, 0] as [number, number, number]
  },
  {
    id: 'duct',
    name: 'Pancreatic Duct',
    target: [3, 1, 0] as [number, number, number],
    label: [8, 4.8, 5] as [number, number, number]
  },
];

const AnnotatedLabel = ({ name, target, label, scale }: any) => {
  return (
    <group>
      {/* Edge Line from Target to Label */}
      <Line
        points={[target, label]}
        color="#c27a5d" // accent-copper
        lineWidth={1.5}
        transparent
        opacity={0.7}
      />

      {/* Small indicator dot at the target point */}
      <mesh position={target}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshBasicMaterial color="#c27a5d" />
      </mesh>

      {/* HTML Label box - Removed distanceFactor to keep size fixed regardless of zoom */}
      <Html
        position={label}
        center
      >
        <div
          className="whitespace-nowrap px-3 py-1.5 bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-bold rounded-lg shadow-md border border-stone-200/50 hover:bg-white transition-colors cursor-default select-none shadow-stone-200/40"
        >
          {name}
        </div>
      </Html>
    </group>
  );
};

export const Pancreas = forwardRef<THREE.Group, { labelScale?: number } & any>((props, ref) => {
  const { nodes, materials } = useGLTF('/pancreas.glb') as any;
  const { labelScale = 1, ...groupProps } = props;

  React.useEffect(() => {
    Object.values(materials).forEach((material: any) => {
      if (material) {
        material.transparent = false;
        material.opacity = 1;
      }
    });
  }, [materials]);

  return (
    <group ref={ref} {...groupProps} dispose={null}>
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        if (node.isMesh) {
          return (
            <mesh
              key={node.uuid}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={node.material}
            />
          );
        }
        return null;
      })}

      {/* Annotated Labels with lines */}
      {LABELS.map((config) => (
        <AnnotatedLabel
          key={config.id}
          name={config.name}
          target={config.target}
          label={config.label}
          scale={labelScale}
        />
      ))}
    </group>
  );
});

useGLTF.preload('/pancreas.glb');
