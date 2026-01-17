import ExploreBtn from "@/components/ExploreBtn";

const Welcome = () => {
    return (
        <section>
            <h1 className={"text-center capitalize"}>The hub for every dev <br/> Events you can&#39;t miss!</h1>
            <p className={"text-center"}>Hackathons, Meetup, and Conferences All in one place</p>
            <ExploreBtn/>
            <div className={"mt-20 space-y-7 h-3"}>
                <h3>
                    Featured Events
                </h3>
                <ul className={"events"}>
                    {events.map((event) => (
                        <li key={event.title}>
                            <EventCard  {...event}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
)
}

import React from 'react'

import EventCard from "@/components/EventCard";
import {events} from "@/lib/constants";
export default Welcome
