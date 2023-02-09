import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// react router
import { Outlet } from "react-router-dom";

function checkIfActiveRoute(page) {
    const currentPage = window.location.pathname;

    if (`/${page.toLowerCase()}` === currentPage) {
        return true;
    } else {
        return false;
    }
}

const navigation = [
    { name: "Home", href: "/", current: checkIfActiveRoute("home") },
    { name: "About", href: "/about", current: checkIfActiveRoute("about") },
    {name: "Photography",href: "/photography",current: checkIfActiveRoute("photography")},
    {name: "Travel",href: "/travels",current: checkIfActiveRoute("travels")},
    {name: "Music",href: "/music",current: checkIfActiveRoute("music")},
    {name: "Nature",href: "/nature",current: checkIfActiveRoute("nature")},
];



const Navigation = () => {
    return (
        <div class="flex min-h-screen flex-row h-screen">
            <aside class="sidebar w-64 -translate-x-full transform bg-neutral-900 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md ">
                {/* place sidebar here */}
                <div id="profile" class=" mt-10">
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
                </div>

                <div class="mt-10 mb-4">
                        {navigation.map((item) => (
                             <ul class="ml-4">
                            <NavLink key={item.name} to={item.href} >
                                <label class="mb-2 px-4 py-3 text-gray-300 flex flex-row border-gray-500 hover:text-black   hover:bg-gray-500  rounded rounded-md">
                                {item.name}
                                </label>
                                
                            </NavLink>
                            </ul>
                        ))}
                    </div>
            </aside>
            <main class="main -ml-48 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
                {/* Renders the child routes underneath */}
                <Outlet />
            </main>
        </div>
    );
};

export default Navigation;
