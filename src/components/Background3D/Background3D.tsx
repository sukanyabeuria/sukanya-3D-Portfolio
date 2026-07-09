import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function NeonObject() {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.12 + mouse.x * 0.22;
      groupRef.current.rotation.x = mouse.y * 0.16;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x = time * 0.28;
      knotRef.current.rotation.z = time * 0.18;
    }
  });

  return (
    <group ref={groupRef} position={[2.2, -0.4, -2.6]}>
      <Float speed={1.2} rotationIntensity={0.42} floatIntensity={0.65}>
        <mesh ref={knotRef}>
          <torusKnotGeometry args={[0.72, 0.16, 180, 16]} />
          <meshPhysicalMaterial color="#FF2EA6" emissive="#FF2EA6" emissiveIntensity={0.8} roughness={0.2} metalness={0.65} clearcoat={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.65, 0.01, 16, 160]} />
          <meshBasicMaterial color="#FF7AD9" transparent opacity={0.48} />
        </mesh>
        <mesh rotation={[0.7, 0.2, 0.7]}>
          <torusGeometry args={[2.08, 0.008, 16, 160]} />
          <meshBasicMaterial color="#A855F7" transparent opacity={0.34} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-75" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 48 }} dpr={[1, 1.6]} performance={{ min: 0.5 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.62} />
        <pointLight position={[4, 3, 4]} color="#B68CFF" intensity={28} distance={8} />
        <pointLight position={[-4, -2, 3]} color="#FF4FBF" intensity={18} distance={7} />
        <Stars radius={60} depth={36} count={900} factor={2.8} saturation={0} fade speed={0.42} />
        <NeonObject />
      </Canvas>
    </div>
  );
}