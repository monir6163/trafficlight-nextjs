"use client";
import { useEffect, useState } from "react";
import { BsFillSignStopFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { MdElderlyWoman } from "react-icons/md";
export default function TrafficLight() {
  const [light, setLight] = useState("red");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (light === "red") {
        setLight("green");
      }
      if (light === "green") {
        setLight("yellow");
      }
      if (light === "yellow") {
        setLight("red");
      }
    }, getLightDuration(light) * 1000);

    return () => clearTimeout(timer);
  }, [light]);

  const getLightDuration = (currentLight) => {
    if (currentLight === "red") {
      return 7;
    }
    if (currentLight === "green") {
      return 5;
    }
    if (currentLight === "yellow") {
      return 5;
    }
    return 0;
  };

  return (
    <div className="flex flex-col gap-5 border p-10">
      <div className="relative w-14 h-14 md:w-40 md:h-40 rounded-full">
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 -right-44 ${
            light === "red" && "text-white"
          }`}
        >
          {light === "red" && (
            <div className="text-right flex items-center">
              <span className="mr-5 text-2xl">
                <BsFillSignStopFill />
              </span>
              <span className="text-red-500 text-2xl font-bold">STOP</span>
            </div>
          )}
        </div>
        <div
          className={`w-full h-full ${
            light === "red" && "bg-red-500"
          } rounded-full`}
        ></div>
      </div>
      <div className="relative w-14 h-14 md:w-40 md:h-40 rounded-full">
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 -right-44 ${
            light === "yellow" && "text-white"
          }`}
        >
          {light === "yellow" && (
            <div className="text-right flex items-center">
              <span className="mr-5 text-2xl">
                <MdElderlyWoman />
              </span>
              <span className="text-yellow-500 text-2xl font-bold">WAIT</span>
            </div>
          )}
        </div>
        <div
          className={`w-full h-full ${
            light === "yellow" && "bg-yellow-500"
          } rounded-full`}
        ></div>
      </div>
      <div className="relative w-14 h-14 md:w-40 md:h-40 rounded-full">
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 -right-44 ${
            light === "green" && "text-white"
          }`}
        >
          {light === "green" && (
            <div className="text-right flex items-center">
              <span className="mr-5 text-2xl">
                <FaWalking />
              </span>
              <span className="text-green-500 text-2xl font-bold">GO</span>
            </div>
          )}
        </div>
        <div
          className={`w-full h-full ${
            light === "green" && "bg-green-500"
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
}
