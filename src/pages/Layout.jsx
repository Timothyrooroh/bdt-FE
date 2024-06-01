import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex" style={{ minHeight: "100vh" }}>
        <div className='w-[20%] bg-silver '>
          <Sidebar />
        </div>
        <div className="w-full p-10">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;