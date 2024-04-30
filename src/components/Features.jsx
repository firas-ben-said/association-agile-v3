import React from 'react';
import EventCard from './EventCard';

export default function Features() {
    return (
        <section className={"bg-gray-800 text-white"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold tracking-tight text-Black sm:text-6xl pb-10">Event</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                    <EventCard
                        imageUrl="https://placehold.co/600x400"
                        date="Mar 16, 2020"
                        author="Michael Foster"
                        title="Boost your conversion rate"
                    />
                    <EventCard
                        imageUrl="https://placehold.co/600x400"
                        date="Mar 10, 2020"
                        author="Lindsay Walton"
                        title="How to use search engine optimization "
                    />
                    <EventCard
                        imageUrl="https://placehold.co/600x400"
                        date="Feb 12, 2020"
                        author="Tom Cook"
                        title="Improve your customer experience"
                    />
                </div>
            </div>

        </section>
        );
}
