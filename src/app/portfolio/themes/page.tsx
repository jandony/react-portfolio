"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { ChevronLeftIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Toggles from "@/app/ui/themes/toggles";
import Tabs from "@/app/ui/themes/tabs";

const links = [{ name: "Back", href: "/", icon: ChevronLeftIcon }];

export default function Page() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check the default color scheme when the component mounts
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        console.log("prefersDarkMode: " + prefersDarkMode);
        setIsDarkMode(prefersDarkMode);
    },[]);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
        }
    };

    return (
        <main className="flex flex-col m-6 mt-4 p-6 bg-white rounded-lg min-h-96">
            <div className="max-w-screen-xl text-gray-500 w-full mx-auto py-6">
                <div className="flex justify-between">
                    {links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <Link key={link.name} href={link.href} className="flex items-center w-fit py-1 px-3 rounded-lg bg-gray-100 hover:bg-gray-200">
                                <LinkIcon className="w-4" />
                                <p className="hidden md:block">{link.name}</p>
                            </Link>
                        );
                    })}
                    <h2 className="flex justify-center items-center text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                        </svg>
                        Themes
                    </h2>
                    <button onClick={toggleDarkMode}>{isDarkMode ? <MoonIcon className="border-solid border-2 border-gray-400 rounded-full h-10 w-10 p-2 text-white bg-gray-400" /> : <SunIcon className="border-solid border-2 border-gray-200 rounded-full h-10 w-10 p-2 text-gray-500" />}</button>
                </div>
                <hr className="my-4" />

                <div id="dark-toggle" className={clsx("bg-white-500 py-10", { "bg-gray-800" : isDarkMode })}>
                    {/* Component(s) 1 */}
                    <div className="flex gap-6 p-6">
                        {/* 1/3 */}
                        <div className={clsx("bg-white-500 border-solid border-2 border-white-500 rounded p-8", { "bg-gray-600 border-solid border-2 border-gray-500 text-white": isDarkMode })}>
                            <h2 className={clsx("text-4xl mb-6", { "text-white": isDarkMode })}>My Heading</h2>
                            <p>Context to show something awesome with theming. Let's see what it can do!</p>
                            <button className="bg-blue-800 hover:bg-blue-700 text-white rounded-full mt-6 py-3 px-6">Click Me</button>
                        </div>
                        {/* 2/3 */}
                        <div className={clsx("bg-white-500 border-solid border-2 border-white-500 rounded p-8", { "bg-gray-600 border-solid border-2 border-gray-500 text-white": isDarkMode })}>
                            <h2 className={clsx("text-4xl mb-6", { "text-white": isDarkMode })}>My Heading</h2>
                            <p>Context to show something awesome with theming. Let's see what it can do!</p>
                            <button className="bg-blue-800 hover:bg-blue-700 text-white rounded-full mt-6 py-3 px-6">Click Me</button>
                        </div>
                        {/* 3/3 */}
                        <div className={clsx("bg-white-500 border-solid border-2 border-white-500 rounded p-8", { "bg-gray-600 border-solid border-2 border-gray-500 text-white": isDarkMode })}>
                            <h2 className={clsx("text-4xl mb-6", { "text-white": isDarkMode })}>My Heading</h2>
                            <p>Context to show something awesome with theming. Let's see what it can do!</p>
                            <button className="bg-blue-800 hover:bg-blue-700 text-white rounded-full mt-6 py-3 px-6">Click Me</button>
                        </div>
                    </div>

                    {/* Component 2 + 3 */}
                    <div className="flex gap-3 p-6">
                        <Toggles darkMode={isDarkMode} />
                        <Tabs darkMode={isDarkMode} />
                    </div>
                </div>
            </div>
        </main>
    );
}
