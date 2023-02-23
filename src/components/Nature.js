import React from "react";
function Nature() {
    const nature_list = [
        { alt: "American Robin", src: 1, id: 1 },
        { alt: "Common Grackle", src: 2, id: 2 },
        { alt: "White-tailed deer", src: 3, id: 3 },
        { alt: "Dragonfly mating", src: 4, id: 4 },
        { alt: "Grasshopper", src: 5, id: 5 },
        { alt: "Snail", src: 6, id: 6 },
        { alt: "Boats in Deep River, Ontario", src: 7, id: 7 },
        { alt: "Forest", src: 8, id: 8 },
        { alt: "Focus in 1 boat", src: 9, id: 9 },
        { alt: "Webworms", src: 14, id: 14 },
        { alt: "Stack rocks in a beach", src: 16, id: 16 },
        { alt: "Pebble beach on river", src: 17, id: 17 },
        { alt: "Cave", src: 18, id: 18 },
        { alt: "Cave", src: 19, id: 19 },
        { alt: "Cave", src: 20, id: 20 },
    ];
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
