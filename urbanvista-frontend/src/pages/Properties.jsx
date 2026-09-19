import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Properties() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.replace("/");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-500">
              UrbanVista
            </p>

            <h1 className="text-3xl font-bold text-[#061632] sm:text-4xl">
              Welcome, {user?.name || "User"}
            </h1>

            <p className="mt-2 text-gray-600">
              Your account details
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleHome}
              className="
                rounded-[10px]
                bg-[#061632]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:scale-105
                hover:bg-[#0b2847]
                active:scale-95
              "
            >
              Home
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="
                rounded-[10px]
                bg-[#061632]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:scale-105
                hover:bg-[#0b2847]
                active:scale-95
              "
            >
              Logout
            </button>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#061632]">
              User Details
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your authenticated account information
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-[14px] bg-[#f7f8fa] p-5">
              <p className="mb-2 text-sm font-medium text-gray-500">
                Full Name
              </p>

              <p className="text-lg font-semibold text-[#061632]">
                {user?.name || "Not available"}
              </p>
            </div>

            <div className="rounded-[14px] bg-[#f7f8fa] p-5">
              <p className="mb-2 text-sm font-medium text-gray-500">
                Email Address
              </p>

              <p className="break-all text-lg font-semibold text-[#061632]">
                {user?.email || "Not available"}
              </p>
            </div>

            <div className="rounded-[14px] bg-[#f7f8fa] p-5">
              <p className="mb-2 text-sm font-medium text-gray-500">
                Authentication Status
              </p>

              <p className="text-lg font-semibold text-green-600">
                Authenticated
              </p>
            </div>

            <div className="rounded-[14px] bg-[#f7f8fa] p-5">
              <p className="mb-2 text-sm font-medium text-gray-500">
                Account
              </p>

              <p className="text-lg font-semibold text-[#061632]">
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Properties;