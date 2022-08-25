import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Footer = () => (
  <div className="absolute w-full">
    <Background color="bg-zinc-800">
      <Section yPadding="py-8">
        <div className="text-center text-lg">Volatile Labs, LTD &copy; 2022</div>
      </Section>
    </Background>
  </div>
);

export { Footer };
