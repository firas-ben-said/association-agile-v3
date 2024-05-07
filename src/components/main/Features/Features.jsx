import React from 'react';
import EventCard from '../Event/EventCard';
import {events} from '../Event/data';

export default function Features() {
    return (
        <section className={"bg-gray-800 text-white"} id='event'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold tracking-tight text-Black sm:text-6xl pb-10">Event</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                    {/* Map over the events object and render each EventCard dynamically */}
                    {events.map(event => (
                        <EventCard
                            key={event.title} // Use a unique key for each EventCard
                            imageUrl={event.imageUrl}
                            date={event.date}
                            author={event.author}
                            description={event.description} // Make sure title is passed here
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}