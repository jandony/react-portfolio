import React, { useState, useEffect } from "react";
import WeatherBanner from "./weather-banner";

export default function WeatherData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch("http://api.weatherapi.com/v1/current.json?key=2d23698eb6024be9bc0225452241901&q=Denver&aqi=yes");
                const result = await response.json();
                setData(result);
                weatherData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return <></>;
}
