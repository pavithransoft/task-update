// import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Header = () => {
//   const menus = ["Features", "Marketplace", "Company", "Team", "Contact"];
//   return (
//     <header className="fixed top-0 w-full bg-white text-lightBlack px-16 py-6 z-40 border-b grid grid-cols-3">
//       <div className="flex items-center">
//         <h1 className="text-2xl font-bold text-fuchsia-700 pr-3">ShopDigest</h1>
//         <span className="flex items-center gap-1 font-medium">
//           <h2 className="h-fit pl-3 border-l">Shopify</h2>
//           <IoMdArrowDropdown className="h-5 w-5" />
//         </span>
//       </div>

//       <div className="flex items-center gap-6 justify-center font-medium">
//         {menus.map((menu, index) => (
//           <span key={index} className="flex items-center gap-1">
//             {menu}
//             <IoIosArrowDown className="h-4 w-4" />
//           </span>
//         ))}
//       </div>
//       <div className="flex justify-end items-center gap-5 text-sm font-medium">
//         <button className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700">
//           Login
//         </button>
//         <button className="px-4 py-2 border-2 rounded-lg bg-fuchsia-700 border-fuchsia-700 text-white flex items-center gap-3">
//           Add post <FaArrowRightLong />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import {
//   IoMdArrowDropup,
//   IoMdArrowDropdown,
//   IoIosMenu,
//   IoMdClose,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useState, useEffect, useRef } from "react";

// const Header = () => {
//   const menus = ["Features", "Marketplace", "Company", "Team", "Contact"];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isHover, setIsHover] = useState(false);
//   const dropdownRef = useRef(null);

//   // Effect to handle body scroll lock
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset"; // Clean up when component unmounts or menu closes
//     };
//   }, [isMenuOpen]);

//   // Effect to handle click outside of dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="fixed top-0 w-full bg-white text-lightBlack px-6 py-4 z-40 border-b flex items-center justify-between lg:px-16">
//       <div className="flex items-center justify-between w-full lg:w-auto">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold text-fuchsia-700 pr-3">
//             ShopDigest
//           </h1>
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="flex items-center font-medium hidden sm:flex gap-1"
//             >
//               <h2 className="h-fit pl-3 border-l">Shopify</h2>
//               {isDropdownOpen ? (
//                 <IoMdArrowDropup className="h-6 w-6 text-gray-700" />
//               ) : (
//                 <IoMdArrowDropdown className="h-6 w-6 text-gray-700" />
//               )}
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-40">
//                 <ul className="flex flex-col">
//                   <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
//                     Subitem 1
//                   </li>
//                   <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
//                     Subitem 2
//                   </li>
//                   <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
//                     Subitem 3
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <button
//           className="lg:hidden p-2 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <IoMdClose className="h-6 w-6" />
//           ) : (
//             <IoIosMenu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Side Menu */}
//       <div
//         className={`fixed inset-y-0 right-0 bg-white z-30 w-full md:w-1/2 transform border-l ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out lg:hidden`}
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-fuchsia-700">ShopDigest</h1>
//             <button
//               className="p-2 focus:outline-none"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <IoMdClose className="h-6 w-6" />
//             </button>
//           </div>
//           <nav className="flex flex-col gap-6 px-3">
//             {menus.map((menu, index) => (
//               <span
//                 key={index}
//                 className="flex justify-between items-center font-medium py-3 px-4 rounded-lg border-b hover:bg-gray-200 hover:shadow-md transition-all duration-300 select-none"
//               >
//                 {menu}
//               </span>
//             ))}
//             <div className="mt-8 flex flex-col gap-3">
//               <button className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300">
//                 Login
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden lg:flex items-center gap-6 justify-center font-medium">
//         {menus.map((menu, index) => (
//           <span
//             key={index}
//             className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 select-none relative group"
//             onMouseEnter={() => index === 2 && setIsHover(true)}
//             onMouseLeave={() => index === 2 && setIsHover(false)}
//           >
//             {menu}
//             {index === 2 &&
//               isHover && ( // Example condition for dropdown (change as needed)
//                 <IoIosArrowDown className="h-5 w-5" />
//               )}
//           </span>
//         ))}
//       </div>
//       <div className="hidden lg:flex justify-end items-center gap-5 text-sm font-medium">
//         <button className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300">
//           Login
//         </button>
//         <button className="px-4 py-2 border-2 rounded-lg bg-fuchsia-700 border-fuchsia-700 text-white flex items-center gap-3 hover:bg-fuchsia-800 hover:shadow-lg transition-all duration-300">
//           Add post <FaArrowRightLong />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import {
//   IoMdArrowDropup,
//   IoMdArrowDropdown,
//   IoIosMenu,
//   IoMdClose,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useState, useEffect, useRef } from "react";

