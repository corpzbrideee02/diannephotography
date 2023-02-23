import React from "react";
import { nature_list } from "../json/natureList";
function Nature() {
    return (
        <section className="wrap">
            <h2 className="sectionQuotes">
                {/* Landscape, Macro and Wildlife Photography */}
                “Nature always wears the colors of the spirit.“
            </h2>
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-0.5 md:-m-2">
                    {nature_list.map((item) => (
                        <div className="flex flex-wrap w-1/3 hover:bg-neutral-900" key={item.id}>
                            <div className="w-full p-1 md:p-2">
                                    <img alt={item.alt} className="block object-cover object-center w-full h-full rounded-md" loading={"lazy"}
                                        src={require(`../images/nature/${item.src}.jpg`)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Nature;
