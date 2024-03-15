import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from "./sidebarData";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import logoSrc from '../../assets/WHITE.png';


const Sidebar = ({ showSideBar }) => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    if (link.subLinks) {
      setSelectedLink(selectedLink === link.key ? null : link.key);
    } else {
      setSelectedLink(null);
      navigate(link.path);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('Login');
    localStorage.removeItem('LoginToken');
    navigate('/');
  };

  return (
    // <div className={`flex flex-col bg-[#f9fafb] ${showSideBar ? '' : 'hidden'}`}>
     <div
      className={`absolute z-50 top-0 left-0 flex flex-col bg-[#343474] ${showSideBar ? '' : 'hidden'}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`${
          open ? "w-72" : "w-24 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300 shadow-md flex flex-col`}
      >
        {/* <div
          className={`cursor-pointer p-2 border-dark-purple w-10 ml-[13rem] mt-[-24px]
            border-2 rounded-lg  ${!open && "rotate-180 hbarmargin mb-3"}`}
          onClick={() => setOpen(!open)}
        >
          <AiOutlineMenu size={20} />
        </div> */}
        <div className="flex gap-x-4 items-center">
          <img
            src={logoSrc}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="Logo"
            width="230px"
          />
        </div>

        <hr className="border-t my-4 border-slate-200" />
        <ul className="pt-2 flex-1 overflow-y-auto custom-scrollbar">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <React.Fragment key={link.key}>
              <li
                className={`mb-2 text-white capitalize font-medium flex rounded-md p-2 cursor-pointer hover:bg-light-white text-base items-center gap-x-4 ${
                  pathname === link.path ? 'textblue font-semibold bg-slate-100 bg-opacity-8 hover:bg-opacity-16' : 'hover:bg-slate-400'
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link.icon && React.cloneElement(link.icon, { size: 26 })}
                <div
                  className={`origin-left duration-200 flex items-center justify-between w-[10rem] ${
                    !open && "hidden"
                  } ${link.key === 'question' && link.subLinks && (selectedLink === link.key || link.key === selectedLink) ? " bg-opacity-8 hover:bg-opacity-16" : ""}`}
                >
                  {link.label}
                  {link.subLinks && (
                    <div>{selectedLink === link.key ? <FaAngleDoubleUp size={20} /> : <FaAngleDoubleDown size={20} />}</div>
                  )}
                </div>
              </li>
              {link.key === selectedLink && link.subLinks && (
                <li className="flex flex-col pl-4">
                  <ul>
                    {link.subLinks.map((subLink) => (
                      <li
                        key={subLink.key}
                        className={`mb-2 text-white capitalize font-medium flex rounded-md p-1 cursor-pointer hover:bg-light-white text-base items-center gap-x-4 
                        ${pathname === subLink.path ? 'textblue font-semibold bg-slate-100 bg-opacity-8 hover:bg-opacity-16' : 'hover:bg-slate-400'
                        }`}
                        onClick={() => {
                          // setSelectedLink(null);  
                          navigate(subLink.path);
                        }}
                      >
                        {subLink.icon && React.cloneElement(subLink.icon, { size: 24 })}
                        <span className={`${!open && "hidden"} origin-left duration-200`}>{subLink.label}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        <hr className="border-t my-2 border-slate-200" />

        <li
          className={`mt-auto mb-2 capitalize text-white font-medium flex rounded-md p-2 cursor-pointer hover:bg-light-white text-base items-center gap-x-4 hover:bg-slate-200`}
          onClick={handleLogout}
        >
          <span>👋</span>
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Logout
          </span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;

