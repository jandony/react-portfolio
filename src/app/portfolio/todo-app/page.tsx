"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ToDoForm from "@/app/ui/todo-app/form";

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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    To-Do App
                </h2>

                {/* Divider */}
                <hr className="my-4" />

                {/* Project Intro */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex grow flex-col rounded-lg bg-gray-100 p-6 md:w-1/4">
                        <p>
                            <strong>Title: </strong>
                        </p>
                        <p>Jeffrey's Grocery List</p>
                    </div>
                    <div className="flex grow flex-col rounded-lg bg-gray-100 p-6 md:w-3/4">
                        <p>
                            <strong>Description: </strong>
                        </p>
                        <p className="italic text-gray-400">This react app will demonstrate all the CRUD operations while utilizing the React.js fundamentals and components. Each item can be created, updated, checked off, and removed.</p>
                    </div>
                </div>

                {/* Project Work */}
                <ToDoForm />
            </div>
        </main>
    );
}