// const Header = () => {
//   const menus = ["Features", "Marketplace", "Company", "Team", "Contact"];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isHover, setIsHover] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
//   const dropdownRef = useRef(null);

//   // Effect to handle body scroll lock
//   useEffect(() => {
//     if (isMenuOpen || isPopupOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset"; // Clean up when component unmounts or menu closes
//     };
//   }, [isMenuOpen, isPopupOpen]);

//   // Effect to handle click outside of dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <header className="fixed top-0 w-full bg-white text-lightBlack px-6 py-4 z-40 border-b flex items-center justify-between lg:px-16">
//         <div className="flex items-center justify-between w-full lg:w-auto">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold text-fuchsia-700 pr-3">
//               ShopDigest
//             </h1>
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center font-medium hidden sm:flex gap-1"
//               >
//                 <h2 className="h-fit pl-3 border-l">Shopify</h2>
//                 {isDropdownOpen ? (
//                   <IoMdArrowDropup className="h-6 w-6 text-gray-700" />
//                 ) : (
//                   <IoMdArrowDropdown className="h-6 w-6 text-gray-700" />
//                 )}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-40">
//                   <ul className="flex flex-col">
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
//                       Subitem 1
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
//                       Subitem 2
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
//                       Subitem 3
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             className="lg:hidden p-2 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <IoMdClose className="h-6 w-6" />
//             ) : (
//               <IoIosMenu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Side Menu */}
//         <div
//           className={`fixed inset-y-0 right-0 bg-white z-30 w-full md:w-1/2 transform border-l ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 ease-in-out lg:hidden`}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-bold text-fuchsia-700">
//                 ShopDigest
//               </h1>
//               <button
//                 className="p-2 focus:outline-none"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <IoMdClose className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex flex-col gap-6 px-3">
//               {menus.map((menu, index) => (
//                 <span
//                   key={index}
//                   className="flex justify-between items-center font-medium py-3 px-4 rounded-lg border-b hover:bg-gray-200 hover:shadow-md transition-all duration-300 select-none"
//                 >
//                   {menu}
//                 </span>
//               ))}
//               <div className="mt-8 flex flex-col gap-3">
//                 <button
//                   className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300"
//                   onClick={() => {
//                     setIsPopupOpen(true);
//                     setIsLogin(true); // Show login form by default
//                   }}
//                 >
//                   Login
//                 </button>
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-6 justify-center font-medium">
//           {menus.map((menu, index) => (
//             <span
//               key={index}
//               className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 select-none relative group"
//               onMouseEnter={() => index === 2 && setIsHover(true)}
//               onMouseLeave={() => index === 2 && setIsHover(false)}
//             >
//               {menu}
//               {index === 2 &&
//                 isHover && ( // Example condition for dropdown (change as needed)
//                   <IoIosArrowDown className="h-5 w-5" />
//                 )}
//             </span>
//           ))}
//         </div>
//         <div className="hidden lg:flex justify-end items-center gap-5 text-sm font-medium">
//           <button
//             className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300"
//             onClick={() => {
//               setIsPopupOpen(true);
//               setIsLogin(true); // Show login form by default
//             }}
//           >
//             Login
//           </button>
//           <button className="px-4 py-2 border-2 rounded-lg bg-fuchsia-700 border-fuchsia-700 text-white flex items-center gap-3 hover:bg-fuchsia-800 hover:shadow-lg transition-all duration-300">
//             Add post <FaArrowRightLong />
//           </button>
//         </div>
//       </header>

