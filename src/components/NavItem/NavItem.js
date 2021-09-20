import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
export default React.memo(function NavItem({ linkTo, iconClass, text }) {
  return (
    <Link to={linkTo}>
      <i className={iconClass}></i>
      {iconClass && " "}
      {text}
    </Link>
  );
});
