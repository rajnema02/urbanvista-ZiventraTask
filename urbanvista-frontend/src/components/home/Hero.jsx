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
        sm:min-h-[600px]
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
      {/* NAVBAR IS OUTSIDE HERO */}
      {/* ========================= */}

      {/* ========================= */}
      {/* HERO CONTENT */}
      {/* ========================= */}

      <div 
        className="
          absolute
          left-4
          top-[54%]
          z-10
          w-[calc(100%-7rem)]
          max-w-[520px]
          rounded-[14px]
          bg-[#9fc9ec]/85
          p-4
          shadow-sm
          backdrop-blur-[2px]

          sm:left-[6%]
          sm:top-[55%]
          sm:w-[360px]
          sm:max-w-none
          sm:p-5

          md:left-[7%]
          md:w-[390px]
          md:p-6

          lg:left-[6%]
          lg:top-[19%]
          lg:w-[500px]
          lg:p-7
        "

        
      >
        {/* Heading */}
        <h1
          className="
            text-[24px]
            font-bold
            leading-[1.12]
            tracking-[-0.5px]
            text-[#061632]


            sm:text-[30px]

            md:text-[34px]

            lg:text-[42px]
          "
        >
          Find a Place You’ll
          <br />
          Love to Call Home
        </h1>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-[290px]
            text-[9px]
            leading-[1.5]
            text-[#26374d]

            sm:text-[10px]

            md:text-[11px]

            lg:max-w-[390px]
            lg:text-[12px]
            font-p
          "
          
        >
          Discover properties that match your lifestyle,
          budget, and future goals. From modern apartments
          to luxury villas, your perfect property is just a
          few clicks away.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          <button
            type="button"
            className="
              rounded-md
              bg-[#061632]
              px-3
              py-2
              text-[9px]
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:scale-105
              hover:bg-black
              active:scale-95

              sm:px-3.5
              sm:text-[10px]
            "
          >
            Explore Homes
          </button>

          <button
            type="button"
            className="
              rounded-md
              border
              border-[#061632]
              bg-white/60
              px-3
              py-2
              text-[9px]
              font-medium
              text-[#061632]
              shadow-sm
              transition-all
              duration-200
              hover:scale-105
              hover:bg-white
              active:scale-95

              sm:px-3.5
              sm:text-[10px]
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