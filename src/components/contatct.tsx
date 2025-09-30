import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const lastSent = localStorage.getItem("lastSentTime");
        if (lastSent) {
            const diff = Date.now() - parseInt(lastSent);
            if (diff < 30000) setDisabled(true); // blokada 30s
        }
    }, []); // <- to zamyka useEffect, a nie if


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDisabled(true);
        localStorage.setItem("lastSentTime", Date.now().toString());

        const now = new Date().toLocaleString();
        emailjs.send(
            "service_doyoiqa",      // Twój Service ID
            "template_2137dle",     // Twój Template ID
            {
                user_name: form.name,
                user_email: form.email,
                message: form.message,
                time: now,
            },
            "GeQ0S74U7QjTQZaWn"       // Publiczny klucz EmailJS
        ).then(
            (result) => {
                console.log("Wysłano ✅", result.text);
                setSubmitted(true);
                setForm({ name: "", email: "", message: "" }); // czyszczenie formularza
                setTimeout(() => setDisabled(false), 30000);
            },
            (error) => {
                console.log("Błąd ❌", error.text);
                setDisabled(false);
            }
        );
    };

    return (
        <div className="max-w-4xl mx-auto m-10 mt-20 p-8 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center h-[56px]">Contact Info</h2>
                <div className="flex flex-col h-full">
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <span className="font-semibold">Email:</span> p.szeliga.dev@gmail.com
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://www.linkedin.com/in/paweł-szeliga-954b23349"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="devicon-linkedin-plain text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105"
                                aria-label="LinkedIn"
                            >
                            </a>
                            <a
                                href="https://github.com/PawelSzeliga23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="devicon-github-original text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105"
                                aria-label="GitHub"
                            >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex items-center">
                <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center h-[56px]">Contact Me</h2>
                {submitted ? (
                    <p className="text-lime-500 text-center font-semibold">Thank you for your message!</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder='Your Name'
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder='Your Email'
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder='Your Message'
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={disabled}
                            className="w-full bg-lime-500 text-white py-2 rounded-lg font-semibold hover:bg-lime-700 transition-colors"
                        >
                            Send
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;