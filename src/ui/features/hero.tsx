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
            alt="Ghost Ranger LLC"
            height="300"
            width="300"
          />
        </div>
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">Ghost Ranger LLC</h1>
          <hr className="pb-1 rounded" />
          <div className="mt-5">
            <p className="text-lg lg:text-xl">

Welcome to Ghost Ranger LLC, your trusted partner in investigative services and privacy consultancy. Our team of skilled professionals, aptly named Ghost Rangers, specializes in discreetly navigating the shadows to unveil the truth. With a fusion of cutting-edge technology and seasoned expertise, we deliver top-notch investigative solutions tailored to your unique needs. Whether it's corporate inquiries, background checks, or privacy consultations, Ghost Ranger LLC is your assurance of confidentiality, reliability, and unwavering commitment to excellence. Your secrets are safe with us, and your peace of mind is our priority. Choose Ghost Ranger LLC for unparalleled discretion and results in the world of private investigation and privacy consulting.
            </p>
          </div>
        </div>
      </Section>
    </div>
  </Background>
);

export { Hero };
