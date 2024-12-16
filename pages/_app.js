// pages/_app.js
import { AppProps } from 'next/app';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function MyApp({ Component, pageProps }: AppProps) {
  const particlesInit = async (main) => {
    // this loads the tsparticles package core bundle
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
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
        opacity: 0.5,
        width: 1,
      },
      move: {
        directions: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      <Particles className="particles fixed inset-0 z-[-1]" init={particlesInit} options={particlesOptions} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
