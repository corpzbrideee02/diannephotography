import React from "react";
const Travels = ({ items, loading }) => {
    if (loading) {
        return <main className="flex items-center justify-center" >
            <h1>Travel Loading...</h1>
        </main>
    }
    return (
        <div className="p-4 text-gray-400">
                <div className="grid lg:grid-cols-3 gap-x-6">
                {items.map((item) => (
                           <div className="mb-6 lg:mb-2" key={item.id}>
                        <div className="travelPicDiv shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img  src={require(`../images/travel/${item.src}`)} className="w-full"  alt={item.alt} loading={"lazy"}/>
                                <div
                                    className="travelPic mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                ></div>
                           
                        </div>
                        <h5 className="text-lg font-bold mb-2 text-teal-500 flex items-center justify-center lg:justify-start">{item.title}</h5>
                        <div className="mb-3 text-gray-200 font-medium text-sm flex items-center justify-center lg:justify-start">{item.location}</div>
                        {/* <p > {item.description}</p> */}
                    </div>
                        ))}
                </div>
            </div>
    );
};

export default Travels;

