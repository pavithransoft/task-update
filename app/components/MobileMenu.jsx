import { IoMdClose } from "react-icons/io";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  menus,
  setIsPopupOpen,
  setIsLogin,
}) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 bg-white z-30 w-full md:w-1/2 transform border-l ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700">
            ShopDigest
          </h1>
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-3">
          {menus.map((menu, index) => (
            <span
              key={index}
              className="flex justify-between items-center font-medium py-3 px-4 rounded-lg border-b hover:bg-gray-200 hover:shadow-md transition-all duration-300 select-none text-sm sm:text-base"
            >
              {menu}
            </span>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <button
              className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
              onClick={() => {
                setIsPopupOpen(true);
                setIsLogin(true);
              }}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
