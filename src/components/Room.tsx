import React from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface RoomProps extends React.PropsWithChildren {}

const Room: React.FC<RoomProps> = ({}) => {
  const { nodes } = useLoader(
    GLTFLoader,
    `${import.meta.env.BASE_URL}room.glb`
  );
  const textureMap = useTexture(`${import.meta.env.BASE_URL}baked.png`);

  return (
    <>
      <OrbitControls makeDefault enableDamping />
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
