'use client'

import React from 'react'
import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
    const handleClick = () => {
        console.log("btn clicked");
        posthog.capture("explore_events_clicked", {
            button_location: "hero_section",
        });
    };

    return (
        <button onClick={handleClick} type={"button"} id={"explore-btn"}  className={"mt-7 mx-auto"}>
            <a href={"#events"}>Explore Events
            <Image src={"/icons/arrow-down.svg"} alt={"arrow down icon"} width={24} height={24}/></a>
        </button>
    )
}
export default ExploreBtn
