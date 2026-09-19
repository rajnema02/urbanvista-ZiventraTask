function FooterSection() {
  return (
    <footer
      className="
        w-full
        overflow-hidden
        bg-[#00131e]
      "
    >
      {/* =====================================================
          MAIN FOOTER

          Same centered width system used throughout
          the design.
      ====================================================== */}

      <div
        className="
          mx-auto
          w-[90%]
          max-w-[1365px]
        "
      >
        {/* ===================================================
            FOOTER CONTENT
        ==================================================== */}

        <div
          className="
            min-h-[650px]

            px-[25px]
            pb-[35px]
            pt-[65px]

            sm:min-h-[680px]
            sm:px-[40px]
            sm:pt-[75px]

            md:px-[50px]

            lg:min-h-[200px]
            lg:px-[70px]
            lg:pb-[80px]
            lg:pt-[78px]
          "
        >
          {/* =================================================
              MAIN FOOTER GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1

              gap-[60px]

              md:grid-cols-[1fr_0.35fr_0.42fr]
              md:gap-[55px]

              lg:grid-cols-[1fr_0.30fr_0.38fr]
              lg:gap-[95px]
            "
          >
            {/* =================================================
                BRAND / LEFT SIDE
            ================================================== */}

            <div>
              {/* BRAND */}

              <h2
                className="
                  text-[27px]
                  font-bold
                  leading-none
                  tracking-[-1px]
                  text-white

                  sm:text-[29px]

                  lg:text-[31px]
                "
              >
                UrbanVista
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-[34px]

                  max-w-[310px]

                  text-[11px]
                  font-normal
                  leading-[1.55]
                  tracking-[-0.05px]
                  text-white/80

                  sm:text-[12px]

                  lg:text-[13px]
                "
              >
                Find, explore, and choose your next home
                with a simple and modern experience.
              </p>

              {/* =================================================
                  SOCIAL ICONS

                  The reference uses small WHITE SQUARES.
              ================================================== */}

              <div
                className="
                  mt-[42px]

                  flex
                  items-center
                  gap-[18px]
                "
              >
                {/* INSTAGRAM */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex
                    h-[30px]
                    w-[30px]
                    items-center
                    justify-center

                    bg-white

                    text-[17px]
                    font-normal
                    leading-none
                    text-[#00131e]

                    transition-transform
                    duration-200

                    hover:scale-105
                  "
                >
                  ◎
                </a>

                {/* FACEBOOK */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex
                    h-[30px]
                    w-[30px]
                    items-center
                    justify-center

                    bg-white

                    text-[17px]
                    font-bold
                    leading-none
                    text-[#00131e]

                    transition-transform
                    duration-200

                    hover:scale-105
                  "
                >
                  f
                </a>

                {/* WHATSAPP */}

                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="
                    flex
                    h-[30px]
                    w-[30px]
                    items-center
                    justify-center

                    bg-white

                    text-[16px]
                    font-normal
                    leading-none
                    text-[#00131e]

                    transition-transform
                    duration-200

                    hover:scale-105
                  "
                >
                  ◉
                </a>

                {/* YOUTUBE */}

                <a
                  href="#"
                  aria-label="YouTube"
                  className="
                    flex
                    h-[30px]
                    w-[30px]
                    items-center
                    justify-center

                    bg-white

                    text-[13px]
                    font-bold
                    leading-none
                    text-[#00131e]

                    transition-transform
                    duration-200

                    hover:scale-105
                  "
                >
                  ▶
                </a>
              </div>
            </div>

            {/* =================================================
                EXPLORE
            ================================================== */}

            <div>
              {/* TITLE */}

              <h3
                className="
                  text-[14px]
                  font-normal
                  leading-none
                  text-white

                  sm:text-[15px]
                "
              >
                Explore
              </h3>

              {/* LINKS */}

              <nav
                className="
                  mt-[35px]

                  flex
                  flex-col
                  gap-[22px]
                "
              >
                <a
                  href="#"
                  className="
                    text-[11px]
                    font-normal
                    leading-none
                    text-white/85

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[12px]
                  "
                >
                  Properties
                </a>

                <a
                  href="#"
                  className="
                    text-[11px]
                    font-normal
                    leading-none
                    text-white/85

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[12px]
                  "
                >
                  Services
                </a>

                <a
                  href="#"
                  className="
                    text-[11px]
                    font-normal
                    leading-none
                    text-white/85

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[12px]
                  "
                >
                  About
                </a>

                <a
                  href="#"
                  className="
                    text-[11px]
                    font-normal
                    leading-none
                    text-white/85

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[12px]
                  "
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* =================================================
                CONTACT
            ================================================== */}

            <div>
              {/* TITLE */}

              <h3
                className="
                  text-[14px]
                  font-normal
                  leading-none
                  text-white

                  sm:text-[15px]
                "
              >
                Contact
              </h3>

              {/* CONTACT LIST */}

              <div
                className="
                  mt-[35px]

                  flex
                  flex-col
                  gap-[19px]
                "
              >
                {/* EMAIL */}

                <div
                  className="
                    flex
                    items-center
                    gap-[10px]
                  "
                >
                  <span
                    className="
                      flex
                      h-[32px]
                      w-[32px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      bg-white

                      text-[11px]
                      text-[#00131e]
                    "
                  >
                    @
                  </span>

                  <span
                    className="
                      whitespace-nowrap

                      text-[11px]
                      font-normal
                      text-white/85

                      sm:text-[12px]
                    "
                  >
                    myhome@mail.com
                  </span>
                </div>

                {/* PHONE */}

                <div
                  className="
                    flex
                    items-center
                    gap-[10px]
                  "
                >
                  <span
                    className="
                      flex
                      h-[32px]
                      w-[32px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      bg-white

                      text-[13px]
                      text-[#00131e]
                    "
                  >
                    +
                  </span>

                  <span
                    className="
                      whitespace-nowrap

                      text-[11px]
                      font-normal
                      text-white/85

                      sm:text-[12px]
                    "
                  >
                    +123 456 000
                  </span>
                </div>

                {/* LOCATION */}

                <div
                  className="
                    flex
                    items-center
                    gap-[10px]
                  "
                >
                  <span
                    className="
                      flex
                      h-[32px]
                      w-[32px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      bg-white

                      text-[10px]
                      text-[#00131e]
                    "
                  >
                    ●
                  </span>

                  <span
                    className="
                      whitespace-nowrap

                      text-[11px]
                      font-normal
                      text-white/85

                      sm:text-[12px]
                    "
                  >
                    New York, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              BOTTOM AREA

              Large empty space before this row,
              matching the reference.
          ==================================================== */}

          <div
            className="
              mt-[170px]

              flex
              flex-col
              gap-[25px]

              sm:mt-[185px]

              md:flex-row
              md:items-center
              md:justify-between

              lg:mt-[200px]
            "
          >
            {/* COPYRIGHT */}

            <p
              className="
                text-[10px]
                font-normal
                leading-none
                text-white/60

                sm:text-[11px]
              "
            >
              Copyright@2026
            </p>

            {/* CENTER TEXT */}

            <p
              className="
                text-[10px]
                font-normal
                leading-none
                text-white/60

                sm:text-[11px]
              "
            >
              Alive on LiveOS.ai
            </p>

            {/* PRIVACY */}

            <a
              href="#"
              className="
                text-[10px]
                font-normal
                leading-none
                text-white/75

                transition-colors
                duration-200

                hover:text-white

                sm:text-[11px]
              "
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection