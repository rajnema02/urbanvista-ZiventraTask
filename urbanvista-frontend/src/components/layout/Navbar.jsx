import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className="
        absolute
        left-1/2
        top-6
        z-50
        flex
        h-16
        w-[92%]
        max-w-[1360px]
        -translate-x-1/2
        items-center
        justify-between
        rounded-[16px]
        border-2
        border-white/40
        bg-white/15
        px-6
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300

        sm:top-7
        sm:h-16
        sm:w-[90%]
        sm:px-8

        lg:top-6
        lg:w-[88%]
      "
    >
      <button
        type="button"
        aria-label="Open menu"
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          bg-[#061632]
          text-white
          transition-all
          duration-200
          hover:scale-110
          hover:bg-[#0b2847]
          hover:shadow-lg
          active:scale-95

          sm:h-11
          sm:w-11

          lg:h-12
          lg:w-12
        "
      >
        <span className="flex w-5 flex-col gap-1.5">
          <span className="h-0.5 w-5 rounded-full bg-white transition-all" />
          <span className="h-0.5 w-4 rounded-full bg-white transition-all" />
          <span className="h-0.5 w-5 rounded-full bg-white transition-all" />
        </span>
      </button>

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          max-w-[40%]
          -translate-x-1/2
          truncate
          text-center
          font-black
          leading-none
          tracking-tighter
          text-[#050505]
          text-2xl
          drop-shadow-sm

          sm:max-w-none
          sm:text-3xl

          lg:text-4xl
        "
      >
        UrbanVista
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={handleContact}
          className="
            shrink-0
            whitespace-nowrap
            rounded-[10px]
            bg-[#061632]
            px-5
            py-2.5
            text-[11px]
            font-bold
            text-white
            transition-all
            duration-200
            hover:scale-105
            hover:bg-[#0b2847]
            hover:shadow-lg
            active:scale-95
            shadow-md

            sm:px-6
            sm:py-3
            sm:text-[12px]

            lg:px-7
            lg:py-3
            lg:text-[13px]
            lg:font-semibold
          "
        >
          Contact us
        </button>

        {!isAuthenticated ? (
          <button
            type="button"
            onClick={handleLogin}
            aria-label="Login"
            title="Login"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-[10px]
              bg-[#061632]
              text-white
              transition-all
              duration-200
              hover:scale-110
              hover:bg-[#0b2847]
              hover:shadow-lg
              active:scale-95

              sm:h-11
              sm:w-11

              lg:h-12
              lg:w-12
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </button>
        ) : (
          <>
            <div
              className="
                hidden
                max-w-[180px]
                truncate
                text-right
                text-sm
                font-semibold
                text-[#061632]

                sm:block
                lg:max-w-[240px]
                lg:text-base
              "
              title={`Welcome, ${user?.name || "User"}`}
            >
              Welcome, {user?.name || "User"}
            </div>

            <button
              type="button"
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-[10px]
                bg-[#061632]
                text-white
                transition-all
                duration-200
                hover:scale-110
                hover:bg-[#0b2847]
                hover:shadow-lg
                active:scale-95

                sm:h-11
                sm:w-11

                lg:h-12
                lg:w-12
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;