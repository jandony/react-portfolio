
import clsx from "clsx"
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Toggles(props) {
    return (
        <div className="w-1/3 md:pr-3">
            <div className={clsx("rounded-2xl bg-white-500 p-2 shadow-lg", {"bg-gray-600" : props.darkMode})}>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                <span>What is your refund policy?</span>
                                <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
                            </Disclosure.Button>
                            <Disclosure.Panel className={clsx("px-4 pb-2 pt-4 text-sm text-gray-500", {"text-white" : props.darkMode})}>If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.</Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                <span>Do you offer technical support?</span>
                                <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
                            </Disclosure.Button>
                            <Disclosure.Panel className={clsx("px-4 pb-2 pt-4 text-sm text-gray-500", {"text-white" : props.darkMode})}>No.</Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}
