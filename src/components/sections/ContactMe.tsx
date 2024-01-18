import React, { useRef } from "react";
import tojo from "../../assets/tojo.png";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const noti = document.createElement("div");
    noti.className = "p-4 text-white"; // Fix the typo here
    const message = document.createElement("p");
    message.innerHTML = "Email has been sent";
    noti.appendChild(message);

    const okayNotiElement = document.querySelector("#okayNoti");

    if (form.current && okayNotiElement) {
      emailjs
        .sendForm(
          "service_7w2kptu",
          "template_nyz2peh",
          form.current,
          "gmH6mN9KGCqPpjj9o"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();

            // Clear any existing content in the notification element
            okayNotiElement.innerHTML = "";

            // Append the new notification
            okayNotiElement.appendChild(noti);

            // Use setTimeout to clear the notification after 2 seconds
            setTimeout(() => {
              okayNotiElement.innerHTML = "";
            }, 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("Form reference or okayNoti element is undefined.");
    }
  };

  return (
    <>
      <div id="contact me" className="bg-gray-700 p-4">
        <div className="flex bg-gray-800 rounded-lg m-12">
          <div className="w-1/2 border-r border-gray-600 mt-5 mb-5">
            <div className="text-md lg:text-5xl p-5 text-white font-semibold">
              <h1> Contact Me </h1>
            </div>
            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
              <input
                className="m-5 p-3 rounded-xl bg-black text-white"
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                className="m-5 p-3 rounded-xl bg-black text-white"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                className="m-5 p-3 rounded-xl bg-black text-white"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea
                className="m-5 p-3 rounded-xl bg-black text-white"
                name="message"
                placeholder="Message..."
                cols={30}
                rows={10}
              ></textarea>
              <button
                type="submit"
                className="m-5 p-3 text-white bg-black rounded-lg"
              >
                {" "}
                Send Message{" "}
              </button>
            </form>
            <div
              id="okayNoti"
              className="bg-green-500 rounded-lg m-2 items-center"
            ></div>
          </div>
          <div className="w-1/2 inline p-12">
            <img src={tojo} alt="yuji" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
