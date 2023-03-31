import React from "react";
const Natures = ({ items, loading }) => {
    if (loading) {
        return <main className="flex items-center justify-center" >
            <h1>Nature Loading...</h1>
        </main>
    }
    return (
        <div className="p-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-6">
                {items.map((item) => (
                    <div className="mb-6 lg:mb-2" key={item.id}>
                        <div className="travelPicDiv shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={require(`../images/nature/${item.src}.jpg`)} className="w-full" alt={item.alt} loading={"lazy"} />
                            <div
                                className="travelPic mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                            ></div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Natures;


