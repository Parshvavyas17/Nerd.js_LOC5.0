import React from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";



export default function Contact() {
     const navigate = useNavigate();

    return (
        <div>
            <Navbar/>
            <section className="text-gray-700 body-font font-ourfont relative bg-purple">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className=" text-7xl font-bold text-white title-font mb-4 text-gray-900">
                            Contact Us
                        </h1>
                       
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7  text-gray-600 text-lg font-bold text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7  text-gray-600 text-lg font-bold text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="message"
                                        className="leading-7  text-gray-600 text-lg font-bold text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button  onClick={() => { navigate("/"); }}className="flex mx-auto text-purple bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg">
                                    SUBMIT
                                </button>
                            </div>





                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        
    );
}
