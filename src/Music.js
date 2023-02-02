
function Music() {
    return (
        <section class="overflow-hidden text-gray-700 mt-4">
             <h2 class="cursive text-3xl font-bold mb-12 text-center text-teal-500">
             “Music is the universal language of mankind.”
            </h2>
            <div class="container px-2 py-2 mx-auto lg:pt-4 lg:px-32">
                <div class=" flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/2" >
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src={require("./images/m2.jpg")} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src={require("./images/m3.jpg")} />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src={require("./images/m6.jpg")} />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src={require("./images/m1.jpg")} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src={require("./images/m5.jpg")} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2" >
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src={require("./images/m4.jpg")} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Music;