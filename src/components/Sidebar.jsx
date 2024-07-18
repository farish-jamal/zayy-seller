import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white  w-48 p-4 flex flex-col" style={{height:"100vh"}} >
      {/* <Link to="/dashboard/customers" className="text-white no-underline mb-4">
        🤵 Customer List
      </Link> */}
      <Link to="/dashboard/customers" className="text-white no-underline mb-4">
        🤵 Add Product
      </Link>
      <Link to="/dashboard/collection" className="text-white no-underline mb-4">
        🤵 Add Collection
      </Link>
      {/* <Link to="/dashboard/sellers" className="text-white no-underline mb-4">
        🏪 Seller List
      </Link> */}
      {/* <Link to="/dashboard/products" className="text-white no-underline mb-4">
        📦 All Products
      </Link> */}
      {/* <Link to="/dashboard/wages" className="text-white no-underline mb-4">
        💰 Wages
      </Link> */}
      {/* <Link to="/dashboard/extra" className="text-white no-underline mb-4">
        ➕ Extra
      </Link> */}
    </div>
  );
}

export default Sidebar;
