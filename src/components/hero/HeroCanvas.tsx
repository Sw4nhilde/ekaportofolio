'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Float, Torus } from '@react-three/drei';
import * as THREE from 'three';

function DriverHologram() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  // Load the transparent professional cutout photo
  const texture = useTexture('/foto/profesional igess no bg.png');
  texture.colorSpace = THREE.SRGBColorSpace;

  // Shader that renders the body 100% SOLID (no see-through), discards background, and fades only the bottom cut
  const portraitMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        varying vec2 vUv;

        void main() {
          vec4 color = texture2D(uTexture, vUv);

          // 1. Outside the body: instantly discard so background halo shines through without obstruction
          if (color.a < 0.15) discard;

          // 2. Inside the body: force to 100% solid opaque so background NEVER bleeds through your body
          color.a = 1.0;

          // 3. Feather ONLY the bottom waistline cut (bottom 20%) to eliminate the straight horizontal edge
          if (vUv.y < 0.20) {
            color.a = smoothstep(0.0, 0.20, vUv.y);
          }

          // Discard boundary threshold
          if (color.a < 0.02) discard;

          gl_FragColor = color;
        }
      `,
      transparent: true,
      depthWrite: true,
      depthTest: true,
      side: THREE.FrontSide,
    });
  }, [texture]);

  // Telemetry rotation for background halo
  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.35}>
      <group position={[0, -0.2, 0]}>
        {/* Background Holographic Halo (Positioned safely behind at z = -0.55) */}
        <group ref={ringRef} position={[0, 0.45, -0.55]} renderOrder={1}>
          <Torus args={[1.2, 0.015, 16, 64]}>
            <meshBasicMaterial
              color="#f2e529"
              transparent
              opacity={0.65}
              depthWrite={false}
            />
          </Torus>
          <Torus args={[1.35, 0.008, 16, 64]} rotation={[0, 0, Math.PI / 4]}>
            <meshBasicMaterial
              color="#e10600"
              transparent
              opacity={0.5}
              depthWrite={false}
            />
          </Torus>
          {/* Subtle glowing center disc */}
          <mesh position={[0, 0, -0.05]}>
            <circleGeometry args={[1.18, 32]} />
            <meshBasicMaterial
              color="#f2e529"
              transparent
              opacity={0.04}
              depthWrite={false}
            />
          </mesh>
        </group>

        {/* 3D Solid Driver Portrait (Rendered in front, 100% opaque body, depthWrite: true) */}
        <mesh
          ref={meshRef}
          position={[0, 0, 0]}
          material={portraitMaterial}
          renderOrder={2}
        >
          <planeGeometry args={[2.6, 3.9]} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full min-h-[440px] md:min-h-[640px] relative select-none">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#8899aa] font-mono text-xs tracking-widest space-y-2">
            <span className="w-2 h-2 bg-[#f2e529] rounded-full animate-ping" />
            <span>INITIALIZING DRIVER TELEMETRY...</span>
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }}>
          {/* Ambient Lighting */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 4, 3]} intensity={1.8} color="#ffffff" />

          {/* F1 Neon Accent Point Lights */}
          <pointLight position={[3, 3, 2]} intensity={2.5} color="#f2e529" />
          <pointLight position={[-3, -1, 2]} intensity={2.0} color="#e10600" />

          {/* 3D Holographic Driver */}
          <DriverHologram />

          {/* Orbit Controls with constrained rotation */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.08}
            minPolarAngle={Math.PI / 2 - 0.15}
            maxAzimuthAngle={Math.PI / 5}
            minAzimuthAngle={-Math.PI / 5}
            rotateSpeed={0.8}
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
