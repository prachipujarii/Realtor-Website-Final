import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handles the change in the input fields
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate name
        if (name.trim() === "") {
            toast.error("Please enter your name.");
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Validate message
        if (message.trim() === "") {
            toast.error("Please enter your message.");
            return;
        }

        // If all validations pass, send email
        window.location.href = `mailto:pujariprachi17676@gmail.com?Subject=Contacting the website owner for query&body=${message}`;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-600 uppercase">Contact Us</h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-stretch gap-8"> {/* Adjusted for responsive layout */}
                {/* Left side - Form container */}
                <div className="flex-1 bg-white p-6 shadow-lg" style={{ borderRadius: '0.5rem', maxWidth: 'calc(50% - 1rem)' }}> {/* Adjusted for manual border radius and max-width */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="user-name">
                                Name
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="name" 
                                type="text" 
                                placeholder="Your Name" 
                                value={name} 
                                onChange={handleNameChange} 
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="user-email">
                                Email
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="user-email" 
                                type="email" 
                                placeholder="youremail@example.com" 
                                value={email} 
                                onChange={handleEmailChange} 
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="user-message">
                                Message
                            </label>
                            <textarea 
                                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
                                id="message" 
                                placeholder="Your message" 
                                name='message' 
                                value={message} 
                                onChange={handleMessageChange} 
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button 
                                className="shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                                type="submit"
                            >
                                Contact
                            </button>
                        </div>
                    </form>
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
