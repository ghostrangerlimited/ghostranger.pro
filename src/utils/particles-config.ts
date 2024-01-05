export const particlesOptions:any = {
  fpsLimit: 60,
  interactivity: {
      modes: {
          push: {
              quantity: 3,
          },
          repulse: {
              distance: 150,
              duration: 0.3,
          },
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
      },
      move: {
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 600,
          },
          value: 40,
      },
      opacity: {
          value: 0.2,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 3 },
      },
  },
  detectRetina: true,
};