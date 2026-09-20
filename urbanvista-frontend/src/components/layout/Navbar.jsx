import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  const handleLogin = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  const handleContact = () => {
    setMenuOpen(false);

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
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
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
          <span
            className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-4 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
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
        <div className="hidden items-center gap-2 sm:flex sm:gap-3">
          {isAuthenticated && (
            <div
              className="
                max-w-[180px]
                truncate
                text-right
                text-sm
                font-semibold
                text-[#061632]

                lg:max-w-[240px]
                lg:text-base
              "
              title={`Welcome, ${user?.name || "User"}`}
            >
              Welcome, {user?.name || "User"}
            </div>
          )}

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
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              >
                <path d="M13 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
                <path d="M3 12h11" />
                <path d="m10 8 4 4-4 4" />
              </svg>
            </button>
          ) : (
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
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              >
                <path d="M11 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6" />
                <path d="M21 12H10" />
                <path d="m17 8 4 4-4 4" />
              </svg>
            </button>
          )}
        </div>

        <div className="sm:hidden">
          <button
            type="button"
            onClick={handleContact}
            className="
              shrink-0
              whitespace-nowrap
              rounded-[10px]
              bg-[#061632]
              px-4
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
            "
          >
            Contact us
          </button>
        </div>
      </div>

      <div
        className={`
          absolute
          left-0
          top-[calc(100%+10px)]
          w-full
          rounded-[16px]
          border-2
          border-white/40
          bg-white/90
          p-3
          shadow-xl
          backdrop-blur-xl
          transition-all
          duration-300
          sm:hidden
          ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        {isAuthenticated && (
          <div
            className="
              mb-2
              flex
              items-center
              justify-between
              rounded-[12px]
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              text-[#061632]
              shadow-sm
            "
          >
            <span className="truncate">
              Welcome, {user?.name || "User"}
            </span>

            <button
              type="button"
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
              className="
                ml-3
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-[9px]
                bg-[#061632]
                text-white
                transition-all
                duration-200
                hover:scale-105
                hover:bg-[#0b2847]
                active:scale-95
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M11 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6" />
                <path d="M21 12H10" />
                <path d="m17 8 4 4-4 4" />
              </svg>
            </button>
          </div>
        )}

        {!isAuthenticated && (
          <button
            type="button"
            onClick={handleLogin}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-[12px]
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              text-[#061632]
              shadow-sm
              transition-all
              duration-200
              hover:bg-gray-50
              active:scale-[0.98]
            "
          >
            <span>Login</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M13 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
              <path d="M3 12h11" />
              <path d="m10 8 4 4-4 4" />
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;