import Image from 'next/image';
import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Hero = () => (
  <Background color="bg-neutral-900" fullscreen>
    <Section
      yPadding="pt-20 pb-32"
      className="min-h-[inherit] grid grid-cols-1 md:grid-cols-2 items-center"
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
        <h1 className="text-3xl lg:text-5xl font-bold">Volatile Labs</h1>
        <hr className="pb-1 rounded" />
        <div className="mt-5">
          <p className="text-lg lg:text-xl">
            We are a community of software engineers working to produce the next generation of blockchain software, and supporting the VMEX Finance decentralized protocol. We adhere to industry-grade code quality standards, and we aim to set a higher standard for open source software.
          </p>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
