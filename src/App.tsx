import { Canvas, useThree } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import Room from '@/components/Room';

const App = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="yellow" position={[0, 0, 5]} />
        <color args={['#111']} attach="background" />
        <Center>
          <Room />
        </Center>
      </Canvas>
    </>
  );
};

export default App;
