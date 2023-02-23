import React from "react";
import { photography_list } from "../json/photographyList";

function Photography() {
    return (
        <section className="wrap">
            <h2 className="sectionQuotes">
                “Photography is the art of making memories tangible.”
            </h2>
            <div className="absolute p-4">
                <div className="grid lg:grid-cols-3 gap-4">
                {photography_list.map((item) => (
                             <div className="group relative zoom randomPic1 shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                            data-mdb-ripple="true" data-mdb-ripple-color="dark" key={item.id}>
                            <img src={require(`../images/photography/${item.src}.jpg`)}
                                loading={"lazy"}
                                className="w-full object-cover transition duration-300 ease-linear align-middle" />
                            <div
                                className="absolute bottom-0 top-0 w-full h-0 flex flex-col justify-center items-center bg-neutral-900 opacity-0 group-hover:h-1/6 group-hover:opacity-75 duration-500">
                                <h1 className="text-sm text-white">{item.alt}</h1>
                            </div>

                            <div className="group relative hover-overlay">
                                <div
                                    className="randomPic3 mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                ></div>

                            </div>
                        </div>
                        ))}
                </div>


            </div>
        </section>

    );
}

export default Photography;