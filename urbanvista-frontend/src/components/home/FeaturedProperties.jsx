import { ArrowUpRight } from 'lucide-react'

function FeaturedProperties() {
  const properties = [
    {
      title: 'Luxury Villa',
      location: 'Premium Location',
      price: 'Starting from ₹XX,XX,XXX',
      image: '/property-01.png',
    },
    {
      title: 'Luxury Villa',
      location: 'Premium Location',
      price: 'Starting from ₹XX,XX,XXX',
      image: '/property-03.png',
    },
    {
      title: 'Luxury Villa',
      location: 'Premium Location',
      price: 'Starting from ₹XX,XX,XXX',
      image: '/property-02.png',
    },
  ]

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        pt-[100px]
        pb-[90px]
        sm:pt-[140px]
        sm:pb-[110px]
        lg:pt-[80px]
        lg:pb-[0px]
      "
    >
      <div
        className="
          mx-auto
          w-[90%]
          max-w-[1320px]
          sm:w-[88%]
          lg:w-[86%]
        "
      >
        <div
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-between
            gap-y-3
          "
        >
          <div className="flex items-center gap-[10px]">
            <span
              className="
                h-[16px]
                w-[16px]
                shrink-0
                rounded-full
                border-[4px]
                border-[#061632]
                bg-[#8ec5ef]
                sm:h-[17px]
                sm:w-[17px]
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
              <span className="text-[24px]">Featured Properties</span>
            </p>
          </div>

          <button
            type="button"
            className="
              flex
              shrink-0
              items-center
              gap-[9px]
              rounded-[9px]
              bg-[#050505]
              px-[10px]
              py-[6px]
              text-[9px]
              font-medium
              text-white
              shadow-[0_5px_15px_rgba(0,0,0,0.12)]
              transition-colors
              duration-200
              hover:bg-[#161616]
              sm:px-[13px]
              sm:py-[7px]
              sm:text-[10px]
            "
          >
            View All Properties

            <span
              className="
                flex
                h-[20px]
                w-[20px]
                items-center
                justify-center
                rounded-[5px]
                bg-white
                text-[#050505]
                sm:h-[22px]
                sm:w-[22px]
              "
            >
              <ArrowUpRight
                size={11}
                strokeWidth={1.8}
              />
            </span>
          </button>
        </div>

        <div
          className="
            mt-[32px]
            grid
            w-full
            grid-cols-1
            gap-[22px]
            lg:grid-cols-[1fr_0.6fr]
            lg:items-center
            lg:gap-[80px]
          "
        >
          <div>
            <h2
              className="
                max-w-[650px]
                text-[30px]
                font-semibold
                leading-[1.1]
                tracking-[-1px]
                text-[#05070b]
                sm:text-[38px]
                sm:tracking-[-1.2px]
                md:text-[46px]
                lg:text-[48px]
                lg:tracking-[-1.5px]
              "
            >
              Explore Properties You&apos;ll Love
            </h2>
          </div>

          <div className="flex lg:justify-end">
            <p
              className="
                max-w-[430px]
                text-[12px]
                font-normal
                leading-[1.5]
                tracking-[-0.05px]
                text-[#444444]
                sm:text-[13px]
                md:text-[14px]
                lg:text-right
              "
            >
              Discover handpicked properties in prime locations.
            </p>
          </div>
        </div>

        <div
          className="
            mt-[40px]
            flex
            w-[calc(100%+116px)]
            -translate-x-[58px]
            flex-col
            gap-[16px]
            sm:mt-[50px]
            sm:w-[calc(100%+116px)]
            sm:-translate-x-[58px]
            sm:gap-[20px]
            lg:mt-[62px]
            lg:w-[calc(100%+116px)]
            lg:-translate-x-[58px]
          "
        >
          {properties.map((property, index) => (
            <article
              key={`${property.title}-${index}`}
              className="
                relative
                mx-auto
                w-full
                overflow-hidden
                rounded-[2px]
                bg-[#e9ecef]
              "
            >
             <img
  src={property.image}
  alt={property.title}
  className="
    block
    h-[calc(55vw+120px)]
    min-h-[360px]
    max-h-[680px]
    w-full
    object-cover
    sm:h-[calc(52vw+120px)]
    sm:min-h-[420px]
    sm:max-h-[620px]
    lg:h-[calc(38vw+120px)]
    lg:min-h-[540px]
    lg:max-h-[680px]
    xl:h-[calc(36vw+120px)]
    xl:max-h-[720px]
  "
/>

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/[0.02]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  w-[220px]
                  -translate-x-1/2
                  -translate-y-1/2
                  sm:w-[280px]
                  md:w-[300px]
                  lg:w-[330px]
                "
              >
                <div
                  className="
                    rounded-[14px]
                    bg-black/[0.55]
                    px-[18px]
                    py-[16px]
                    text-center
                    backdrop-blur-[2px]
                    sm:px-[26px]
                    sm:py-[20px]
                  "
                >
                  <h3
                    className="
                      text-[15px]
                      font-medium
                      leading-[1.15]
                      tracking-[-0.2px]
                      text-white
                      sm:text-[18px]
                      lg:text-[20px]
                    "
                  >
                    {property.title}
                  </h3>

                  <p
                    className="
                      mt-[4px]
                      text-[9px]
                      font-normal
                      leading-[1.3]
                      tracking-[0.03em]
                      text-white/85
                      sm:text-[10px]
                    "
                  >
                    <span className="mr-[4px] text-[#ff4f4f]">●</span>
                    {property.location}
                  </p>

                  <p
                    className="
                      mt-[12px]
                      text-[13px]
                      font-semibold
                      leading-none
                      tracking-[-0.2px]
                      text-white
                      sm:text-[16px]
                    "
                  >
                    {property.price}
                  </p>

                  <div
                    className="
                      mx-auto
                      mt-[14px]
                      flex
                      w-fit
                      items-center
                      gap-[8px]
                      rounded-[7px]
                      bg-white
                      px-[12px]
                      py-[6px]
                      text-[9px]
                      font-medium
                      text-[#050505]
                      sm:text-[10px]
                    "
                  >
                    Explore

                    <span
                      className="
                        flex
                        h-[18px]
                        w-[18px]
                        items-center
                        justify-center
                        rounded-[4px]
                        bg-[#050505]
                        text-white
                      "
                    >
                      <ArrowUpRight
                        size={10}
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties