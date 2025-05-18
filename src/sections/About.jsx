import React from "react";
import GradientSphere from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bentoSocialLinks } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(()=>{
        //slide in animations for cards
        gsap.from("#card", {
            opacity:0,
            y:50,
            stagger:0.2,
            duration:0.8,
            ease:"power3.inout",
            scrollTrigger:{
                trigger:"#about",
                start: "top top",
            }
        })

        //stagger text animations
        gsap.from(".animate-text",{
            opacity:0,
            y:20,
            stagger:0.15,
            duration:0.6,
            ease:"power3.inOut",
             scrollTrigger:{
                trigger:"#about",
                start: "top top",
            }
        })

    }, [])

  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      
      <GradientSphere
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title={"About Me"}
          text={"Passinate Creator, Lifelong Learner"}
          number={"01"}
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-row-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5 ">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Ekansh Kanot
                  </h1>
                  <p className="md:text-2xl mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio maxime ea enim eligendi autem animi asperiores, a
                    laudantium dolore veritatis id minima ipsam suscipit
                    cupiditate.
                  </p>
                </div>
              </div>
            </div>
            {/* 3D cute alien */}
            <div className="md:col-span-5 col-span-12 row-span-5 ">
              <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>

            {/* WEB DESIGN CARD*/}

            <div id="card" className="md:col-span-6 col-span-12 row-span-5 ">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animate-text">
                    Web Desgin & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96 animate-text">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX DESIGN CARD*/}

            <div id="card" className="md:col-span-6 col-span-12 row-span-5 ">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animate-text">
                    UX UI Design
                  </h1>
                  <p className="md:text-2xl max-w-96 animate-text">
                    Seamless web or mobile app design to wow your users.
                  </p>
                </div>
              </div>
            </div>

            {/* Moti card */}

            <div id="card" className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold animate-text">
                    BE YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold animate-text">
                    BE DIFFERENT!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold animate-text">
                    BUILD DIFFERENT!
                  </h1>
                </div>
              </div>
            </div>

            {/* bento social links */}

            {bentoSocialLinks.map((items, index) => (
              <div
                key={index}
                className="md:col-span-4 col-span-12 row-span-2"
              >
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex items-center md:gap-5">
                            <img src={items.icon} alt={items.icon} />
                            <h1 className="gradient-title md:text-3xl text-xl md:0 ms-5 font-medium">{items.name}</h1>
                        </div>
                        <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                            <img src="/images/arrowupright.svg" alt="arrowup" className="md:scale-100 scale-50" />
                        </div>
                    </div>
                </div> 
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
