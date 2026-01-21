"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const WEB3FORMS_ACCESS_KEY = "6a8ec512-5212-4814-b032-1a9964d81893";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* ===== Title ===== */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="mt-2 text-gray-300 text-sm sm:text-lg">
            Let's work together
          </p>
        </div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* ===== Left Info ===== */}
          <div className="space-y-8 md:text-left">
            <h2 className="text-2xl text-center lg:text-left sm:text-3xl font-bold text-white">
              Contact Information
            </h2>

            <p className="text-gray-300 text-center lg:text-left max-w-md mx-auto md:mx-0">
              I’m always open to job opportunities, collaborations, or conversations.
            </p>

            <div className="space-y-5">

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl shadow-lg">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-600 text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-gray-200 text-sm sm:text-base break-all">
                    aminurrahmansuhan@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl shadow-lg">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-600 text-white">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-200 text-sm sm:text-base">
                    +880 1701635619
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl shadow-lg">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-600 text-white">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold text-sm sm:text-base">
                    Location
                  </h4>
                  <p className="text-gray-200 text-sm sm:text-base">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://github.com/arsuhan677"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-700 text-white hover:scale-110 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aminur-rahman-200366328"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-700 text-white hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100082093456990"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-700 text-white hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* ===== Right Form ===== */}
          <div className="bg-gray-800 p-4 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center md:text-left">
              Send Me a Message
            </h2>

            {showSuccess && (
              <p className="bg-green-500 text-white py-2 rounded mb-4 text-center">
                Message sent successfully!
              </p>
            )}

            <form onSubmit={submitForm} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-md bg-[#1f242d] text-white border border-gray-600 focus:ring-2 focus:ring-cyan-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md bg-[#1f242d] text-white border border-gray-600 focus:ring-2 focus:ring-cyan-500 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-md bg-[#1f242d] text-white border border-gray-600 focus:ring-2 focus:ring-cyan-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
