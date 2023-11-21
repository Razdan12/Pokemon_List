import React, { FC } from "react";
import Navbar from "./Navbar";

interface props {
  children?: React.ReactNode;
  id?: string;
}
const Layout: FC<props> = ({ id, children }) => {
  return (
    <>
      <div data-theme="synthwave" className="">
        <div className="">
          <Navbar>
            <div className="w-full h-full min-h-screen flex flex-col p-2" id={id}>
              {children}
            </div>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Layout;
