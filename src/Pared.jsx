import React, {  useState } from "react";
import {  useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";


const Pared = () => {
  

  const videoSrc = "/static/video.mp4";

  const [play, setPlay] = useState(false);

  const videoProps = { start: play, muted: play };
  const videoTexture = useVideoTexture(videoSrc, videoProps);

  return (
    <>
      

      <React.Suspense fallback={<meshBasicMaterial wireframe />}>
        <mesh
          position-y={ 2.5 } 
          position-x={ -4}
          rotation-y={  Math.PI * 0.5 }
          scale={8}
          onClick={() => {
            setPlay(!play);
        
          }}
          
        >
          <planeGeometry />
          <meshStandardMaterial
            map={videoTexture}
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
      </React.Suspense>
    </>
  );
};

export default Pared;