//       {/* Login/Register Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             <h2 className="text-xl font-bold mb-4">
//               {isLogin ? "Login" : "Register"}
//             </h2>
//             {isLogin ? (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300"
//                 >
//                   Login
//                 </button>
//               </form>
//             ) : (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 border rounded-lg"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300"
//                 >
//                   Register
//                 </button>
//               </form>
//             )}
//             <button
//               className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
//               onClick={() => setIsPopupOpen(false)}
//             >
//               <IoMdClose className="h-6 w-6" />
//             </button>
//             <div className="mt-4 text-center">
//               <p
//                 className="text-sm text-gray-600 cursor-pointer"
//                 onClick={() => setIsLogin(!isLogin)}
//               >
//                 {isLogin
//                   ? "Don't have an account? Register"
//                   : "Already have an account? Login"}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// import {
//   IoMdArrowDropup,
//   IoMdArrowDropdown,
//   IoIosMenu,
//   IoMdClose,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useState, useEffect, useRef } from "react";

// const Header = () => {
//   const menus = ["Features", "Marketplace", "Company", "Team", "Contact"];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isHover, setIsHover] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
//   const dropdownRef = useRef(null);

//   // Effect to handle body scroll lock
//   useEffect(() => {
//     if (isMenuOpen || isPopupOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset"; // Clean up when component unmounts or menu closes
//     };
//   }, [isMenuOpen, isPopupOpen]);

//   // Effect to handle click outside of dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <header className="fixed top-0 w-full bg-white text-lightBlack px-6 py-4 z-40 border-b flex items-center justify-between lg:px-16">
//         <div className="flex items-center justify-between w-full lg:w-auto">
//           <div className="flex items-center">
//             <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700 pr-3">
//               ShopDigest
//             </h1>
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center font-medium hidden sm:flex gap-1 text-sm sm:text-base"
//               >
//                 <h2 className="h-fit pl-3 border-l">Shopify</h2>
//                 {isDropdownOpen ? (
//                   <IoMdArrowDropup className="h-5 w-5 text-gray-700" />
//                 ) : (
//                   <IoMdArrowDropdown className="h-5 w-5 text-gray-700" />
//                 )}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-40">
//                   <ul className="flex flex-col">
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 1
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 2
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 3
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             className="lg:hidden p-2 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <IoMdClose className="h-6 w-6" />
//             ) : (
//               <IoIosMenu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Side Menu */}
//         <div
//           className={`fixed inset-y-0 right-0 bg-white z-30 w-full md:w-1/2 transform border-l ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 ease-in-out lg:hidden`}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700">
//                 ShopDigest
//               </h1>
//               <button
//                 className="p-2 focus:outline-none"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <IoMdClose className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex flex-col gap-6 px-3">
//               {menus.map((menu, index) => (
//                 <span
//                   key={index}
//                   className="flex justify-between items-center font-medium py-3 px-4 rounded-lg border-b hover:bg-gray-200 hover:shadow-md transition-all duration-300 select-none text-sm sm:text-base"
//                 >
//                   {menu}
//                 </span>
//               ))}
//               <div className="mt-8 flex flex-col gap-3">
//                 <button
//                   className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                   onClick={() => {
//                     setIsPopupOpen(true);
//                     setIsLogin(true); // Show login form by default
//                   }}
//                 >
//                   Login
//                 </button>
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-6 justify-center font-medium">
//           {menus.map((menu, index) => (
//             <span
//               key={index}
//               className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 select-none relative group text-sm sm:text-base"
//               onMouseEnter={() => index === 2 && setIsHover(true)}
//               onMouseLeave={() => index === 2 && setIsHover(false)}
//             >
//               {menu}
//               {index === 2 &&
//                 isHover && ( // Example condition for dropdown (change as needed)
//                   <IoIosArrowDown className="h-5 w-5" />
//                 )}
//             </span>
//           ))}
//         </div>
//         <div className="hidden lg:flex justify-end items-center gap-5 text-sm font-medium">
//           <button
//             className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300"
//             onClick={() => {
//               setIsPopupOpen(true);
//               setIsLogin(true); // Show login form by default
//             }}
//           >
//             Login
//           </button>
//           <button className="px-4 py-2 border-2 rounded-lg bg-fuchsia-700 border-fuchsia-700 text-white flex items-center gap-3 hover:bg-fuchsia-800 hover:shadow-lg transition-all duration-300">
//             Add post <FaArrowRightLong />
//           </button>
//         </div>
//       </header>

