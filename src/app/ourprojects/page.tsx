import React from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import { BsGrid1X2Fill } from "react-icons/bs";
import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import { HiOutlineMail } from "react-icons/hi";
import Anim1 from "../../../public/animation/lottie/anim1.json"

import Prj1 from "../../../public/imgs/projects/project-1.png"
import Prj2 from "../../../public/imgs/projects/project-2.png"
import Prj3 from "../../../public/imgs/projects/project-3.jpg"
import Prj4 from "../../../public/imgs/projects/project-4.png"

import Link from "next/link";
const Page = () => {
    return (
        <div className="flex flex-col justify-between h-full  bg-black">
            <Navbar />
            <div className=" z-50 px-9 md:px-16 duration-300 vertical-sections-padding gap-5 flex flex-col md:flex-row  items-start justify-center ">
                <div className="w-full flex flex-col gap-7 bg-black z-50 vertical-sections-padding">
                <div className="flex flex-col gap-3">
                        <h1 className="text-white text-xl text-start md:text-2xl lg:text-4xl font-extrabold">Our Projects</h1>
                        <div className="flex items-start flex-col gap-1">
                            <p className="text-gray-400 text-sm text-start">Explore our portfolio of diverse projects, each a testament to our commitment to innovation, creativity, and excellence.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center w-full justify-start gap-6 ">
                        <Image
                            src={Prj1}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                        <Image
                            src={Prj2}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                        <Image
                            src={Prj3}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                        <Image
                            src={Prj4}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    );
};

export default Page;
