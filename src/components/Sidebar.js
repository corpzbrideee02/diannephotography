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
  { name: "Home", href: "/home", current: checkIfActiveRoute("home") },
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
  {
    /* <div class=" mt-10">
            ih
            <img
                src={require(`../images/4a.jpg`)}
                alt="Avatar user"
                class="h-32 w-32 md:w-32 rounded-full mx-auto"
            />
            <div>
                <h1 class="font-medium text-xl  text-center text-teal-500">
                    Dianne Corpuz
                </h1>
                <p class="text-xs text-gray-300 text-center">Software Developer /</p>
                <p class="text-xs text-gray-300 text-center">Full Stack Developer</p>
            </div>

            <div class="mt-8">
                <p class="font-medium text-xs md:text-sm text-center text-teal-500">
                    <a href="https://corpzbrideee02.github.io/">
                        corpzbrideee02.github.io
                    </a>
                </p>
            </div>
        </div> */
  }

  {
    /*  <div class="mt-10 mb-4">
            <ul class="ml-4">
                <Link
                    to="/home"
                    class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg"
                >
                    Home
                </Link>
            </ul>
            {navigation.map((item) => (
            <NavLink key={item.name} to={item.href}>
                {item.name}
            </NavLink>
        ))}
        </div> */
  }
};

export default SideBar;
