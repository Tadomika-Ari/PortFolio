import ScrambledText from './ScrambledText';
import PixelBlast from './PixelBlast';
import { useRef } from 'react';

export function Welcome() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <section className="relative h-screen overflow-hidden z-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#B19EEF"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 scale-150">
          <ScrambledText
            className="text-center mx-auto"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            Welcome, to my portfolio
          </ScrambledText>
        </div>

        <div className="absolute right-0 top-6 left-1/2 -translate-x-1/2 z-20">
          <button
            type="button"
            onClick={handleScroll}
            className="rounded-3xl bg-black/25 backdrop-blur-md border border-white/15 px-8 py-4 text-white shadow-2xl cursor-pointer"
          >
            Project
          </button>
        </div>
        <div className="absolute left-0 top-6 left-1/2 -translate-x-1/2 z-20">
          <button
            type="button"
            className="rounded-3xl bg-black/25 backdrop-blur-md border border-white/15 px-8 py-4 text-white shadow-2xl cursor-pointer"
          >
            Moi
          </button>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 pb-24">
        <div
          ref={sectionRef}
          className="rounded-3xl bg-black/25 backdrop-blur-md border border-white/15 px-8 py-6 text-white shadow-2xl"
        >
          Section project
        </div>
      </section>
    </div>
  );
}