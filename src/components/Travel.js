
import React from "react";

function Travel() {
    const travel_list = [
        { alt:"",  src: "b.jpeg", id: 1, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam."},
        { alt:"", src: "a.jpg", id: 2 ,description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.", },
        { alt:"", src: "c.jpeg", id: 3, description: " Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam.",  },
    ];
    return (
        <section class="mb-32 mt-4 text-gray-800 text-center lg:text-left">
            <h2 class="cursive text-3xl font-bold mb-12 text-center text-teal-500">
                “The more you wander, the more you wonder!”
            </h2>
            <div class="absolute p-4">
                <div class="grid lg:grid-cols-3 gap-x-6">
                {travel_list.map((item) => (
                           <div class="mb-12 lg:mb-0" key={item.id}>
                        <div class="travelPicDiv shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img  src={require(`../images/${item.src}`)} class="w-full"  alt={item.alt}/>
                                <div
                                    class="travelPic mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                ></div>
                           
                        </div>
                        <h5 class="text-lg font-bold mb-3">Example1</h5>
                        <div class="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                        
                            Hot news
                        </div>
                        
                        <p class="text-gray-500"> {item.description}</p>
                    </div>
                        ))}
                </div>
            </div>
        </section>

    );
}

export default Travel;
