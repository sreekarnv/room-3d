import { Canvas } from '@react-three/fiber';
import Box from '@/components/Box';

const App = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="yellow" position={[0, 0, 5]} />
        <Box />
      </Canvas>
    </>
  );
};

export default App;