//       {/* Login/Register Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             <h2 className="text-xl font-bold mb-4">
//               {isLogin ? "Login" : "Register"}
//             </h2>
//             {isLogin ? (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                 >
//                   Login
//                 </button>
//               </form>
//             ) : (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                 >
//                   Register
//                 </button>
//               </form>
//             )}
//             <button
//               className="absolute top-2 right-2 p-2"
//               onClick={() => setIsPopupOpen(false)}
//             >
//               <IoMdClose className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// import {
//   IoMdArrowDropup,
//   IoMdArrowDropdown,
//   IoIosMenu,
//   IoMdClose,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useState, useEffect, useRef } from "react";

// const Header = () => {
//   const menus = ["Features", "Marketplace", "Company", "Team", "Contact"];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isHover, setIsHover] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
//   const dropdownRef = useRef(null);

//   // Effect to handle body scroll lock
//   useEffect(() => {
//     if (isMenuOpen || isPopupOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset"; // Clean up when component unmounts or menu closes
//     };
//   }, [isMenuOpen, isPopupOpen]);

//   // Effect to handle click outside of dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <header className="fixed top-0 w-full bg-white text-lightBlack px-6 py-4 z-40 border-b flex items-center justify-between lg:px-16">
//         <div className="flex items-center justify-between w-full lg:w-auto">
//           <div className="flex items-center">
//             <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700 pr-3">
//               ShopDigest
//             </h1>
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center font-medium hidden sm:flex gap-1 text-sm sm:text-base"
//               >
//                 <h2 className="h-fit pl-3 border-l">Shopify</h2>
//                 {isDropdownOpen ? (
//                   <IoMdArrowDropup className="h-5 w-5 text-gray-700" />
//                 ) : (
//                   <IoMdArrowDropdown className="h-5 w-5 text-gray-700" />
//                 )}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-40">
//                   <ul className="flex flex-col">
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 1
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 2
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 3
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             className="lg:hidden p-2 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <IoMdClose className="h-6 w-6" />
//             ) : (
//               <IoIosMenu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Side Menu */}
//         <div
//           className={`fixed inset-y-0 right-0 bg-white z-30 w-full md:w-1/2 transform border-l ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 ease-in-out lg:hidden`}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700">
//                 ShopDigest
//               </h1>
//               <button
//                 className="p-2 focus:outline-none"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <IoMdClose className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex flex-col gap-6 px-3">
//               {menus.map((menu, index) => (
//                 <span
//                   key={index}
//                   className="flex justify-between items-center font-medium py-3 px-4 rounded-lg border-b hover:bg-gray-200 hover:shadow-md transition-all duration-300 select-none text-sm sm:text-base"
//                 >
//                   {menu}
//                 </span>
//               ))}
//               <div className="mt-8 flex flex-col gap-3">
//                 <button
//                   className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                   onClick={() => {
//                     setIsPopupOpen(true);
//                     setIsLogin(true); // Show login form by default
//                   }}
//                 >
//                   Login
//                 </button>
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-6 justify-center font-medium">
//           {menus.map((menu, index) => (
//             <span
//               key={index}
//               className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 select-none relative group text-sm sm:text-base"
//               onMouseEnter={() => index === 2 && setIsHover(true)}
//               onMouseLeave={() => index === 2 && setIsHover(false)}
//             >
//               {menu}
//               {index === 2 &&
//                 isHover && ( // Example condition for dropdown (change as needed)
//                   <IoIosArrowDown className="h-5 w-5" />
//                 )}
//             </span>
//           ))}
//         </div>
//         <div className="hidden lg:flex justify-end items-center gap-5 text-sm font-medium">
//           <button
//             className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300"
//             onClick={() => {
//               setIsPopupOpen(true);
//               setIsLogin(true); // Show login form by default
//             }}
//           >
//             Login
//           </button>
//           <button className="px-4 py-2 border-2 rounded-lg bg-fuchsia-700 border-fuchsia-700 text-white flex items-center gap-3 hover:bg-fuchsia-800 hover:shadow-lg transition-all duration-300">
//             Add post <FaArrowRightLong />
//           </button>
//         </div>
//       </header>

