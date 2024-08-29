import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="items-center font-medium hidden sm:flex gap-1 text-sm md:text-base"
      >
        <h2 className="h-fit pl-3 border-l">Shopify</h2>
        {isDropdownOpen ? (
          <IoMdArrowDropup className="h-5 w-5 text-gray-700" />
        ) : (
          <IoMdArrowDropdown className="h-5 w-5 text-gray-700" />
        )}
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-40">
          <ul className="flex flex-col">
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
              Subitem 1
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
              Subitem 2
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
              Subitem 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
