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
    { name: "Photography", href: "/photography", current: checkIfActiveRoute("photography") },
    { name: "Travel", href: "/travels", current: checkIfActiveRoute("travels") },
    { name: "Music", href: "/music", current: checkIfActiveRoute("music") },
    { name: "Nature", href: "/nature", current: checkIfActiveRoute("nature") },
];



const Navigation = () => {
    return (
        <div className="flex min-h-screen flex-row h-screen">
            <aside className="sidebar w-64 -translate-x-full transform bg-neutral-900 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md ">
                {/* place sidebar here */}
                <div id="profile" className=" mt-10">
                    <img
                        src={require(`../images/4a.jpg`)}
                        alt="Avatar user"
                        className="h-32 w-32 md:w-32 rounded-full mx-auto"
                    />
                    <div>
                        <h1 className="font-medium text-xl  text-center text-teal-500">
                            Dianne Corpuz
                        </h1>
                        <p className="text-xs text-gray-300 text-center">Software Developer /</p>
                        <p className="text-xs text-gray-300 text-center">Full Stack Developer</p>
                    </div>

                    <div className="mt-8">
                        <p className="font-medium text-xs md:text-sm text-center text-teal-500">
                            <a href="https://corpzbrideee02.github.io/">
                                corpzbrideee02.github.io
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mt-10 mb-4">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} className="navUL">
                            <label >{item.name} </label>
                        </NavLink>
                    ))}
                </div>
            </aside>
            <main className="main -ml-48 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
                {/* Renders the child routes underneath */}
                <Outlet />
            </main>
        </div>
    );
};

export default Navigation;
