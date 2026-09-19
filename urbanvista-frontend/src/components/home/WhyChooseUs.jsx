import { useState } from 'react'

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    {
      number: '01',
      title: 'Verified Properties',
      description:
        'Browse reliable and carefully reviewed property listings.',
      image: '/property-02.png',
    },
    {
      number: '02',
      title: 'Expert Guidance',
      description:
        'Get professional support at every stage of your property journey.',
      image: '/hero-house.png',
    },
    {
      number: '03',
      title: 'Transparent Process',
      description:
        'Clear information, honest communication, and no unnecessary surprises.',
      image: '/property-03.png',
    },
    {
      number: '04',
      title: 'Best Locations',
      description:
        'Discover properties in neighborhoods and locations that matter to you.',
      image: '/property-01.png',
    },
  ]

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        pt-[150px]
        pb-[130px]
        sm:pt-[175px]
        sm:pb-[145px]
        lg:pt-[90px]
        lg:pb-[135px]
      "
    >
      {/* =====================================================
          SAME PAGE WIDTH AS PREVIOUS SECTIONS

          5% LEFT
          90% CONTENT
          5% RIGHT
      ====================================================== */}

      <div
        className="
          ml-[5%]
          mr-[5%]
          w-[90%]
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="w-full">
          {/* LABEL */}

          <div className="flex items-center gap-[9px]">
            <span
              className="
                h-[10px]
                w-[10px]
                shrink-0
                rounded-full
                border-[3px]
                border-[#061632]
                bg-[#8ec5ef]
                sm:h-[11px]
                sm:w-[11px]
              "
            />

            <p
              className="
                text-[12px]
                font-medium
                leading-none
                tracking-[-0.1px]
                text-[#111111]
                sm:text-[13px]
              "
            >
            <span className="text-[24px]">Why Choose Us</span>
              
            </p>
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-[32px]
              max-w-[700px]
              text-[38px]
              font-semibold
              leading-[1.05]
              tracking-[-1.7px]
              text-[#05070b]
              sm:text-[44px]
              md:text-[48px]
              lg:text-[52px]
            "
          >
            Real Estate Made Simple
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-[20px]
              max-w-[620px]
              text-[13px]
              font-normal
              leading-[1.55]
              tracking-[-0.05px]
              text-[#444444]
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            Finding the right property shouldn&apos;t be complicated. We
            combine trusted listings, local expertise, and personalized
            support to help you make confident real estate decisions.
          </p>
        </div>

        {/* =====================================================
            FEATURE ACCORDION

            DESKTOP:
            HORIZONTAL EXPANSION

            DEFAULT:
            01 EXPANDED

            HOVER:
            CURRENT CARD EXPANDS
        ====================================================== */}

        <div
          className="
            mt-[55px]
            flex
            w-full
            flex-col
            gap-[10px]
            sm:mt-[65px]
            lg:mt-[70px]
            lg:h-[525px]
            lg:flex-row
            lg:gap-[14px]
          "
          onMouseLeave={() => setActiveIndex(0)}
        >
          {features.map((feature, index) => {
            const isActive = activeIndex === index

            return (
              <article
                key={feature.number}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative
                  min-w-0
                  cursor-pointer
                  overflow-hidden
                  rounded-[15px]
                  transition-[flex]
                  duration-700
                  ease-[cubic-bezier(0.65,0,0.35,1)]

                  ${
                    isActive
                      ? 'bg-[#08090d] lg:flex-[3.15]'
                      : 'bg-[#f3f3f3] lg:flex-[1]'
                  }

                  min-h-[370px]
                  sm:min-h-[400px]
                  lg:h-full
                  lg:min-h-0
                `}
              >
                {/* =================================================
                    LARGE NUMBER

                    ACTIVE:
                    WHITE

                    INACTIVE:
                    BLACK
                ================================================== */}

                <div
                  className={`
                    absolute
                    right-[18px]
                    top-[15px]
                    z-20
                    leading-none
                    tracking-[-3px]
                    transition-all
                    duration-500
                    sm:right-[22px]
                    sm:top-[18px]
                    lg:right-[25px]
                    lg:top-[22px]

                    ${
                      isActive
                        ? `
                          text-[68px]
                          font-normal
                          text-white
                          sm:text-[76px]
                          lg:text-[86px]
                        `
                        : `
                          text-[58px]
                          font-normal
                          text-[#08090d]
                          sm:text-[64px]
                          lg:text-[72px]
                        `
                    }
                  `}
                >
                  <span className="mr-[-5px]">.</span>
                  {feature.number}
                </div>

                {/* =================================================
                    ACTIVE CARD
                ================================================== */}

                {isActive ? (
                  <>
                    {/* ---------------------------------------------
                        ACTIVE TEXT
                    ---------------------------------------------- */}

                    <div
                      className="
                        absolute
                        left-[25px]
                        top-[27px]
                        z-20
                        max-w-[330px]
                        sm:left-[32px]
                        sm:top-[32px]
                        sm:max-w-[360px]
                        lg:left-[38px]
                        lg:top-[38px]
                        lg:max-w-[430px]
                      "
                    >
                      <h3
                        className="
                          text-[24px]
                          font-semibold
                          leading-[1.05]
                          tracking-[-0.7px]
                          text-white
                          sm:text-[27px]
                          lg:text-[30px]
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-[20px]
                          max-w-[330px]
                          text-[14px]
                          font-normal
                          leading-[1.5]
                          tracking-[-0.1px]
                          text-white/90
                          sm:text-[15px]
                          lg:max-w-[370px]
                          lg:text-[16px]
                        "
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* ---------------------------------------------
                        ACTIVE IMAGE

                        IMAGE SITS AT BOTTOM
                    ---------------------------------------------- */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        z-10
                        flex
                        h-[64%]
                        items-end
                        justify-center
                        overflow-hidden
                        sm:h-[66%]
                        lg:h-[68%]
                      "
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="
                          block
                          h-full
                          w-full
                          object-cover
                          object-center
                        "
                      />
                    </div>
                  </>
                ) : (
                  /* =================================================
                     INACTIVE CARD
                  ================================================== */

                  <>
                    {/* ---------------------------------------------
                        INACTIVE CONTENT
                    ---------------------------------------------- */}

                    <div
                      className="
                        absolute
                        bottom-[25px]
                        left-[18px]
                        right-[18px]
                        z-10
                        sm:bottom-[30px]
                        sm:left-[20px]
                        sm:right-[20px]
                        lg:bottom-[30px]
                        lg:left-[18px]
                        lg:right-[18px]
                      "
                    >
                      <h3
                        className="
                          text-[15px]
                          font-semibold
                          leading-[1.15]
                          tracking-[-0.4px]
                          text-[#08090d]
                          sm:text-[16px]
                          lg:text-[17px]
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-[12px]
                          text-[10px]
                          font-normal
                          leading-[1.5]
                          tracking-[-0.05px]
                          text-[#303030]
                          sm:text-[11px]
                          lg:text-[12px]
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  </>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs