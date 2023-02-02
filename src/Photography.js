
function Photography() {
    return (
        <section class="randomPic text-gray-800 mt-4">


            <h2 class="cursive text-3xl font-bold mb-12 text-center text-teal-500">
            “Photography is the art of making memories tangible.”
            </h2>
            <div class="absolute p-4">
                <div class="grid lg:grid-cols-3 gap-4">
                    {[["p10", 10], ["p11", 11], ["p12", 12], ["p18", 18], ["p14", 14], ["p15", 15], ["p16", 16], ["p17", 17], ["p13", 13]
                    ].map(([src, alt]) => (
                        <div class="zoom randomPic1 shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                            data-mdb-ripple="true" data-mdb-ripple-color="dark" key={alt}>
                            <img src={require(`./images/${src}.jpg`)}
                                class="w-full transition duration-300 ease-linear align-middle" />
                            
                                <div class="hover-overlay">
                                    <div
                                        class="randomPic3 mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
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