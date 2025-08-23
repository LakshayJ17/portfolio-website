"use client";

import React from "react";
import { toast } from "sonner";

export const ContactForm = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        await fetch("https://formspree.io/f/mzzvnnjn", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });
        toast.success("Thank You! Your message has been sent.")
        form.reset();
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
                        type="text"
                        placeholder="John Doe"
                        required
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
                        type="email"
                        placeholder="johndoe@gmail.com"
                        required
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
                        placeholder="Enter your query"
                        required
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
