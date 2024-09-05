import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg"

import {Helmet} from "react-helmet"
const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const header = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Service",
      link: "services",
    },
    {
      title: "Partners",
      link: "partners",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <>
       <Helmet>
     <title>
        TenderTrack
     </title>
     <meta name='description' content='This is the electric charging site'/>
     </Helmet> 
      <header
        className={`self-stretch box-border bg-white border-gray flex flex-row items-center justify-between py-5  top-0 z-50 sticky gap-5 max-w-full border-b border-solid backdrop-blur-lg`}
      >
      <div className="px-8">
          <div
          className="flex items-center gap-5"
          onClick={() => setDropdownOpen(false)}
        >
          <button
            className="lg:hidden p-2 bg-light-gray/30 hover:bg-light-gray/50 rounded-md"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <RxCross2 size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
          <Link>
            <img
              className="relative object-cover z-1"
              loading="lazy"
              alt="Logo"
              src={logo}
            />
          </Link>
          <nav
            onClick={() => setDropdownOpen(false)}
            className="flex-col items-start transition-all justify-start py-2 pb- pl-6 box-border max-w-full hidden lg:flex">
            <div className="m-0 flex flex-row text-[#64748B]items-start w-fit justify-start gap-12 max-xl:gap-8 max-w-full text-left text-md">
              {header.map(({ title, link }) => (
                <Link
                  key={link}
                  to={link}
                  className={`font-regular transition-all  hover:text-primary ${
                   `${link}`
                      ? "text-text-[#64748B] hover:text-primary !font-regular"
                      : " font-extrabold"
                  }`}
                >
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
       
       

        {/* <div className="flex flex-col w-fit items-end justify-start px-0 pb-0 relative">
          <div className="flex flex-row items-end justify-start gap-6">
            <div className="flex flex-col items-start justify-end">
              <Link
                onClick={() => setDropdownOpen(false)}
                href={`/doctor/notifications`}
                className={`w-11 rounded-xl bg-light-gray transition-all flex items-center justify-center p-2 box-border z-1 ${
                  `/doctor/notifications`
                    ? "!bg-dark-blue"
                    : ""
                }`}
              >
                <p
                  className=" text-white relative overflow-hidden"   
                >English</p>
              </Link>
            </div>

            <div
              className={`relative flex flex-row items-center p-1 justify-center gap-4 cursor-pointer ${
                dropdownOpen && "bg-light-gray/30 rounded-xl"
              }`}
              onClick={toggleDropdown}
            >
             
              {dropdownOpen && (
                <div className="absolute top-14 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                  <Link
                    onClick={toggleDropdown}
                    href={`/${path}/doctor/profile`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-t-lg"
                  >
                    {t("Profile")}
                  </Link>
                  <Link
                    href={`/${path}/doctor/setting`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    {t("Setting")}
                  </Link>
                  <div
                   
                    className="block transition-all hover:text-white px-4 py-2 text-gray-800 hover:bg-red-500 rounded-b-lg"
                  >
                    {t("signout")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div> */}
      </header>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <div className="relative w-64 bg-white h-full shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <button onClick={toggleSidebar}>
                <RxCross2 className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col P-4">
              {header.map(({ title, link }) => (
                <Link
                  key={link}
                  href={`${link}`}
                  className={`py-2 px-4 rounded-lg font-medium transition-all text-dark-gray hover:text-dark-gray/80 ${
                   `${link}`
                      ? "text-black bg-gray-200"
                      : ""
                  }`}
                  onClick={toggleSidebar}
                >
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;




