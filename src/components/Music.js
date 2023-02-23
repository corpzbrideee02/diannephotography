

import React  from "react";
import { music_gallery1,music_gallery2 } from "../json/musicList";
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
                            <img alt={item.alt} className="musicImg" loading={"lazy"}
                                src={require(`../images/music/${item.src}.jpg`)} />
                        </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap w-1/2">
                    {music_gallery2.map((item) => (
                              <div className={`${item.width} p-1 md:p-2`}>
                            <img alt={item.alt} className="musicImg" loading={"lazy"}
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