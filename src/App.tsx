import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import Room from '@/components/Room';
import React from 'react';

const App = () => {
  return (
    <>
      <Canvas>
        <React.Suspense>
          <ambientLight intensity={0.1} />
          <color args={['#0D051A']} attach="background" />
          <Center>
            <Room />
          </Center>
        </React.Suspense>
      </Canvas>
    </>
  );
};

export default App;
