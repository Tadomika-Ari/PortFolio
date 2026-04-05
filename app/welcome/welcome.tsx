import ScrambledText from './ScrambledText';
import PixelBlast from './PixelBlast';

export function Welcome() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
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

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none scale-150">
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
    </div>
  );
}