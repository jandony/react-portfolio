"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                    Multi-Page Portfolio
                </h2>
                <hr className="my-4" />
                <p>Content here...</p>
            </div>
        </main>
    );
}
