import bgNoise from '@/app/images/bg-noise.jpg';

export default function BgNoise() {
  return (
    <div
      aria-hidden="true"
      style={{ backgroundImage: `url(${bgNoise.src})` }}
      className="bg-size-[300px_auto] absolute inset-0 h-full w-full bg-repeat"
    ></div>
  );
}
