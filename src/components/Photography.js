import React from "react";

function Photography() {
    const photography_list = [
        { alt: "Fancy dining room in a birthday event", src: "p10", id: 1 },
        { alt: "Giant Teddy Bear sitting alone", src: "p11", id: 2 },
        { alt: "Poker table at Whitchurch-Stouffville, ON", src: "p12", id: 3 },

        { alt: "A cool Dragon glass bong", src: "p18", id: 4 },
        { alt: "Persian chess set at the Multicultural Festival", src: "p14", id: 5 },
        { alt: "Deep fried quailed eggs coated w/ blue batter (Filipino dish)", src: "p15", id: 6 },

        { alt: "Camping essentials at Elora Conservation Area", src: "p16", id: 7 },
        { alt: "A tall birdhouse in St. Thomas park", src: "p17", id: 8 },
        { alt: "Japanese umbrella (Wagasa) taken during Autumn season", src: "p13", id: 9 },
    ];
    return (
        <section className="randomPic text-gray-800 mt-4">
            <h2 className="cursive text-3xl font-bold mb-12 text-center text-teal-500">
                “Photography is the art of making memories tangible.”
            </h2>
            <div className="absolute p-4">
                <div className="grid lg:grid-cols-3 gap-4">
                {photography_list.map((item) => (
                             <div className="group relative zoom randomPic1 shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                            data-mdb-ripple="true" data-mdb-ripple-color="dark" key={item.id}>
                            <img src={require(`../images/${item.src}.jpg`)}
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