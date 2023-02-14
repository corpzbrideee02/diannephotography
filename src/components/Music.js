

import React  from "react";

const music_gallery1= [
    { alt: "CDs vitalogy focus", src: "m2", width:"w-1/2"},
    { alt: "Vitalogy", src: "m3", width:"w-1/2"},
    { alt: "Acoustic guitar", src: "m6", width:"w-full"},
];

const music_gallery2= [
    { alt: "Epiphone Gibson electric guitar", src: "m1", width:"w-full"},
    { alt: "complete CDs", src: "m5", width:"w-1/2"},
    { alt: "Pink Floyd vinyl record turntable", src: "m4", width:"w-1/2"},
];

function Music() {
    return (
        <section className="wrap">
             <h2 className="sectionQuotes">
             “Music is the universal language of mankind.”
            </h2>
            <div className="container px-2 py-2 mx-auto lg:pt-4 lg:px-32">
                <div className=" flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2" >
                    {music_gallery1.map((item) => (
                              <div className={`${item.width} p-1 md:p-2`}>
                            <img alt={item.alt} className="musicImg"
                                src={require(`../images/music/${item.src}.jpg`)} />
                        </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap w-1/2">
                    {music_gallery2.map((item) => (
                              <div className={`${item.width} p-1 md:p-2`}>
                            <img alt={item.alt} className="musicImg"
                                src={require(`../images/music/${item.src}.jpg`)} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Music;