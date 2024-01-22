import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { SunIcon, CloudArrowDownIcon, Squares2X2Icon, CloudIcon, BoltIcon } from "@heroicons/react/24/outline";

export default function WeatherBanner() {
    const [data, setData] = useState("");
    const [temp, setTemp] = useState("");
    const [condition, setCondition] = useState("");

    const today = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    const todayDate = today.toLocaleDateString("en-US", options);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch("http://api.weatherapi.com/v1/current.json?key=2d23698eb6024be9bc0225452241901&q=Denver&aqi=yes");
                const result = await response.json();

                // List of Weather Conditions - https://www.weatherapi.com/docs/weather_conditions.json
                let testCondition = "Possible thunder today";
                let thisCondition = result.current.condition.text;
                let conditionArray = thisCondition.split(" ");
                let newConditionArray = conditionArray.map((item) => item.toLowerCase());
                const weatherCategories = {
                    sunny: ["sunny", "clear"],
                    rainy: ["rain", "mist", "drizzle", "showers"],
                    snowy: ["snow", "sleet", "blizzard", "ice"],
                    cloudy: ["cloudy", "overcast", "fog"],
                    thunder: ["thunder"],
                };

                // Check category
                let checkCategory = Object.keys(weatherCategories).find((category) => weatherCategories[category].some((value) => newConditionArray.includes(value)));

                // Assign weather condition
                switch (checkCategory) {
                    case "sunny":
                        setCondition("sunny");
                        break;
                    case "rainy":
                        setCondition("rainy");
                        break;
                    case "snowy":
                        setCondition("snowy");
                        break;
                    case "cloudy":
                        setCondition("cloudy");
                        break;
                    case "thunder":
                        setCondition("thunder");
                        break;
                    default:
                        console.log("It's just a normal day.");
                }

                // Set the data and temp
                setData(result);
                setTemp(result.current.temp_f);

                console.log(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        // <div className="flex flex-col md:flex-row gap-4 rounded-lg bg-gray-100 p-6 my-6 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className={clsx("flex flex-col md:flex-row gap-4 rounded-lg bg-gray-100 p-6 my-6 bg-gradient-to-r from-yellow-500 to-orange-500", { "bg-gradient-to-r from-teal-500 to-purple-500": temp <= 32  || condition == "rainy" || condition == "snowy" }, { "bg-gradient-to-r from-yellow-500 to-gray-800": condition == "thunder" })}>
            <div>
                <SunIcon className={clsx("w-full text-white block", { "hidden": condition != "sunny" })} />
                <CloudArrowDownIcon className={clsx("w-full text-white block", { "hidden": condition != "rainy" })} />
                <Squares2X2Icon className={clsx("w-full text-white block", { "hidden": condition != "snowy" })} />
                <CloudIcon className={clsx("w-full text-white block", { "hidden": condition != "cloudy" })} />
                <BoltIcon className={clsx("w-full text-white block", { "hidden": condition != "thunder" })} />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
                <h2 className="text-white uppercase text-sm mb-6">{condition}</h2>
                <p className="text-white text-5xl">{data ? data.location.name + ", " + data.location.region : "loading data..."}</p>
                <p className="text-white text-xl">
                    Temp: {data ? data.current.temp_f : "loading data..."}°F {data ? "(" + data.current.temp_c : ""}°C)
                </p>
                <p className="text-white mt-6">{todayDate ? todayDate : ""}</p>
            </div>
        </div>
    );
}
