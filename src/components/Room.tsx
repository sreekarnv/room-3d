import React from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface RoomProps extends React.PropsWithChildren {}

const Room: React.FC<RoomProps> = ({}) => {
  const { nodes } = useLoader(GLTFLoader, '/room.glb');
  const textureMap = useTexture('/baked.png');

  return (
    <>
      <OrbitControls makeDefault enableDamping enableZoom={false} />
      <mesh
        rotation-y={-Math.PI * 0.25}
        rotation-x={Math.PI * 0.05}
        geometry={(nodes.final as any).geometry}
      >
        <meshBasicMaterial map={textureMap} map-flipY={false} />
      </mesh>
    </>
  );
};

export default Room;