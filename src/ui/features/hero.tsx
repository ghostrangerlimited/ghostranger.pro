import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Hero = () => (
  <Background color="bg-zinc-900" fullscreen>
    <Section
      yPadding="pt-20 pb-32"
    >
      <div>Volatile Labs</div>
    </Section>
  </Background>
);

export { Hero };
