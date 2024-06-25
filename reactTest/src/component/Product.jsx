import React from 'react'

const Product = () => {
    return (
        <div>
            <section className="w-full h-[700px] py-7">
                <div className="w-full  pb-7">
                    <div className="w-[90%] h-auto mx-auto flex justify-between">
                        <div
                            className="border-[1px] relative border-gray-500 bg-[#e0dfe3] w-[40%]"
                        >
                            <img
                                className="h-auto opacity-30"
                                src="./images/pexels-noah-erickson-404280.jpg"
                                alt=""
                            />
                            <div
                                className="absolute top-[15px] justify-center m-36 text-wrap text-white w-[400px]"
                            >
                                <h1 className="text-[40px]">
                                    Let Your Data Take Your Business to Higher Grounds
                                </h1>
                                <p className="text-[18px] text-gray-400 my-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                    delectus.
                                </p>
                            </div>
                        </div>
                        <div
                            className="border-[1px] bg-[#c7c5cb] border-gray-500 w-[60%] text-white"
                        >
                            <div className="my-16 mx-40 text-[18px] text-gray-400">
                                <p className="my-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a
                                    ita voluptates, atque iusto earum similique, laudantium,
                                    exercitationem amet Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Laborum enim minima inventore voluptatum magni
                                    tenetur ratione illum odit rerum nisi. quisquam autem asperiores
                                    architecto soluta facere?
                                </p>
                                <p className="my-4">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                                    illum laboriosam veniam sapiente deleniti, repellendus ipsa
                                    perspiciatis obcaecati, unde cum quo harum? In fuga voluptates
                                    est necessitatibus? Veritatis explicabo enim totam at. Qui
                                    voluptatem, quis, repudiandae perferendis facilis blanditiis
                                    sapiente, excepturi harum recusandae illo impedit!
                                </p>
                                <button
                                    className="py-3 px-5 my-3 border-2 text-black rounded-md border-[#F45F5F] bg-[#F45F5F] hover:bg-black hover:border-2 hover:border-white hover:text-white"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product
