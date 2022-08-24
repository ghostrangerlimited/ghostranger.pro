import Image from 'next/image';
import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Hero = () => (
  <Background color="bg-zinc-900" fullscreen>
    <Section
      yPadding="pt-20 pb-32"
      className="min-h-inherit grid grid-cols-1 md:grid-cols-2 items-center"
    >
      <div className="flex items-center justify-center">
        <Image 
          src="/assets/images/logo-bw.png"
          alt="Volatile Labs Logo"
          height="300"
          width="300"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Volatile Labs</h1>
        <hr className="pb-1 rounded" />
        <div className="mt-3">
          <p className="text-xl">
            Some copy here...
          </p>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
