"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is Required";
    if (!formData.email.trim()) newErrors.email = "Email is Required";
    if (!formData.message.trim()) newErrors.message = "Message is Required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      toast("Try Again!");
    } else {
      setError({});
      toast("Your message was sent Successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div className="mt-24 mx-4">
      <div className="w-full h-full text-center ">
        <h1 className="text-white font-bold md:text-4xl text-2xl">
          Contact Us & We will Reply
        </h1>
        <p className="mt-3">
          You can send us your suggestions, comments or anything else here!
        </p>
        <div className="w-full justify-items-center mt-10 text-left">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="nick"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  name="email"
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  type="submit"
                  className={`shadow focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded ${
                    formData.name && formData.email && formData.message
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-red-200 text-gray-400 "
                  }`}
                >
                  Send
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
