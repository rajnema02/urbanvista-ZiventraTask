function CTASection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white

        pt-[110px]
        pb-[110px]

        sm:pt-[0px]
        sm:pb-[0px]

        md:pt-[0px]
        md:pb-[0px]

        lg:pt-[80px]
        lg:pb-[0px]
      "
    >
      <style>
        {`
          @keyframes ctaImageZoom {
            0% {
              transform: scale(1);
            }

            35% {
              transform: scale(1.14);
            }

            65% {
              transform: scale(1.14);
            }

            100% {
              transform: scale(1);
            }
          }

          .cta-image-zoom {
            animation: ctaImageZoom 4.5s ease-in-out infinite;
            transform-origin: center center;
            will-change: transform;
          }
        `}
      </style>

      <div
        className="
          relative
          mx-auto
          w-[90%]
          max-w-[1630px]
          overflow-hidden

          rounded-[18px]

          sm:w-[88%]
          sm:rounded-[20px]

          md:w-[86%]

          lg:w-[85%]
          lg:rounded-[24px]
        "
      >
        <div
          className="
            relative
            h-[520px]
            w-full
            overflow-hidden

            sm:h-[600px]

            md:h-[680px]

            lg:h-[760px]

            xl:h-[800px]
          "
        >
          <img
            src="/property-01.png"
            alt="Modern luxury house"
            className="
              cta-image-zoom
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/[0.38]
            "
          />

          <div
            className="
              absolute
              left-[28px]
              top-[40px]
              z-10

              max-w-[650px]

              sm:left-[45px]
              sm:top-[55px]

              md:left-[55px]
              md:top-[65px]

              lg:left-[68px]
              lg:top-[70px]

              xl:left-[72px]
            "
          >
            <h2
              className="
                max-w-[850px]

                text-[30px]
                font-medium
                leading-[1.08]
                tracking-[-1.1px]
                text-white

                sm:text-[38px]
                sm:tracking-[-1.4px]

                md:text-[44px]

                lg:text-[50px]
                lg:tracking-[-1.8px]

                xl:text-[52px]
              "
            >
              Ready to Find Your Dream Property?
            </h2>

            <p
              className="
                mt-[18px]

                max-w-[530px]

                text-[11px]
                font-normal
                leading-[1.45]
                tracking-[-0.05px]
                text-white/90

                sm:mt-[20px]
                sm:text-[12px]

                md:text-[13px]

                lg:mt-[22px]
                lg:text-[14px]
              "
            >
              Whether you're looking to buy, rent, sell, or invest,
              we're here to help you make the right move.
            </p>

            <button
              type="button"
              className="
                mt-[24px]

                inline-flex
                h-[46px]
                items-center
                gap-[10px]

                rounded-[9px]

                bg-white

                pl-[17px]
                pr-[6px]

                text-[11px]
                font-normal
                leading-none
                text-[#111111]

                shadow-[0_6px_20px_rgba(0,0,0,0.18)]

                transition-transform
                duration-200

                hover:scale-[1.02]
                active:scale-[0.98]

                sm:mt-[27px]
                sm:h-[48px]
                sm:text-[12px]

                lg:h-[50px]
                lg:pl-[18px]
                lg:text-[13px]
              "
            >
              <span>
                Get In Touch
              </span>

              <span
                className="
                  flex
                  h-[34px]
                  w-[34px]

                  items-center
                  justify-center

                  rounded-[7px]

                  bg-[#050505]

                  text-[14px]
                  font-normal
                  text-white

                  sm:h-[36px]
                  sm:w-[36px]

                  lg:h-[38px]
                  lg:w-[38px]
                "
              >
                ↗
              </span>
            </button>
          </div>

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              z-[3]

              h-[45%]
              w-full

              bg-gradient-to-t
              from-[#00131e]/80
              via-[#00131e]/25
              to-transparent
            "
          />

          <div
            className="
              pointer-events-none
              absolute

              bottom-[-5px]
              left-1/2

              z-[5]

              w-[105%]

              -translate-x-1/2

              whitespace-nowrap

              text-center

              text-[72px]
              font-extrabold
              leading-[0.8]
              tracking-[-5px]

              text-white/[0.34]

              sm:text-[100px]
              sm:tracking-[-7px]

              md:text-[125px]

              lg:text-[155px]
              lg:tracking-[-10px]

              xl:text-[175px]
            "
          >
            UrbanVista
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection