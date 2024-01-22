"use client";

import { ListBulletIcon, ComputerDesktopIcon, SunIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon, LockClosedIcon, ShoppingCartIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const topProjects = [
    { name: "To-Do App", title: "To-Do App", href: "/portfolio/todo-app", icon: ListBulletIcon },
    { name: "Multi-Page Portfolio", title: "Multi-Page Portfolio", href: "/portfolio/multipage-portfolio", icon: ComputerDesktopIcon },
    { name: "Weather App", title: "Weather App", href: "/portfolio/weather-app", icon: SunIcon },
    { name: "Search app", title: "Search app", href: "/portfolio/search-app", icon: MagnifyingGlassIcon },
];

const bottomProjects = [
    { name: "Authentication", title: "Authentication", href: "/", icon: LockClosedIcon },
    { name: "Builder.io", title: "Builder.io", href: "/", icon: WrenchScrewdriverIcon },
    { name: "E-Commerce", title: "E-Commerce", href: "/", icon: ShoppingCartIcon },
    { name: "Temp 1", title: "Coming soon...", href: "/", icon: ArrowPathIcon },
];

export default function Page() {
    return (
        <main className="flex flex-col px-6">
            <div className="flex grow flex-col gap-4 md:flex-row min-h-80">
                {topProjects.map((item) => {
                    const LinkIcon = item.icon;
                    return (
                        <Link key={item.name} href={item.href} className="md:w-2/5">
                            <div className="flex flex-col h-full justify-center items-center gap-6 rounded-lg bg-gradient-to-r from-cyan-700 to-indigo-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 px-6 py-10 md:px-20 hover-all-white">
                                <LinkIcon className="w-10" />
                                <h2 className="text-gray-300">{item.title}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="flex grow flex-col gap-4 md:flex-row min-h-80  mt-4">
                {bottomProjects.map((item) => {
                    const LinkIcon = item.icon;
                    return (
                        <Link key={item.name} href={item.href} className="md:w-2/5">
                            <div className="flex flex-col h-full justify-center items-center gap-6 rounded-lg bg-gradient-to-r from-cyan-700 to-indigo-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 px-6 py-10 md:px-20 hover-all-white">
                                <LinkIcon className="w-10" />
                                <h2 className="text-gray-300">{item.title}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
