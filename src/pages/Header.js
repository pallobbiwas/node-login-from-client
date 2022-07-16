import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-300">
        <div class="flex-1">
          <p class="font-bold"> <span className="text-4xl text-pink-600">Node.</span> js</p>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 font-bold">
            <li>
              <Link to="/ragister">Ragister</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
