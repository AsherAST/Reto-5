import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

const Pared2 = () => {
  const [imageSrc, setImageSrc] = useState('static/img1.png');

  const texture = useTexture(imageSrc);

  const Phone = () => {
    
    setImageSrc(`static/img2.png`)
  };
  const Ring = () => {
    
    setImageSrc(`static/img1.png`)
  };

  return (
    <>
      <mesh
    position-y={ 2.5 } position-z={ 4} rotation-x={ - Math.PI * 1  } rotation-z={ - Math.PI * 1  }scale={8}
        onPointerEnter={Phone} onPointerLeave={Ring}
      >
        <planeGeometry />
        <meshStandardMaterial map={texture} side={DoubleSide}/>
      </mesh>
    </>
  );
};

export default Pared2;