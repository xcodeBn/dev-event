'use client'

import React from 'react'
import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button onClick={
            ()=>{console.log("btn clicked")
        }} type={"button"} id={"explore-btn"}  className={"mt-7 mx-auto"}>
            <a href={"#events"}>Explore Events
            <Image src={"/icons/arrow-down.svg"} alt={"arrow down icon"} width={24} height={24}/></a>
        </button>
    )
}
export default ExploreBtn
