import React from "react";
const Natures = ({ items, loading }) => {
    if (loading) {
        return <main className="flex items-center justify-center" >
            <h1>Nature Loading...</h1>
        </main>
    }
    return (
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-0.5 md:-m-2">
                {items.map((item) => (
                    <div className="flex flex-wrap w-1/3 hover:bg-neutral-900" key={item.id}>
                        <div className="w-full p-1 md:p-2">
                            <img alt={item.alt} className="block object-cover object-center w-full h-full rounded-md" loading={"lazy"}
                                src={require(`../images/nature/${item.src}.jpg`)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Natures;