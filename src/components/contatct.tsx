import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const lastSent = localStorage.getItem("lastSentTime");
        if (lastSent) {
            const diff = Date.now() - parseInt(lastSent);
            if (diff < 30000) setDisabled(true); // blokada 30s
        }
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDisabled(true);
        localStorage.setItem("lastSentTime", Date.now().toString());

        const now = new Date().toLocaleString();
        emailjs.send(
            "service_doyoiqa",
            "template_2137dle",
            {
                user_name: form.name,
                user_email: form.email,
                message: form.message,
                time: now,
            },
            "GeQ0S74U7QjTQZaWn"
        ).then(
            (result) => {
                console.log("Wysłano ✅", result.text);
                setSubmitted(true);
                setForm({ name: "", email: "", message: "" });
                setTimeout(() => setDisabled(false), 30000);
            },
            (error) => {
                console.log("Błąd ❌", error.text);
                setDisabled(false);
            }
        );
    };

    return (
        <div className="pt-20 max-sm:pt-0 max-sm:mx-4">
            <div className="max-w-4xl mx-auto  p-8 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8 dark:bg-gray-800 ">
                <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 ">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center h-[56px] dark:text-gray-100">{t("contact.sections.ContactInfo")}</h2>
                    <div className="flex flex-col h-full">
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <span className="font-semibold dark:text-gray-200">Email: p.szeliga.dev@gmail.com</span>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <a
                                    href="https://www.linkedin.com/in/paweł-szeliga-954b23349"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="devicon-linkedin-plain text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105 dark:text-purple-500 dark:hover:text-purple-600 dark:border-purple-500 dark:hover:border-purple-600"
                                    aria-label="LinkedIn"
                                >
                                </a>
                                <a
                                    href="https://github.com/PawelSzeliga23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="devicon-github-original text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105 dark:text-purple-500 dark:hover:text-purple-600 dark:border-purple-500 dark:hover:border-purple-600"
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
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center h-[56px] dark:text-gray-100">{t("contact.sections.ContactMe")}</h2>
                    {submitted ? (
                        <p className="text-lime-500 text-center font-semibold dark:text-purple-500">{t("contact.messages.ThankYou")}</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                    {t("contact.form.Name")}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t("contact.placeholders.Name") || 'Your Name'}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-purple-400"
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
                                    placeholder={t("contact.placeholders.Email") || 'Your Email'}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                    {t("contact.form.Message")}
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder={t("contact.placeholders.Message") || 'Your Message'}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none dark:focus:ring-purple-400"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={disabled}
                                className="w-full bg-lime-500 text-white py-2 rounded-lg font-semibold hover:bg-lime-700 transition-colors dark:bg-purple-500 dark:hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {t("contact.buttons.Send")}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;