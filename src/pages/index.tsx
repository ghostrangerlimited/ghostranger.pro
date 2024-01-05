import { Base } from '../ui/base';
import { Hero } from '../ui/features/hero';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { particlesOptions } from '../utils/particles-config';

const Index = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  return (
    <Base>
      <Particles
        init={particlesInit}
        options={particlesOptions}
      />
      <Hero />
    </Base>
  )
};

export default Index;
