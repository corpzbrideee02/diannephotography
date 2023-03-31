import { art_gallery1,art_gallery2 } from "../json/artList";
function Arts() {
    return (
        <section className="wrap">
            <h2 className="sectionQuotes">“Art enables us to find ourselves and lose ourselves at the same time.”</h2>

            <div className="container px-2 py-2 mx-auto lg:pt-4 lg:px-32">
                <div className=" flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2 max-sm:w-full" >
                    {art_gallery1.map((item) => (
                              <div className={`${item.width} p-1 md:p-2`}>
                            <img alt={item.alt} className="musicImg" loading={"lazy"}
                                src={require(`../images/arts/${item.src}`)} />
                        </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap w-1/2 max-sm:w-full">
                    {art_gallery2.map((item) => (
                              <div className={`${item.width} p-1 md:p-2`}>
                            <img alt={item.alt} className="musicImg" loading={"lazy"}
                                src={require(`../images/arts/${item.src}`)} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Arts;
/* 
<div className="container px-2 py-2 mx-auto lg:pt-4 lg:px-32">
                <div className=" flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2 mx-auto" >
                        <div className="w-full p-1 md:p-2">
                                <img alt="" className="musicImg" src={require("../images/arts/arrts.gif")} loading={"lazy"} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                                <img alt="" className="musicImg" src={require("../images/arts/arrts2.gif")} loading={"lazy"} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                                <img alt="" className="musicImg" src={require("../images/arts/arrts3.gif")} loading={"lazy"} />
                        </div>
                    </div>

                </div>
            </div>

             <div className="container px-2 py-2 mx-auto lg:pt-4 lg:px-32">
                <div className=" flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2 max-sm:w-full" >
                    {music_gallery1.map((item) => (
                              <div className={`${item.width} p-1 md:p-2`}>
                            <img alt={item.alt} className="musicImg" loading={"lazy"}
                                src={require(`../images/music/${item.src}.jpg`)} />
                        </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap w-1/2 max-sm:w-full">
                    {music_gallery2.map((item) => (
                              <div className={`${item.width} p-1 md:p-2`}>
                            <img alt={item.alt} className="musicImg" loading={"lazy"}
                                src={require(`../images/music/${item.src}.jpg`)} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>

*/