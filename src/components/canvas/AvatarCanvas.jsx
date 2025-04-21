import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { lazy } from "react";

const Avatar = lazy(() => import("@/components/Avatar/Avatar"));

const AvatarCanvas = ({ animationName }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.1} penumbra={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Avatar animationName={animationName} position-y={-2.5} scale={2.5} />
      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;
