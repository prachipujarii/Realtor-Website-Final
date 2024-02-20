import React, { useState } from 'react';

const ContactUs = () => {
    const [message, setMessage] = useState("");

    // Handles the change in the textarea
    function onChange(e) {
        setMessage(e.target.value);
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-600 uppercase">Contact Us</h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-stretch gap-8"> {/* Adjusted for responsive layout */}
                {/* Left side - Form container */}
                <div className="flex-1 bg-white p-6 shadow-lg" style={{ borderRadius: '0.5rem', maxWidth: 'calc(50% - 1rem)' }}> {/* Adjusted for manual border radius and max-width */}
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="user-name">
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Your Name" />
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="user-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="user-email" type="email" placeholder="youremail@example.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="user-message">
                            Message
                        </label>
                        <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Your message" name='message' value={message} onChange={onChange}></textarea>
                    </div>
                    <div className="text-center">
                        <a href={`mailto:pujariprachi17676@gmail.com?Subject=Contacting the website owner for query&body=${message}`}>
                            <button className="shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Contact
                            </button>
                        </a>
                    </div>
                </div>
                {/* Right side - Image container */}
                <div className="flex-1 flex justify-center lg:justify-end items-center" style={{ maxWidth: '50%' }}> {/* Adjustments for image alignment and width */}
                    <img src="/images/contactus.jpg" alt="Contact Us" style={{ width: '100%', height: '90%' }} />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
