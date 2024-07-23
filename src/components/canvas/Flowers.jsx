import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Flowers = ( { isMobile } ) => {
  const flower = useGLTF('./daisies/daisies.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2.5}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[200, 500, 6000]} 
        angle={45}
        penumbra={1}
        intensity={1}
        castshadow
      />
      <spotLight 
        position={[-200, -500, -6000]} 
        angle={45}
        penumbra={1}
        intensity={1}
        castshadow
      />
      <primitive 
        object={flower.scene} 
        scale={isMobile ? 65 : 65}
        position={isMobile ? [0, -3.8, 0] : [0, -3.8, 0]} //?, y, x
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  )
}

const FlowersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      
      >
        <Suspense fallback={<CanvasLoader /> }>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Flowers isMobile={isMobile}/>
        </Suspense>

        <Preload all />
      </Canvas>
  )
}

export default FlowersCanvas