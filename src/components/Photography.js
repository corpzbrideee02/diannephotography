import React from "react";
function Photography() {
    const photography_list = [
        { alt: "Fancy dining room in a birthday event", src: "p10a", id: 1 },
        { alt: "Giant Teddy Bear sitting alone", src: "p11a", id: 2 },
        { alt: "Poker table at Whitchurch-Stouffville, ON", src: "p12a", id: 3 },

        { alt: "Pioneer Digital DJ System", src: "p18a", id: 4 },
        { alt: "Persian chess set at the Multicultural Festival", src: "p14a", id: 5 },
        { alt: "Gaming headset in our house", src: "p16a", id: 7 },

        
        { alt: "Deep fried quailed eggs coated w/ blue batter (Filipino dish)", src: "p15a", id: 6 },
        { alt: "A tall birdhouse in St. Thomas park", src: "p17a", id: 8 },
        { alt: "Japanese umbrella (Wagasa) taken during Autumn season", src: "p13a", id: 9 },

        { alt: "Stratford City Hall ", src: "p22", id: 10 },
        { alt: "Downtown Stratford, Ontario", src: "p23a", id: 11 },
        { alt: "Outdoor skating rink in Toronto, Ontario", src: "p24a", id: 12 },
        

        { alt: "Wooden coffins dangle from cliffs in Sagada (Philippines)", src: "p19a", id: 13 },
        { alt: "Two elderlies working in a Ginseng farm", src: "p20a", id: 14 },
        { alt: "A cool stone in Niagara on the lake", src: "p21a", id: 15 },
    ];
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