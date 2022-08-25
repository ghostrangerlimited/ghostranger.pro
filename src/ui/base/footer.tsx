import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Footer = () => (
  <div className="absolute w-full">
    <Background color="bg-zinc-800">
      <Section yPadding="py-8">
        <div className="flex justify-between mb-10">
          <div className="flex flex-col gap-3 text-lg">
            <span className="text-2xl font-semibold">Contact</span>
            <span>volatilelabsltd@gmail.com</span>
            <div className="flex flex-col">
              <span>1309 Coffeen Ave</span>
              <span>Sheridan, WY 82801</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-right text-lg">
            <span className="text-2xl font-semibold">Connect</span>
            <span className="underline cursor-pointer">LinkedIn</span>
            <span className="underline cursor-pointer">Facebook</span>
          </div>
        </div>
        <div className="text-center text-lg">Volatile Labs, LTD &copy; 2022. All rights reserved.</div>
      </Section>
    </Background>
  </div>
);

export { Footer };
