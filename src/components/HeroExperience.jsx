import { Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { HeroBoy } from './HeroBoy'

const HeroExperience = () => {
  return (
    <Canvas>
        <ambientLight/>

        <directionalLight position={[-2,0,3]} intensity={5} color={"#ff82e7"}/>
        <directionalLight position={[2,0,3]} intensity={5} color={"#8e82ff"}/>

        <Sparkles count={150} size={2} speed={0.5} color={"pink"} scale={[15,15,2]}/>

        <group>
            <HeroBoy scale={9} position={[0,-15,0]}/>
        </group>
    </Canvas>
  )
}

export default HeroExperience