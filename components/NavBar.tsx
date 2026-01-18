"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

const NavBar = () => {
    const handleNavClick = (linkName: string) => {
        posthog.capture("nav_link_clicked", {
            link_name: linkName,
            link_location: "header_nav",
        });
    };

    return (
        <header>
            <nav>
                <Link href="/" className={"logo"} onClick={() => handleNavClick("logo")}>
                <Image src={"/icons/logo.png"} alt={"site logo"} width={24} height={24}/>
                <p>Dev Event</p></Link>
                <ul>
                    <Link href={"/"} onClick={() => handleNavClick("home")}>Home</Link>
                    <Link href={"/"} onClick={() => handleNavClick("events")}>Events</Link>
                    <Link href={"/"} onClick={() => handleNavClick("create_event")}>Create Event</Link>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
