import React from 'react';

interface BoxProps extends React.PropsWithChildren {}

const Box: React.FC<BoxProps> = ({}) => {
  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default Box;
