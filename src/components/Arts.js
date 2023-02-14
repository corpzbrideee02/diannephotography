
function Arts() {
    return (
        <section className="wrap">
            <h2 className="sectionQuotes">“Art is not what you see, but what you make others see.”</h2>

            <div className="container px-2 py-2 mx-auto lg:pt-4 lg:px-32">
                <div className=" flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2 mx-auto" >
                        <div className="w-full p-1 md:p-2">
                            <img alt="" className="musicImg" src={require("../images/arts/arrts.gif")} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="" className="musicImg" src={require("../images/arts/arrts2.gif")} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="" className="musicImg" src={require("../images/arts/arrts3.gif")} />
                        </div>
                    </div>

                </div>
            </div>

        </section>

    );
}

export default Arts;
