function Testimonials() {
  const testimonials = [
    {
      name: 'Liam Carter',
      role: 'Real Estate Investor',
      message:
        'Finding our dream home was much easier than we expected. The process was smooth, transparent, and the team supported us at every step.',
      image: '/real-state.jpg',
    },
    {
      name: 'Emma Wilson',
      role: 'Home Buyer',
      message:
        'The team understood exactly what we were looking for. We found a beautiful property without the usual stress of house hunting.',
      image: '/real-state.jpg',
    },
    {
      name: 'Noah Smith',
      role: 'Property Owner',
      message:
        'Their guidance made selling our property simple. Everything was explained clearly and the entire process felt very professional.',
      image: '/real-state.jpg',
    },
    {
      name: 'Olivia Brown',
      role: 'Home Buyer',
      message:
        'From the first consultation to the final visit, the experience was smooth and transparent. I would definitely use the service again.',
      image: '/real-state.jpg',
    },
    {
      name: 'Olivia Brown',
      role: 'Home Buyer',
      message:
        'Finding our dream home was much easier than we expected. The process was smooth, transparent, and the team supported us at every step.',
      image: '/real-state.jpg',
    },
  ]

  

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        pt-[150px]
        pb-[120px]
        sm:pt-[5px]
        sm:pb-[0px]
        lg:pt-[70px]
        lg:pb-[50px]
      "
    >
      {/* =====================================================
          SAME 90% WIDTH SYSTEM
          5% LEFT + 90% CONTENT + 5% RIGHT
      ====================================================== */}

      <div
        className="
          ml-[5%]
          mr-[5%]
          w-[90%]
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div>
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
              
              <span className="text-[24px]">Testimonials</span>
            </p>
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-[30px]
              text-[38px]
              font-semibold
              leading-[1.06]
              tracking-[-1.7px]
              text-[#05070b]
              sm:text-[44px]
              md:text-[48px]
              lg:text-[52px]
            "
          >
            What Our Clients Say
          </h2>
        </div>

        {/* =====================================================
            MANUAL HORIZONTAL SCROLL

            NO GSAP
            NO AUTO SLIDE
            NO DUPLICATE CARDS
        ====================================================== */}

        <div
          className="
            mt-[55px]
            w-full
            overflow-x-auto
            overflow-y-hidden
            scroll-smooth
            pb-[10px]
            sm:mt-[65px]
            lg:mt-[75px]

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div
            className="
              flex
              w-max
              gap-[14px]
              pr-[1px]
              sm:gap-[16px]
              lg:gap-[18px]
            "
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({ testimonial }) {
  return (
    <article
      className="
        flex
        h-[330px]
        w-[280px]
        shrink-0
        flex-col
        justify-between
        rounded-[8px]
        bg-[#f4f4f4]
        p-[20px]
        sm:h-[350px]
        sm:w-[310px]
        sm:p-[22px]
        lg:h-[370px]
        lg:w-[330px]
        lg:p-[24px]
      "
    >
      {/* =====================================================
          QUOTE + MESSAGE
      ====================================================== */}

      <div>
        {/* QUOTE */}

        <div
          className="
            text-[34px]
            font-serif
            leading-none
            text-[#bcbcbc]
            sm:text-[36px]
          "
        >
          “
        </div>

        {/* MESSAGE */}

        <p
          className="
            mt-[14px]
            max-w-[275px]
            text-[11px]
            font-normal
            leading-[1.55]
            tracking-[-0.05px]
            text-[#4c4c4c]
            sm:text-[12px]
            lg:text-[17px]
          "
        >
          {testimonial.message}
        </p>
      </div>

      {/* =====================================================
          CLIENT INFORMATION
      ====================================================== */}

      <div className="flex items-center gap-[11px]">
        {/* IMAGE */}

        <div
          className="
            h-[40px]
            w-[40px]
            shrink-0
            overflow-hidden
            rounded-[6px]
            bg-[#d9d9d9]
            sm:h-[44px]
            sm:w-[44px]
          "
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* NAME + ROLE */}

        <div>
          <p
            className="
              text-[13px]
              font-medium
              leading-none
              tracking-[-0.15px]
              text-[#111111]
              sm:text-[24px]
              lg:text-[19px]
            "
          >
            {testimonial.name}
          </p>

          <p
            className="
              mt-[5px]
              text-[9px]
              font-normal
              leading-none
              text-[#777777]
              sm:text-[14px]
            "
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  )
}

export default Testimonials