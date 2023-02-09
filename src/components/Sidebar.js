import { Link, NavLink } from "react-router-dom";
import { Fragment, useEffect, useReducer } from "react";

function checkIfActiveRoute(page) {
  const currentPage = window.location.pathname;

  if (`/${page.toLowerCase()}` === currentPage) {
    return true;
  } else {
    return false;
  }
}

const navigation = [
  { name: "Home", href: "/", current: checkIfActiveRoute("") },
  { name: "About", href: "/about", current: checkIfActiveRoute("about") },
  {
    name: "Photography",
    href: "/photography",
    current: checkIfActiveRoute("photography"),
  },
];
const SideBar = () => {
  <div className="flex flex-1 items-center m-20 lg:m-0 lg:justify-start">
    <div className="flex space-x-4">
      {navigation.map((item) => (
        <NavLink key={item.name} to={item.href}>
          {item.name}
        </NavLink>
      ))}
    </div>
  </div>;
  
};

export default SideBar;
