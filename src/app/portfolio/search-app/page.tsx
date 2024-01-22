"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import RadioGroupSection from "@/app/ui/search-app/radio";

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
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Search App
                </h2>
                <hr className="my-4" />
                <RadioGroupSection />
            </div>
        </main>
    );
}
