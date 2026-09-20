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
        pt-[70px]
        pb-[70px]
        sm:pt-[90px]
        sm:pb-[80px]
        md:pt-[100px]
        md:pb-[90px]
        lg:pt-[80px]
        lg:pb-[0px]
      "
    >
      <div
        className="
          mx-auto
          w-[92%]
          max-w-[1320px]
          sm:w-[90%]
          md:w-[88%]
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
            gap-x-6
            gap-y-4
          "
        >
          <div className="flex items-center gap-[10px]">
            <span
              className="
                h-[14px]
                w-[14px]
                shrink-0
                rounded-full
                border-[3px]
                border-[#061632]
                bg-[#8ec5ef]
                sm:h-[16px]
                sm:w-[16px]
                sm:border-[4px]
                md:h-[17px]
                md:w-[17px]
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
              <span
                className="
                  text-[19px]
                  sm:text-[21px]
                  md:text-[24px]
                "
              >
                Featured Properties
              </span>
            </p>
          </div>

          <button
            type="button"
            className="
              flex
              shrink-0
              items-center
              gap-[7px]
              rounded-[8px]
              bg-[#050505]
              px-[9px]
              py-[6px]
              text-[9px]
              font-medium
              text-white
              shadow-[0_5px_15px_rgba(0,0,0,0.12)]
              transition-colors
              duration-200
              hover:bg-[#161616]
              sm:gap-[8px]
              sm:rounded-[9px]
              sm:px-[11px]
              sm:py-[7px]
              sm:text-[10px]
              md:px-[13px]
            "
          >
            View All Properties

            <span
              className="
                flex
                h-[19px]
                w-[19px]
                items-center
                justify-center
                rounded-[5px]
                bg-white
                text-[#050505]
                sm:h-[21px]
                sm:w-[21px]
                md:h-[22px]
                md:w-[22px]
              "
            >
              <ArrowUpRight
                size={10}
                strokeWidth={1.8}
                className="sm:h-[11px] sm:w-[11px]"
              />
            </span>
          </button>
        </div>

        <div
          className="
            mt-[28px]
            grid
            w-full
            grid-cols-1
            gap-[20px]
            sm:mt-[34px]
            sm:gap-[24px]
            md:mt-[38px]
            lg:mt-[42px]
            lg:grid-cols-[1fr_0.6fr]
            lg:items-center
            lg:gap-[60px]
            xl:gap-[80px]
          "
        >
          <div>
            <h2
              className="
                max-w-[650px]
                text-[30px]
                font-semibold
                leading-[1.08]
                tracking-[-1px]
                text-[#05070b]
                sm:text-[36px]
                sm:tracking-[-1.2px]
                md:text-[44px]
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
            mt-[34px]
            flex
            w-full
            flex-col
            gap-[16px]
            sm:mt-[42px]
            sm:gap-[20px]
            md:mt-[48px]
            lg:mt-[62px]
            lg:gap-[24px]
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
                  h-[430px]
                  w-full
                  object-cover
                  object-center
                  sm:h-[480px]
                  md:h-[540px]
                  lg:h-[600px]
                  xl:h-[680px]
                  2xl:h-[720px]
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
                  w-[calc(100%-32px)]
                  max-w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  sm:w-[180px]
                  sm:max-w-none
                  md:w-[190px]
                  lg:w-[340px]
                "
              >
                <div
                  className="
                    rounded-[12px]
                    bg-black/[0.55]
                    px-[24px]
                    py-[30px]
                    text-center
                    backdrop-blur-[2px]
                    sm:rounded-[14px]
                    sm:px-[35px]
                    sm:py-[38px]
                    md:px-[45px]
                    md:py-[42px]
                    lg:px-[50px]
                    lg:py-[46px]
                  "
                >
                  <h3
                    className="
                      text-[22px]
                      font-normal
                      leading-[1.15]
                      tracking-[-0.3px]
                      text-white
                      sm:text-[18px]
                      md:text-[30px]
                    "
                  >
                    {property.title}
                  </h3>

                  <p
                    className="
                      mt-[8px]
                      text-[11px]
                      font-normal
                      leading-[1.4]
                      tracking-[0.02em]
                      text-white/85
                      sm:mt-[9px]
                      sm:text-[14px]
                      md:text-[16px]
                    "
                  >
                    <span className="mr-[4px] text-[#ff4f4f]">
                      ●
                    </span>
                    {property.location}
                  </p>

                  <p
                    className="
                      mt-[12px]
                      text-[12px]
                      font-semibold
                      leading-[1.3]
                      tracking-[-0.2px]
                      text-white
                      sm:mt-[14px]
                      sm:text-[14px]
                      md:text-[15px]
                    "
                  >
                    {property.price}
                  </p>

                  <div
                    className="
                      mx-auto
                      mt-[16px]
                      flex
                      w-fit
                      items-center
                      gap-[7px]
                      rounded-[7px]
                      bg-white
                      px-[12px]
                      py-[7px]
                      text-[12px]
                      font-medium
                      text-[#050505]
                      sm:mt-[18px]
                      sm:px-[14px]
                      sm:py-[8px]
                      sm:text-[13px]
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
                        sm:h-[19px]
                        sm:w-[19px]
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