//       {/* Login/Register Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             <h2 className="text-xl font-bold mb-4">
//               {isLogin ? "Login" : "Register"}
//             </h2>
//             {isLogin ? (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                 >
//                   Login
//                 </button>
//                 <p className="text-sm mt-4">
//                   Don't have an account?{" "}
//                   <button
//                     type="button"
//                     className="text-fuchsia-700 hover:underline"
//                     onClick={() => setIsLogin(false)}
//                   >
//                     Register
//                   </button>
//                 </p>
//               </form>
//             ) : (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                 >
//                   Register
//                 </button>
//                 <p className="text-sm mt-4">
//                   Already have an account?{" "}
//                   <button
//                     type="button"
//                     className="text-fuchsia-700 hover:underline"
//                     onClick={() => setIsLogin(true)}
//                   >
//                     Login
//                   </button>
//                 </p>
//               </form>
//             )}
//             <button
//               className="absolute top-2 right-2 p-2"
//               onClick={() => setIsPopupOpen(false)}
//             >
//               <IoMdClose className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// import {
//   IoMdArrowDropup,
//   IoMdArrowDropdown,
//   IoIosMenu,
//   IoMdClose,
//   IoIosArrowDown,
// } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useState, useEffect, useRef } from "react";

// const Header = () => {
//   const menus = ["Features", "Marketplace", "Company", "Team", "Contact"];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isHover, setIsHover] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
//   const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgot password form
//   const dropdownRef = useRef(null);

//   // Effect to handle body scroll lock
//   useEffect(() => {
//     if (isMenuOpen || isPopupOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset"; // Clean up when component unmounts or menu closes
//     };
//   }, [isMenuOpen, isPopupOpen]);

