"use client";

import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handle submit clicked");

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            toast.error("Please fill all the fields");
            return;
        }
    };

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="shadow-section-inset mx-auto my-6 border-y border-neutral-100 py-12"
        >
            <div className="max-w-lg mx-auto flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="text-sm font-medium tracking-tight text-neutral-600"
                >
                    Full name
                </label>
                <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="shadow-input focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="text-sm font-medium tracking-tight text-neutral-600"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="text"
                    placeholder="johndoe@gmail.com"
                    className="shadow-input focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="message"
                    className="text-sm font-medium tracking-tight text-neutral-600"
                >
                    Message
                </label>
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder="Enter your query"
                    className="shadow-input focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="bg-primary rounded-md px-4 py-2 text-white"
            >
                Send message
            </button>
            </div>
        </form>
    );
};
