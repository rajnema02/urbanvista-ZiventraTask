import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Hero() {
  const fogContainerRef = useRef(null)

  useEffect(() => {
    const fogs = fogContainerRef.current.querySelectorAll('.fog-cloud')

    const animations = []

    fogs.forEach((fog, index) => {
      const animation = gsap.fromTo(
        fog,
        {
          y: '8%',
          x: index % 2 === 0 ? '-3%' : '3%',
          scale: 1,
          opacity: 0.65,
        },
        {
          y: '-28%',
          x: index % 2 === 0 ? '5%' : '-5%',
          scale: 1.08,
          opacity: 0.9,
          duration: 7 + index * 1.5,
          ease: 'none',
          repeat: -1,
          delay: index * 1.5,
        }
      )

      animations.push(animation)
    })

    return () => {
      animations.forEach((animation) => animation.kill())
    }
  }, [])

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        aspect-[3/2]
        min-h-[560px]
        sm:min-h-[620px]
        lg:min-h-[700px]
      "
    >
      {/* ========================= */}
      {/* HERO IMAGE */}
      {/* ========================= */}

      <img
        src="/hero-house.png"
        alt="Modern luxury house"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Subtle Image Overlay */}
      <div className="absolute inset-0 bg-black/[0.03]" />

      {/* ========================= */}
      {/* HERO CONTENT */}
      {/* ========================= */}

      <div
        className="
          absolute
          left-4
          right-4
          top-[54%]
          z-10
          max-w-[420px]
          rounded-[16px]
          bg-[#9fc9ec]/90
          p-5
          shadow-lg
          backdrop-blur-[4px]
          border
          border-white/20

          sm:left-[6%]
          sm:right-auto
          sm:top-[52%]
          sm:w-[380px]
          sm:max-w-none
          sm:p-6
          sm:rounded-[18px]

          md:left-[7%]
          md:w-[410px]
          md:p-7
          md:rounded-[20px]

          lg:left-[6%]
          lg:top-[28%]
          lg:w-[520px]
          lg:p-8
          lg:rounded-[24px]
          lg:shadow-2xl
        "
      >
        {/* Heading */}
        <h1
          className="
            text-[24px]
            font-bold
            leading-[1.15]
            tracking-[-0.6px]
            text-[#061632]

            sm:text-[32px]
            sm:leading-[1.12]

            md:text-[36px]

            lg:text-[44px]
            lg:leading-[1.1]
          "
        >
          Find a Place You'll
          <br />
          Love to Call Home
        </h1>

        {/* Description */}
        <p
          className="
            mt-4
            max-w-full
            text-[10px]
            leading-[1.6]
            text-[#26374d]

            sm:max-w-[310px]
            sm:text-[11px]
            sm:mt-5

            md:text-[12px]
            md:mt-5

            lg:max-w-[430px]
            lg:text-[13px]
            lg:mt-6
          "
        >
          Discover properties that match your lifestyle, budget, and future goals. From modern apartments to luxury villas, your perfect property is just a few clicks away.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-4

            sm:mt-7
            lg:mt-8
          "
        >
          <button
            type="button"
            className="
              shrink-0
              rounded-[10px]
              bg-[#061632]
              px-5
              py-3
              text-[10px]
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              hover:bg-black
              hover:shadow-lg
              active:scale-95

              sm:px-6
              sm:py-3
              sm:text-[11px]

              lg:px-7
              lg:py-3.5
              lg:text-[12px]
            "
          >
            Explore Homes
          </button>

          <button
            type="button"
            className="
              shrink-0
              rounded-[10px]
              border-2
              border-[#061632]
              bg-white/70
              px-5
              py-3
              text-[10px]
              font-semibold
              text-[#061632]
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white
              hover:shadow-lg
              active:scale-95
              backdrop-blur-[2px]

              sm:px-6
              sm:py-3
              sm:text-[11px]

              lg:px-7
              lg:py-3.5
              lg:text-[12px]
            "
          >
            Book a Visit
          </button>
        </div>
      </div>

      {/* ================================= */}
      {/* ANIMATED FOG */}
      {/* ================================= */}

      <div
        ref={fogContainerRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          overflow-hidden
        "
      >
        {/* Fog 1 */}
        <div
          className="
            fog-cloud
            absolute
            bottom-[-15%]
            left-[-20%]
            h-[45%]
            w-[75%]
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_40%,rgba(255,255,255,0)_75%)]
            blur-[25px]
          "
        />

        {/* Fog 2 */}
        <div
          className="
            fog-cloud
            absolute
            bottom-[-20%]
            left-[10%]
            h-[50%]
            w-[80%]
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.7)_40%,rgba(255,255,255,0)_75%)]
            blur-[30px]
          "
        />

        {/* Fog 3 */}
        <div
          className="
            fog-cloud
            absolute
            bottom-[-15%]
            right-[-20%]
            h-[45%]
            w-[75%]
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.7)_40%,rgba(255,255,255,0)_75%)]
            blur-[25px]
          "
        />

        {/* Fog 4 */}
        <div
          className="
            fog-cloud
            absolute
            bottom-[-25%]
            left-[35%]
            h-[40%]
            w-[60%]
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0)_75%)]
            blur-[35px]
          "
        />

        {/* Bottom white transition */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[12%]
            w-full
            bg-gradient-to-t
            from-white
            via-white/80
            to-transparent
          "
        />
      </div>
    </section>
  )
}

export default Hero
