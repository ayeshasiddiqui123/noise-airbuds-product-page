import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, PresentationControls } from '@react-three/drei';

function EarbudsModel({ currentColor }) {
  const caseRef = useRef();
  const leftBudRef = useRef();
  const rightBudRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (caseRef.current) {
      caseRef.current.position.y = Math.sin(t * 0.8) * 0.08;
    }
    if (leftBudRef.current) {
      leftBudRef.current.position.y = 0.8 + Math.sin(t * 1.2) * 0.12;
      leftBudRef.current.rotation.z = Math.sin(t * 0.5) * 0.1;
    }
    if (rightBudRef.current) {
      rightBudRef.current.position.y = 0.8 + Math.cos(t * 1.2) * 0.12;
      rightBudRef.current.rotation.z = -Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group position={[0, -0.3, 0]} scale={1.1}>
      {/* Charging Case Body */}
      <mesh ref={caseRef} position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.4, 1.1]} />
        <meshPhysicalMaterial 
          color={currentColor} 
          roughness={0.2} 
          metalness={0.1}
          clearcoat={0.8}
        />
      </mesh>

      {/* Floating Left Earbud */}
      <group ref={leftBudRef} position={[-0.6, 0.8, 0.2]} rotation={[0.2, 0.4, -0.2]}>
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial color={currentColor} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.08, 0.06, 0.6, 16]} />
          <meshStandardMaterial color={currentColor} roughness={0.3} />
        </mesh>
      </group>

      {/* Floating Right Earbud */}
      <group ref={rightBudRef} position={[0.6, 0.8, 0.2]} rotation={[0.2, -0.4, 0.2]}>
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial color={currentColor} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.08, 0.06, 0.6, 16]} />
          <meshStandardMaterial color={currentColor} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

export default function Earbuds3D({ currentColor }) {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} />
        <directionalLight position={[-5, -2, -2]} intensity={0.5} color="#ffffff" />
        <PresentationControls global polar={[-0.2, 0.2]} azimuth={[-0.4, 0.4]} config={{ mass: 2, tension: 400 }}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <EarbudsModel currentColor={currentColor} />
          </Float>
        </PresentationControls>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={6} blur={2} far={4} />
      </Canvas>
    </div>
  );
}