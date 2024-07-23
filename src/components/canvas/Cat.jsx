import { Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader';

const Cat = () => {
  const cat = useGLTF('./cat/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={6} />
      <spotLight 
        position={[0, 50, 50]} 
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        //shadowMapSize={1024}
      />
    <primitive
      object={cat.scene}
      scale={0.13}
      position={[0, -1.3, 0]}
      rotationY={0}
    />
    </mesh>
  )
}

const CatCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    > 
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI / 2}
        />
        <Cat />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default CatCanvas