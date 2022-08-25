import Image from 'next/image';
import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Hero = () => (
  <Background color="bg-neutral-900" fullscreen>
    <div className="flex items-center justifycenter min-h-[inherit]">
      <Section
        yPadding="py-32"
        className={`
          grid grid-cols-1 md:grid-cols-2 items-center 
          bg-[rgba(23,23,23,0.6)] rounded-2xl
          absolute left-0 right-0 mx-auto
        `}
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
          <h1 className="text-3xl lg:text-5xl font-bold">Volatile Labs Ltd.</h1>
          <hr className="pb-1 rounded" />
          <div className="mt-5">
            <p className="text-lg lg:text-xl">
              We are a community of software engineers working to produce the next generation of blockchain software, and supporting the VMEX decentralized protocol. We adhere to industry-grade code quality standards, and we aim to set a higher standard for open source software.
            </p>
          </div>
        </div>
      </Section>
    </div>
  </Background>
);

export { Hero };
