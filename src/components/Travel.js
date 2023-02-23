
import React from "react";
import {travel_list} from "../json/travelList";

function Travel() {
    return (
        <section className="wrap">
            <h2 className="sectionQuotes">
                “The more you wander, the more you wonder!”
            </h2>
            <div className="absolute p-4 text-gray-400">
                <div className="grid lg:grid-cols-3 gap-x-6">
                {travel_list.map((item) => (
                           <div className="mb-12 lg:mb-0" key={item.id}>
                        <div className="travelPicDiv shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img  src={require(`../images/travel/${item.src}`)} className="w-full"  alt={item.alt} loading={"lazy"}/>
                                <div
                                    className="travelPic mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                ></div>
                           
                        </div>
                        <h5 className="text-lg font-bold mb-3 text-teal-500 flex items-center justify-center lg:justify-start">{item.title}</h5>
                        <div className="mb-3 text-gray-200 font-medium text-sm ">{item.location}</div>
                        {/* <p > {item.description}</p> */}
                    </div>
                        ))}
                </div>
            </div>
        </section>

    );
}

export default Travel;
