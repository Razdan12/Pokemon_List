import React, { FC } from "react";

interface props {
  children?: React.ReactNode;
}

const Navbar: FC<props> = ({ children }) => {
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300 top-0 sticky z-50">
            <div className="navbar-start">
              <div className="dropdown ">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
            <div className="navbar-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
                alt="logo"
                className="w-32"
              />
            </div>
            <div className="navbar-end">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png" />
                </div>
              </div>
            </div>
          </div>

          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
         
        </div>
      </div>
    </>
  );
};

export default Navbar;
