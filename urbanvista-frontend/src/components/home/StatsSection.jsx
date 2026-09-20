function StatsSection() {
  const stats = [
    {
      number: '10,000+',
      label: 'Properties Listed',
    },
    {
      number: '5,000+',
      label: 'Happy Clients',
    },
    {
      number: '50+',
      label: 'Locations Covered',
    },
    {
      number: '10+ Years',
      label: 'Real Estate Experience',
    },
  ]

 

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        pt-[120px]
        pb-[120px]
        sm:pt-[0px]
        sm:pb-[0px]
        lg:pt-[45px]
        lg:pb-[5px]
      "
    >
      {/* =====================================================
          MAIN CONTENT
          SAME 90% WIDTH SYSTEM
      ====================================================== */}

      <div
        className="
          ml-[5%]
          mr-[5%]
          w-[90%]
        "
      >
        {/* =====================================================
            CENTER HEADING
        ====================================================== */}

        <div
          className="
            flex
            w-full
            justify-center
            text-center
          "
        >
          <h2
            className="
              max-w-[650px]
              text-[36px]
              font-medium
              leading-[1.12]
              tracking-[-1.5px]
              text-[#090b0f]
              sm:text-[43px]
              md:text-[47px]
              lg:text-[50px]
            "
          >
            Helping People Find Their
            <br />
            Perfect Place
          </h2>
        </div>

        {/* =====================================================
            STATS ROW
        ====================================================== */}

        <div
          className="
            mt-[75px]
            grid
            w-full
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="
                relative
                px-0
                pb-[35px]
                pt-0
                sm:px-[28px]
                sm:pb-[40px]
                lg:px-[26px]
                lg:pb-[45px]
              "
            >
              {/* =================================================
                  STAT NUMBER
              ================================================== */}

              <h3
                className="
                  whitespace-nowrap
                  text-[40px]
                  font-medium
                  leading-none
                  tracking-[-1.8px]
                  text-[#090b0f]
                  sm:text-[43px]
                  md:text-[46px]
                  lg:text-[48px]
                "
              >
                {stat.number}
              </h3>

              {/* =================================================
                  STAT LABEL
              ================================================== */}

              <p
                className="
                  mt-[22px]
                  text-[13px]
                  font-normal
                  leading-none
                  tracking-[-0.15px]
                  text-[#303030]
                  sm:text-[14px]
                  lg:text-[17px]
                "
              >
                {stat.label}
              </p>

              {/* =================================================
                  UNDERLINE
              ================================================== */}

              <div
                className="
                  mt-[18px]
                  h-[3px]
                  w-[188px]
                  max-w-full
                  bg-[#15171a]
                  sm:mt-[20px]
                  sm:w-[190px]
                  lg:w-[188px]
                "
              />

              {/* =================================================
                  SMALL NUMBER
              ================================================== */}

              <span
                className="
                  absolute
                  bottom-[38px]
                  right-0
                  text-[8px]
                  font-normal
                  text-[#8b8b8b]
                  sm:bottom-[42px]
                  sm:right-[28px]
                  lg:bottom-[47px]
                  lg:right-[26px]
                "
              >
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection