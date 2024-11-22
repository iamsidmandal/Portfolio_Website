import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom.jsx"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader.jsx"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants/index.js"
import Target from "../components/Target.jsx"
import ReactLogo from "../components/ReactLogo.jsx"
import Cube from "../components/Cube.jsx"
import Rings from "../components/Rings.jsx"
import HeroCamera from "../components/HeroCamera.jsx"
import Button from "../components/Button.jsx"

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col c-space gap-2 sm:5 mt-10">
                <p className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Siddhartha <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient sm:text-5xl text-4xl">
                    Building Product & Brands
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                        {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>


                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        <HeroCamera isMobile={isMobile}>
                        <HackerRoom
                            position={sizes.deskPosition}
                            scale={sizes.deskScale}
                            // rotation={[-6, -3.2, 0]} 
                            rotation={[0, -Math.PI, 0]} 
                            />
                            </HeroCamera>

                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>


                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-full">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit sm:min-w-96" />
        </a>
            </div>

        </section>
    )
}

export default Hero


