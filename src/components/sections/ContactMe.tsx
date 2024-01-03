import React from "react";
import tojo from '../../assets/tojo.png';
import {useRef} from "react";


function ContactMe(){
    const form = useRef()
    return(
        <>
            <div className="flex bg-gray-900 rounded-lg m-8">
                <div className="w-1/2 border-r border-gray-600 mt-5 mb-5">
                    <div className="text-md lg:text-5xl p-5 text-white font-semibold">
                        <h1> Contact Me </h1>
                    </div>
                    <form className="flex flex-col">
                        <input className="m-5 p-3 rounded-xl" type="text" placeholder="Full Name" name="user_name" required />
                        <input className="m-5 p-3 rounded-xl" type="email" placeholder="Email" name="user_email" required />
                        <input className="m-5 p-3 rounded-xl" type="text" placeholder="Subject" name="subject" required />
                        <textarea className="m-5 p-3 rounded-xl" name="message" cols={30} rows={10}></textarea>
                        <button className="m-5 p-3 text-white bg-black rounded-lg"> Send Message </button>
                    </form>
                </div>
                <div className="w-1/2 inline p-12">
                    <img src={tojo} alt="yuji" className="max-w-full h-auto" />
                </div>
                </div>

        </>
    )
}

export default ContactMe;