//   // Effect to handle click outside of dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <header className="fixed top-0 w-full bg-white text-lightBlack px-6 py-4 z-40 border-b flex items-center justify-between lg:px-16">
//         <div className="flex items-center justify-between w-full lg:w-auto">
//           <div className="flex items-center">
//             <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700 pr-3">
//               ShopDigest
//             </h1>
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center font-medium hidden sm:flex gap-1 text-sm sm:text-base"
//               >
//                 <h2 className="h-fit pl-3 border-l">Shopify</h2>
//                 {isDropdownOpen ? (
//                   <IoMdArrowDropup className="h-5 w-5 text-gray-700" />
//                 ) : (
//                   <IoMdArrowDropdown className="h-5 w-5 text-gray-700" />
//                 )}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-40">
//                   <ul className="flex flex-col">
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 1
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 2
//                     </li>
//                     <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
//                       Subitem 3
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             className="lg:hidden p-2 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <IoMdClose className="h-6 w-6" />
//             ) : (
//               <IoIosMenu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Side Menu */}
//         <div
//           className={`fixed inset-y-0 right-0 bg-white z-30 w-full md:w-1/2 transform border-l ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 ease-in-out lg:hidden`}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700">
//                 ShopDigest
//               </h1>
//               <button
//                 className="p-2 focus:outline-none"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <IoMdClose className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex flex-col gap-6 px-3">
//               {menus.map((menu, index) => (
//                 <span
//                   key={index}
//                   className="flex justify-between items-center font-medium py-3 px-4 rounded-lg border-b hover:bg-gray-200 hover:shadow-md transition-all duration-300 select-none text-sm sm:text-base"
//                 >
//                   {menu}
//                 </span>
//               ))}
//               <div className="mt-8 flex flex-col gap-3">
//                 <button
//                   className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                   onClick={() => {
//                     setIsPopupOpen(true);
//                     setIsLogin(true); // Show login form by default
//                   }}
//                 >
//                   Login
//                 </button>
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-6 justify-center font-medium">
//           {menus.map((menu, index) => (
//             <span
//               key={index}
//               className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 select-none relative group text-sm sm:text-base"
//               onMouseEnter={() => index === 2 && setIsHover(true)}
//               onMouseLeave={() => index === 2 && setIsHover(false)}
//             >
//               {menu}
//               {index === 2 &&
//                 isHover && ( // Example condition for dropdown (change as needed)
//                   <IoIosArrowDown className="h-5 w-5" />
//                 )}
//             </span>
//           ))}
//         </div>
//         <div className="hidden lg:flex justify-end items-center gap-5 text-sm font-medium">
//           <button
//             className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300"
//             onClick={() => {
//               setIsPopupOpen(true);
//               setIsLogin(true); // Show login form by default
//             }}
//           >
//             Login
//           </button>
//           <button className="px-4 py-2 border-2 rounded-lg bg-fuchsia-700 border-fuchsia-700 text-white flex items-center gap-3 hover:bg-fuchsia-800 hover:shadow-lg transition-all duration-300">
//             Add post <FaArrowRightLong />
//           </button>
//         </div>
//       </header>

//       {/* Login/Register/Forgot Password Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             <h2 className="text-xl font-bold mb-4">
//               {isForgotPassword
//                 ? "Forgot Password"
//                 : isLogin
//                 ? "Login"
//                 : "Register"}
//             </h2>
//             {isForgotPassword ? (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                 >
//                   Reset Password
//                 </button>
//                 <p className="text-sm mt-4">
//                   Remember your password?{" "}
//                   <button
//                     type="button"
//                     className="text-fuchsia-700 hover:underline"
//                     onClick={() => {
//                       setIsForgotPassword(false);
//                       setIsLogin(true);
//                     }}
//                   >
//                     Login
//                   </button>
//                 </p>
//               </form>
//             ) : isLogin ? (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                 >
//                   Login
//                 </button>
//                 <p className="text-sm mt-4">
//                   Don't have an account?{" "}
//                   <button
//                     type="button"
//                     className="text-fuchsia-700 hover:underline"
//                     onClick={() => {
//                       setIsLogin(false);
//                       setIsForgotPassword(false);
//                     }}
//                   >
//                     Register
//                   </button>
//                 </p>
//                 <p className="text-sm mt-4">
//                   <button
//                     type="button"
//                     className="text-fuchsia-700 hover:underline"
//                     onClick={() => setIsForgotPassword(true)}
//                   >
//                     Forgot Password?
//                   </button>
//                 </p>
//               </form>
//             ) : (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm sm:text-base font-medium mb-2"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
//                     placeholder="Enter your password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
//                 >
//                   Register
//                 </button>
//                 <p className="text-sm mt-4">
//                   Already have an account?{" "}
//                   <button
//                     type="button"
//                     className="text-fuchsia-700 hover:underline"
//                     onClick={() => {
//                       setIsLogin(true);
//                       setIsForgotPassword(false);
//                     }}
//                   >
//                     Login
//                   </button>
//                 </p>
//               </form>
//             )}
//             <button
//               className="absolute top-2 right-2 p-2"
//               onClick={() => setIsPopupOpen(false)}
//             >
//               <IoMdClose className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

