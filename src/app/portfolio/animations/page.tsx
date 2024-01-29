"use client";

import { ChevronLeftIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [{ name: "Back", href: "/", icon: ChevronLeftIcon }];

export default function Page() {
    return (
        <main className="flex flex-col m-6 mt-4 p-6 bg-white rounded-lg min-h-96">
            <div className="max-w-screen-xl text-gray-500 w-full mx-auto py-6">
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                    Animations
                </h2>
                <hr className="my-4" />

                <div className="flex gap-4">
                    <div className="w-1/4 h-80 border-2 border-solid border-gray-500 fade-up delay-animation-1"></div>
                    <div className="flex w-3/4 h-80 border-2 border-solid border-gray-500">
                        <div className="border-2 border-solid border-gray-500 p-6 m-2">
                            <h3 className="text-blue-500 uppercase">Heading</h3>
                            <p>Content goes here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
