import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const fogContainerRef = useRef(null);

  useEffect(() => {
    const fogs = fogContainerRef.current.querySelectorAll(".fog-layer");

    const animations = [];

    fogs.forEach((fog, index) => {
      const animation = gsap.to(fog, {
        x: index === 0 ? "6%" : "-6%",
        y: index === 0 ? "-10%" : "-7%",
        scale: index === 0 ? 1.08 : 1.1,
        duration: index === 0 ? 5 : 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.8,
      });

      animations.push(animation);
    });

    return () => animations.forEach((a) => a.kill());
  }, []);

  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        h-[calc(45vw+120px)] aspect-[3/2]
        min-h-[560px] sm:min-h-[600px] lg:min-h-[680px]
      "
    >
      {/* Background */}
      <img
        src="/hero-house.png"
        alt="Modern luxury house"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/5" />

      {/* Hero Card */}
      <div
        className="
          absolute z-10
          left-4 top-[54%]
          w-[calc(100%-2rem)] max-w-[520px]
          rounded-2xl bg-[#9fc9ec]/80
          p-4 backdrop-blur-sm shadow-lg

          sm:left-[6%] sm:top-[55%] sm:w-[360px] sm:p-5
          md:left-[7%] md:w-[390px] md:p-6
          lg:left-[6%] lg:top-[19%] lg:w-[500px] lg:p-7
        "
      >
        <h1
          className="
            text-[24px] sm:text-[30px]
            md:text-[34px] lg:text-[42px]
            font-bold leading-[1.1] tracking-tight text-[#061632]
          "
        >
          Find a Place You’ll
          <br />
          Love to Call Home
        </h1>

        <p
          className="
            mt-3 max-w-[390px]
            text-[10px] md:text-[11px] lg:text-[12px]
            leading-relaxed text-[#26374d]
            font-p
          "
        >
          Discover properties that match your lifestyle, budget, and future
          goals. From modern apartments to luxury villas, your perfect property
          is just a few clicks away.
        </p>

        <div className="mt-5 flex gap-3 flex-wrap">
          <button
            className="
              rounded-md bg-[#061632]
              px-4 py-2 text-[10px]
              font-medium text-white
              transition hover:scale-105 hover:bg-black
            "
          >
            Explore Homes
          </button>

          <button
            className="
              rounded-md border border-[#061632]
              bg-white/70 px-4 py-2 text-[10px]
              font-medium text-[#061632]
              transition hover:scale-105 hover:bg-white
            "
          >
            Book a Visit
          </button>
        </div>
      </div>

      {/* ========= FIXED FOG ========= */}
      <div
        ref={fogContainerRef}
        className="
          pointer-events-none
          absolute left-0 -bottom-2
          z-20 w-full
          h-[40%] overflow-hidden
        "
      >
        {/* Main Fog */}
        <img
          src="/fog.png"
          alt=""
          className="
            fog-layer absolute
            -top-[12%] left-[-15%]
            w-[130%] max-w-none
            object-cover object-bottom
            opacity-95

            [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_88%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_88%,transparent_100%)]
          "
        />

        {/* Second Fog */}
        <img
          src="/fog.png"
          alt=""
          className="
            fog-layer absolute
            top-[2%] left-[5%]
            w-[125%] max-w-none
            object-cover object-bottom
            opacity-55 scale-105

            [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_90%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_90%,transparent_100%)]
          "
        />

        {/* Bottom fade only */}
        <div
          className="
            absolute bottom-0 left-0
            w-full h-[42%]
            bg-gradient-to-t
            from-white via-white/70 to-transparent
          "
        />
      </div>

      {/* Soft bottom fade */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0
          z-30 h-[8%] w-full
          bg-gradient-to-t
          from-white via-white/40 to-transparent
        "
      />
    </section>
  );
}

export default Hero;