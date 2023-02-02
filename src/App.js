import "./App.css";
import Travel from "./Travel";
import Photography from "./Photography";
import Home from "./Home";
import React, { useEffect, useState } from "react";
import Random from "./Randome";
import Music from "./Music";

function App() {
  const [navi, setNavi] = useState("Home");
  return (
    <div class="flex min-h-screen flex-row text-gray-800 ">
      <aside class="sidebar w-64 -translate-x-full transform bg-neutral-900 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md h-full">
        <div id="profile" class=" mt-10">
          <img
            src={require(`./images/4a.jpg`)}
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
          <ul class="ml-4">
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <a href="#">
                <button onClick={() => setNavi("Home")}>
                  Home
                </button>
              </a>
            </li>

            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <a href="#">
                <button onClick={() => setNavi("About")}>
                  About
                </button>
              </a>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <a href="#">
                <button onClick={() => setNavi("Photography")}>
                  Photography
                </button>
              </a>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <a href="#">
                <button onClick={() => setNavi("Travel")}>
                  Travels
                </button>
              </a>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <a href="#">
                <button onClick={() => setNavi("Music")}>
                  Music
                </button>
              </a>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <a href="#">
                <button onClick={() => setNavi("Random")}>
                  Nature
                </button>
              </a>
            </li>
          </ul>
        </div>

      </aside>
      <main class="main -ml-48 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
        {/* <div class="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">Content</div> */}
        {/*  <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-0.5 md:-m-2">

        {[[1, 1],[2, 2],[3,3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],
        ].map(([src, alt]) => (
          <div className="flex flex-wrap w-1/3 hover:bg-neutral-900" key={alt} >
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-md"
              src={require(`./images/${src}.jpg`)} />
                      </div>
        </div>
        ))}
          </div>
        </div>
      </section> */}
        {navi == 'Home' && <Home />}
        {navi == 'Travel' && <Travel />}
        {navi == 'Photography' && <Photography />}
        {navi == 'Music' && <Music />}
        {navi == 'Random' && <Random />}
      </main>
    </div>
  );
}

export default App;

/* <div  class="bg-white dark:bg-black">
     <header>
     </header>
     HTML
     <section className="overflow-hidden text-gray-700 ">
       <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
         <div className="flex flex-wrap -m-0.5 md:-m-2">

       {[[1, 1],[2, 2],[3,3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],
       ].map(([src, alt]) => (
         <div className="flex flex-wrap w-1/3 hover:bg-neutral-900" key={alt} >
         <div className="w-full p-1 md:p-2">
           <img alt="gallery" className="block object-cover object-center w-full h-full rounded-sm"
             src={require(`./images/${src}.jpg`)} />
                     </div>
       </div>
       ))}
         </div>
       </div>
     </section>
   </div> */
