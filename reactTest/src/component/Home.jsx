import React from 'react'

const Home = () => {
    return (
        <>
            <section className="w-full h-[700px] bg-white">
                {/* 
                this will use as image
                <div className="relative w-full h-auto bg-black">
                    <img
                        className="opacity-70"
                        src="./home.jpg"
                        alt=""
                    />
                </div> */}
                <div className="text-black top-[200px] left-9 absolute mx-14">
                    <h1 className="text-[80px] font-semibold">
                        The New Standard <br />
                        in Data Analysis
                    </h1>
                    <p className="text-[30px] my-5">
                        Use Data to Get a 360-Degree <br />
                        View of Your Business
                    </p>
                    <button
                        className="py-3 px-5 my-3 border-2 text-black rounded-md border-[#F45F5F] bg-[#F45F5F] hover:bg-black hover:border-2 hover:border-white hover:text-white"
                    >
                        Learn More
                    </button>
                </div>
            </section>
        </>
    )
}

export default Home
