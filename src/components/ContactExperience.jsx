import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./ContactBoy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ContactExperience = () => {
  const ContactBoyRef = useRef();

 useEffect(() => {
  
  const trigger = ScrollTrigger.create({
    trigger: "#contact",
    start: "top center",
    once: false,
    onEnter: () => {
      ContactBoyRef.current?.playSwing();
    },
  });
  
  return () => {
    trigger.kill();
  };
});

  return (
    <Canvas camera={{ position: [-8, -2, 18], fov: 50 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1C34FF"} />
      <group rotation={[0, -0.5, 0]}>
        <ContactBoy ref={ContactBoyRef} scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
