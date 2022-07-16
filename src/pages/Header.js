import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <p className="font-bold"> <span className="text-4xl text-pink-600">Node.</span> js</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-bold">
            <li>
              <Link to="/ragister">Ragister</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
