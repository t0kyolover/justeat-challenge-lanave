import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Just_Eat_Takeaway.com_icon_logo.svg/1200px-Just_Eat_Takeaway.com_icon_logo.svg.png"
            alt="Just Eat"
            width="30"
            height="24"
          />
        </a>
      </div>
    </nav>
  );
};
