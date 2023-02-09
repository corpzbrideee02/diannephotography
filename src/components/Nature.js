function Nature() {
    return (
        <section>
            <h2 class="cursive text-3xl font-bold mb-6 mt-6 text-center text-teal-500">
                {/* Landscape, Macro and Wildlife Photography */}
                “Nature always wears the colors of the spirit.“
            </h2>
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-0.5 md:-m-2">

                    {[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [14, 14], [16, 16], [17, 17]
                    ].map(([src, alt]) => (
                        <div className="flex flex-wrap w-1/3 hover:bg-neutral-900" >
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-md"
                                    src={require(`../images/${src}.jpg`)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Nature;
