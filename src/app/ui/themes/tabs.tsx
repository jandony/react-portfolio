import clsx from "clsx";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Tabs(props) {
    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: "Does drinking coffee make you smarter?",
                date: "5h ago",
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: "2h ago",
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: "Is tech making coffee better or worse?",
                date: "Jan 7",
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: "The most innovative things happening in coffee",
                date: "Mar 19",
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: "Ask Me Anything: 10 answers to your questions about coffee",
                date: "2d ago",
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: "4d ago",
                commentCount: 1,
                shareCount: 2,
            },
        ],
    });
    return (
        <div className="w-2/3 px-2 sm:px-0">
            <Tab.Group>
                <Tab.List className={clsx("flex space-x-1 rounded-xl border-solid border-2 border-gray-200 p-1", {"border-gray-500" : props.darkMode})}>
                    {Object.keys(categories).map((category) => (
                        <Tab key={category} className={({ selected }) => classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5", "ring-white/60 focus:outline-none", selected ? "bg-blue-800 hover:bg-blue-700 text-white shadow" : "text-gray-400 hover:bg-blue-700 hover:text-white")}>
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel key={idx} className={clsx("rounded-xl bg-white-500 border-solid border-2 border-gray-200 p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2", {"rounded-xl bg-gray-600 border-solid border-2 border-gray-500 text-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2" : props.darkMode})}>
                            <ul>
                                {posts.map((post) => (
                                    <li key={post.id} className={clsx("relative rounded-md p-3 mb-2 bg-white hover:bg-gray-100", {"bg-gray-500 hover:bg-gray-400 text-white" : props.darkMode})}>
                                        <h3 className="text-sm font-medium leading-5">{post.title}</h3>

                                        <ul className={clsx("mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500", {"text-gray-200" : props.darkMode})}>
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>{post.commentCount} comments</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a href="#" className={classNames("absolute inset-0 rounded-md", "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2")} />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
