"use client";

import { ListBulletIcon, ComputerDesktopIcon, SunIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon, LockClosedIcon, ShoppingCartIcon, ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const reactProjects = [
    { name: "To-Do App", title: "To-Do App", href: "/portfolio/todo-app", icon: ListBulletIcon },
    { name: "Multi-Page Portfolio", title: "Multi-Page Portfolio", href: "/portfolio/multipage-portfolio", icon: ComputerDesktopIcon },
    { name: "Weather App", title: "Weather App", href: "/portfolio/weather-app", icon: SunIcon },
    { name: "Search app", title: "Search app", href: "/portfolio/search-app", icon: MagnifyingGlassIcon },
    { name: "Authentication", title: "Authentication", href: "/", icon: LockClosedIcon },
    { name: "Builder.io", title: "Builder.io", href: "/", icon: WrenchScrewdriverIcon },
    { name: "E-Commerce", title: "E-Commerce", href: "/", icon: ShoppingCartIcon },
];

const frontendDev = [
    { name: "Animations", title: "Animations", href: "/portfolio/animations", icon: ArrowTrendingUpIcon },
    { name: "Temp 1", title: "Coming soon...", href: "/", icon: ArrowPathIcon },
    { name: "Temp 2", title: "Coming soon...", href: "/", icon: ArrowPathIcon },
    { name: "Temp 3", title: "Coming soon...", href: "/", icon: ArrowPathIcon },
    { name: "Temp 4", title: "Coming soon...", href: "/", icon: ArrowPathIcon },
];

export default function Page() {
    return (
        <main className="flex flex-col px-6">
            <h2 className="text-white mb-2">React Projects</h2>
            <div className="flex grow flex-col gap-4 md:flex-row md:flex-wrap mb-4">
                {reactProjects.map((item) => {
                    const LinkIcon = item.icon;
                    return (
                        <Link key={item.name} href={item.href} className="min-h-40 md:w-1/6">
                            <div className="flex flex-col h-full justify-center items-center gap-6 rounded-lg border-2 border-solid border-gray-500 bg-gray-700 hover:bg-gradient-to-b hover:from-indigo-700 hover:to-indigo-900 px-2 py-4 md:px-4 md:py-2 hover-all-white">
                                <LinkIcon className="w-10" />
                                <h3 className="text-gray-300 text-xl text-center">{item.title}</h3>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <h2 className="text-white mt-4 mb-2">Frontend Development</h2>
            <div className="flex grow flex-col gap-4 md:flex-row md:flex-wrap mb-4">
                {frontendDev.map((item) => {
                    const LinkIcon = item.icon;
                    return (
                        <Link key={item.name} href={item.href} className="min-h-40 md:w-1/6">
                            <div className="flex flex-col h-full justify-center items-center gap-6 rounded-lg border-2 border-solid border-gray-500 bg-gray-700 hover:bg-gradient-to-b hover:from-indigo-700 hover:to-indigo-900 px-2 py-4 md:px-4 md:py-2 hover-all-white">
                                <LinkIcon className="w-10" />
                                <h3 className="text-gray-300 text-xl text-center">{item.title}</h3>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
