import { OrbitControls, SpotLight } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Floor from "./Floor";
import { useRef, useEffect } from "react";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  SpotLightHelper,
} from "three";
import Pared from "./Pared";
import Pared2 from "./pared2"
import { VideoTexture } from "three";

export default function Experience() {
  

  const directionalLightRef = useRef();
  
   useHelper(directionalLightRef, DirectionalLightHelper, 1)
 
  
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
 
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[2, 4, -6]}
        intensity={1}
      />
      
      <ambientLight intensity={0.5} />
      <Floor />
     <Pared/>
      <Pared2/>
      
    </>
  );
}
