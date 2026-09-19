import { useRef } from 'react'
import gsap from 'gsap'

function Services() {
  const fogRef = useRef([])
  const contentRef = useRef([])

  const services = [
    {
      number: '01',
      title: 'Buy a Property',
      description:
        'Find your dream home from our wide range of verified properties.',
      image: '/property-1.png',
    },
    {
      number: '02',
      title: 'Rent a Property',
      description:
        'Find comfortable apartments, homes, and commercial spaces in your preferred location.',
      image: '/property-2.png',
    },
    {
      number: '03',
      title: 'Invest in Real Estate',
      description:
        'Discover valuable real estate investment opportunities in prime locations.',
      image: '/property-3.png',
    },
    {
      number: '04',
      title: 'Sell Your Property',
      description:
        'Sell your property faster with our trusted real estate network.',
      image: '/property-4.png',
    },
  ]

  const handleMouseEnter = (index) => {
    const fog = fogRef.current[index]
    const content = contentRef.current[index]

    if (!fog || !content) return

    gsap.to(fog, {
      yPercent: -55,
      duration: 1.1,
      ease: 'power3.out',
    })

    gsap.to(content, {
      y: -58,
      duration: 0.9,
      ease: 'power3.out',
    })
  }

  const handleMouseLeave = (index) => {
    const fog = fogRef.current[index]
    const content = contentRef.current[index]

    if (!fog || !content) return

    gsap.to(fog, {
      yPercent: 0,
      duration: 1,
      ease: 'power3.inOut',
    })

    gsap.to(content, {
      y: 0,
      duration: 0.9,
      ease: 'power3.inOut',
    })
  }

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-5
        py-14
        sm:px-8
        sm:py-16
        lg:px-0
        lg:py-[70px]
      "
    >
      <div
        className="
          mx-auto
          w-[calc(100%-40px)]
          max-w-[1364px]
        "
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-[80px]
          "
        >
          <div className="min-w-0">
            <div className="mb-[28px] flex items-center gap-[10px]">
              <span
                className="
                  h-[18px]
                  w-[18px]
                  shrink-0
                  rounded-full
                  border-[4px]
                  border-[#061632]
                  bg-[#8ec5ef]
                "
              />

              <p
                className="
                  text-[13px]
                  font-medium
                  leading-none
                  tracking-[-0.15px]
                  text-[#111111]
                "
              >
                
                <span className="text-[24px]">Trusted Real Estate Solutions</span>
              </p>
            </div>

            <h2
              className="
                max-w-[650px]
                text-[44px]
                font-semibold
                leading-[1.08]
                tracking-[-1.8px]
                text-[#05070b]
                sm:text-[46px]
                lg:text-[48px]
              "
            >
              Everything You Need to Find
              <br />
              the Right Property
            </h2>
          </div>

          <div
            className="
              flex
              min-w-0
              items-start
              lg:justify-end
              lg:pt-[78px]
            "
          >
            <p
              className="
                w-full
                max-w-[470px]
                text-[14px]
                font-normal
                leading-[1.5]
                tracking-[-0.1px]
                text-[#444444]
                lg:text-right
              "
            >
              Whether you&apos;re buying your first home, investing in property,
              or looking for the perfect rental, we make the entire journey
              simpler, faster, and more transparent.
            </p>
          </div>
        </div>

        <div
          className="
            mt-[100px]
            grid
            grid-cols-1
            gap-4
            sm:mt-[110px]
            sm:grid-cols-2
            lg:mt-[120px]
            lg:grid-cols-4
            lg:gap-[12px]
          "
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="
                group
                relative
                aspect-[0.78]
                min-h-[400px]
                cursor-pointer
                overflow-hidden
                rounded-[15px]
                bg-[#edf0f3]
                sm:min-h-[450px]
                lg:min-h-0
              "
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.015]
                "
              />

              <div className="absolute inset-0 bg-black/[0.01]" />

              <div
                ref={(element) => {
                  fogRef.current[index] = element
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-[-13%]
                  left-[-20%]
                  h-[47%]
                  w-[140%]
                  rounded-[50%]
                  bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.91)_34%,rgba(255,255,255,0.62)_55%,rgba(255,255,255,0)_80%)]
                  blur-[12px]
                  will-change-transform
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-[17%]
                  w-full
                  bg-gradient-to-t
                  from-white
                  via-white/75
                  to-transparent
                "
              />

              <span
                className="
                  absolute
                  left-[20px]
                  top-[20px]
                  z-20
                  text-[11px]
                  font-medium
                  text-white
                  drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]
                "
              >
                {service.number}
              </span>

              <span
                className="
                  absolute
                  right-[20px]
                  top-[20px]
                  z-20
                  flex
                  h-[37px]
                  w-[37px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#061632]
                  text-[13px]
                  text-white
                "
              >
                ↗
              </span>

              <div
                ref={(element) => {
                  contentRef.current[index] = element
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  w-full
                  px-[20px]
                  pb-[20px]
                  will-change-transform
                "
              >
                <p
                  className="
                    mb-[8px]
                    max-w-[280px]
                    text-[12px]
                    font-normal
                    leading-[1.45]
                    tracking-[-0.05px]
                    text-[#526173]
                  "
                >
                  {service.description}
                </p>

                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[1.1]
                    tracking-[-0.35px]
                    text-[#061632]
                  "
                >
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services