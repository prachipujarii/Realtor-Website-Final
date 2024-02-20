import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [isOpen, setIsOpen ] = useState(false);
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route){
    if(route === location.pathname){
      return true
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
    <div>
        <img
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
          alt="logo"
          className="h-5 cursor-pointer"
          onClick={()=>navigate("/")}
        />
      </div>
      <div>
        <ul className="flex space-x-10">
          <li className="cursor-pointer py-3 px-4 font-semibold text-black bg-white hover:bg-red-700 hover:text-white" onClick={()=>navigate("/")}>Home</li>
          <li className="cursor-pointer py-3 px-4 font-semibold text-black bg-white hover:bg-red-700 hover:text-white" onClick={()=>navigate("/offers")}>Offers</li>
          <div className='relative'>
          <li className="cursor-pointer py-3 px-4 font-semibold text-black bg-white hover:bg-red-700 hover:text-white" onMouseEnter={toggleDropdown}
        onMouseLeave={closeDropdown}>Research
        {isOpen && (
        <ul className="cursor-pointer absolute left-0 mt-2 w-40 text-black bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 transition duration-300 ease-in-out" onClick={()=>navigate("/property-rates-in-mumbai")}>
            Property Rates in Mumbai
          </li>
          <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 transition duration-300 ease-in-out" onClick={()=>navigate("/property-news")}>
            Property News
          </li>
          <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 transition duration-300 ease-in-out" onClick={()=>navigate("/seller-guide")}>
            Seller's Guide
          </li>
          <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 transition duration-300 ease-in-out" onClick={()=>navigate("/buyer-guide")}>
            Buyer's Guide
          </li>
        </ul>
      )}
        </li>
        </div>
          <li className="cursor-pointer py-3 px-4 font-semibold text-black bg-white hover:bg-red-700 hover:text-white" onClick={()=>navigate("/about")}>About</li>
          <li className={`cursor-pointer py-3 text-sm font-semibold text-black-400 border-b-[3px] border-b-transparent ${ (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`} onClick={()=>navigate("/profile")}>{pageState}</li>
        </ul>
      </div>
    </header>
  </div>
  )
}
