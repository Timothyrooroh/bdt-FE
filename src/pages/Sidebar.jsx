import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className=" border-r-2 border-gray-200 p-3 flex justify-center "
      style={{ height: "100vh" }}
    >
      <div className="">
        <p className="mb-5 font-bold mt-3">Delear Site Bitung</p>
        {/* <p className="mb-5 font-bold mt-3">Delear Pusat Jakarta</p> */}
        <div className="mt-3 border-t-2 text-center p-3">
          <div className="">
            <Link className="mt-3" to={"/"}>
              Toko
            </Link>
          </div>
          <div className="mt-3">
            <Link className="mt-3" to={"/transaksi"}>
              Transaksi
            </Link>
          </div>
          {/* <div className="mt-3">
            <Link className="mt-3" to={"/gudang"}>
              Gudang
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