import {
  IoMdArrowDropup,
  IoMdArrowDropdown,
  IoIosMenu,
  IoMdClose,
  IoIosArrowDown,
} from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const menus = ["Features", "Marketplace", "Company", "Team", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgot password form
  const dropdownRef = useRef(null);

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isMenuOpen || isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset"; // Clean up when component unmounts or menu closes
    };
  }, [isMenuOpen, isPopupOpen]);

  // Effect to handle click outside of dropdown
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
    <>
      <header className="fixed top-0 w-full bg-white text-lightBlack px-6 py-4 z-40 border-b flex items-center justify-between lg:px-16">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fuchsia-700 pr-3">
              ShopDigest
            </h1>
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
          </div>

          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <IoIosMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Side Menu */}
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
                    setIsLogin(true); // Show login form by default
                  }}
                >
                  Login
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 justify-center font-medium">
          {menus.map((menu, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 select-none relative group text-sm md:text-base"
              onMouseEnter={() => index === 2 && setIsHover(true)}
              onMouseLeave={() => index === 2 && setIsHover(false)}
            >
              {menu}
              {index === 2 &&
                isHover && ( // Example condition for dropdown (change as needed)
                  <IoIosArrowDown className="h-5 w-5" />
                )}
            </span>
          ))}
        </div>
        <div className="hidden lg:flex justify-end items-center gap-5 text-sm md:text-base font-medium">
          <button
            className="px-4 py-2 border-2 rounded-lg border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-colors duration-300"
            onClick={() => {
              setIsPopupOpen(true);
              setIsLogin(true); // Show login form by default
            }}
          >
            Login
          </button>
          <button className="px-4 py-2 border-2 rounded-lg bg-fuchsia-700 border-fuchsia-700 text-white flex items-center gap-3 hover:bg-fuchsia-800 hover:shadow-lg transition-all duration-300">
            Add post <FaArrowRightLong />
          </button>
        </div>
      </header>

      {/* Login/Register/Forgot Password Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 px-2">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              {isForgotPassword
                ? "Forgot Password"
                : isLogin
                ? "Login"
                : "Register"}
            </h2>
            {isForgotPassword ? (
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm sm:text-base font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  Reset Password
                </button>
                <p className="text-sm sm:text-base mt-4">
                  Remember your password?{" "}
                  <button
                    type="button"
                    className="text-fuchsia-700 hover:underline"
                    onClick={() => {
                      setIsForgotPassword(false);
                      setIsLogin(true);
                    }}
                  >
                    Login
                  </button>
                </p>
              </form>
            ) : isLogin ? (
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm sm:text-base font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm sm:text-base font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  Login
                </button>
                <p className="text-sm sm:text-base mt-4">
                  {`Don't`} have an account?
                  <button
                    type="button"
                    className="text-fuchsia-700 hover:underline"
                    onClick={() => {
                      setIsLogin(false);
                      setIsForgotPassword(false);
                    }}
                  >
                    Register
                  </button>
                </p>
                <p className="text-sm sm:text-base mt-4">
                  <button
                    type="button"
                    className="text-fuchsia-700 hover:underline"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Forgot Password?
                  </button>
                </p>
              </form>
            ) : (
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm sm:text-base font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm sm:text-base font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  Register
                </button>
                <p className="text-sm sm:text-base mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-fuchsia-700 hover:underline"
                    onClick={() => {
                      setIsLogin(true);
                      setIsForgotPassword(false);
                    }}
                  >
                    Login
                  </button>
                </p>
              </form>
            )}
            <button
              className="absolute top-2 right-2 p-2"
              onClick={() => setIsPopupOpen(false)}
            >
              <IoMdClose className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
