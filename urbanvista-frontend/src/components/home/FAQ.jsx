import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const questions = [
    {
      question: 'How do I start searching for a home?',
      answer:
        'You can browse available properties, apply filters, and explore listings based on your needs and location.',
    },
    {
      question: 'Can I filter homes by budget & location?',
      answer:
        'Yes. You can filter properties according to your preferred budget, location, property type, and other requirements.',
    },
    {
      question: 'Are the property details accurate?',
      answer:
        'We review the available property information to provide a reliable browsing experience. Property details can change, so important information should be confirmed before making a decision.',
    },
    {
      question: 'How do I contact a owner or agent?',
      answer:
        'You can use the contact option associated with a property to connect with the relevant owner or agent.',
    },
    {
      question: 'Can I explore rental and buying options',
      answer:
        'Yes. You can explore both properties available for purchase and properties available for rent.',
    },
    {
      question: 'Do I need an account to use platform',
      answer:
        'Some features may require an account. Creating an account also allows you to access features that require authentication.',
    },
    {
      question: 'How do I know if a property is available?',
      answer:
        'Property availability can change over time. Contact the owner or agent to confirm the current availability.',
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex((current) =>
      current === index ? -1 : index
    )
  }

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        py-[40px]
        sm:py-[60px]
        lg:py-[75px]
      "
    >
      {/* =====================================================
          CENTERED PAGE CONTAINER

          TARGET:
          LEFT SPACE  ≈ 7%
          RIGHT SPACE ≈ 7%

          This fixes the current 0px left alignment.
      ====================================================== */}

      <div
        className="
          mx-auto
          w-[90%]
          max-w-[1320px]
          sm:w-[88%]
          lg:w-[86%]
        "
      >
        {/* =====================================================
            FAQ TWO COLUMN LAYOUT
        ====================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-[50px]
            md:grid-cols-[0.72fr_1fr]
            md:items-start
            md:gap-[24px]
            lg:gap-[24px]
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              pt-[2px]
              md:pt-[0px]
            "
          >
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
                <span className="text-[24px]">FAQ</span>
              </p>
            </div>

            {/* =================================================
                HEADING

                Smaller than your current version,
                matching the reference screenshot.
            ================================================== */}

            <h2
              className="
                mt-[30px]
                max-w-[430px]
                text-[38px]
                font-semibold
                leading-[1.08]
                tracking-[-1.5px]
                text-[#05070b]
                sm:text-[42px]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              Things You
              <br />
              Should Know
            </h2>
          </div>

          {/* =================================================
              RIGHT FAQ CARDS
          ================================================== */}

          <div className="w-full">
            <div
              className="
                flex
                w-full
                flex-col
                gap-[10px]
              "
            >
              {questions.map((item, index) => {
                const isOpen = openIndex === index

                return (
                  <div
                    key={item.question}
                    className="
                      w-full
                      overflow-hidden
                      rounded-[15px]
                      bg-[#f4f4f4]
                      transition-colors
                      duration-200
                    "
                  >
                    {/* =========================================
                        QUESTION
                    ========================================== */}

                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        min-h-[70px]
                        w-full
                        items-center
                        justify-between
                        gap-[20px]
                        px-[20px]
                        py-[18px]
                        text-left
                        sm:min-h-[72px]
                        sm:px-[22px]
                        lg:min-h-[74px]
                        lg:px-[20px]
                      "
                    >
                      {/* QUESTION TEXT */}

                      <span
                        className="
                          text-[12px]
                          font-semibold
                          leading-[1.35]
                          tracking-[-0.1px]
                          text-[#111111]
                          sm:text-[13px]
                          lg:text-[14px]
                        "
                      >
                        {item.question}
                      </span>

                      {/* PLUS / MINUS */}

                      <span
                        className="
                          flex
                          h-[20px]
                          w-[20px]
                          shrink-0
                          items-center
                          justify-center
                          text-[18px]
                          font-normal
                          leading-none
                          text-[#111111]
                        "
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {/* =========================================
                        ANSWER
                    ========================================== */}

                    {isOpen && (
                      <div
                        className="
                          px-[20px]
                          pb-[22px]
                          sm:px-[22px]
                          sm:pb-[23px]
                          lg:px-[0px]
                          lg:pb-[0px]
                        "
                      >
                        <p
                          className="
                            max-w-[650px]
                            text-[10px]
                            font-normal
                            leading-[1.55]
                            tracking-[-0.05px]
                            text-[#617080]
                            sm:text-[11px]
                            lg:text-[12px]
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