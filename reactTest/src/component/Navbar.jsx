


import React from 'react'
// import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="shadow-lg bg-black absolute z-50 w-full h-auto">
            <div className="flex w-full justify-between mx-auto px-9 py-4">
                <div>
                    <a className="mx-24 flex" href="./index.html">
                        <h1 className="text-white pt-2 font-bold text-3xl">
                            S<strong>TiC</strong>K
                        </h1>
                        <p className="text-[#f94d4d] pt-2 font-bold text-3xl">.iO</p>
                    </a>
                </div>

                <div className="pt-2 flex">
                    <ul className="flex text-white font-semibold justify-between">
                        <li className="mx-4 pt-2 cursor-pointer hover:text-[#F45F5F]">
                            <a href="./solution.html">Solution</a>
                        </li>
                        <li className="mx-4 pt-2 cursor-pointer hover:text-[#F45F5F]">
                            <a href="./vision.html">Vision</a>
                        </li>
                        <li className="mx-4 pt-2 cursor-pointer hover:text-[#F45F5F]">
                            <a href="#travel">Program</a>
                        </li>
                        <li className="mx-4 pt-2 cursor-pointer hover:text-[#F45F5F]">
                            <a href="">Blog</a>
                        </li>

                        <li className="flex mx-4 pt-2 text-[#F45F5F]">
                            <a className="flex" href="">
                                <i
                                    className="fa-regular fa-user rounded-full mx-3 bg-[#F45F5F] p-1 h-7 w-7 text-black text-center"
                                ></i>
                                <p>Log in</p></a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
