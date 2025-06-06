import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import CanvasLoader from "@/components/Loader/Loader";
import { useState, useEffect } from "react";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/3dModels/pcModel/pcModel.gltf");
  return (
    <group>
      <group
        position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      >
        <mesh receiveShadow castShadow>
          <primitive object={scene} scale={isMobile ? 0.7 : 0.75} />
        </mesh>
      </group>
      <hemisphereLight intensity={0.05} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
