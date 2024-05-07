'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const EventCard = ({ imageUrl, date, author, description, title }) => {
    const [enrolled, setEnrolled] = useState(false);

    const handleEnroll = () => {
        // Mettre à jour l'état pour indiquer que l'utilisateur s'est inscrit
        setEnrolled(true);
        // Afficher une alerte
        alert('Enrolled');
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={imageUrl} alt="Event image" className="w-full h-80 object-cover" />
            <div className="p-4">
                <p className="text-sm text-zinc-600 font-bold text-3xl">
                    {title}
                </p>
                <br />
                <p className="text-sm text-zinc-600">
                    {date} • {author} <br/> <br/>
                    {description}
                </p>

                {/* Display description */}
                <p className="text-gray-600"></p>
            </div>
            <div className="flex justify-end space-x-4 p-4">
                <button
                    className={`px-4 py-2 text-sm font-semibold ${
                        enrolled ? 'text-green-600 bg-green-100 border-green-600' : 'text-indigo-600 bg-indigo-100 border-indigo-600'
                    } border rounded-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    onClick={handleEnroll}
                    disabled={enrolled}
                >
                    {enrolled ? 'Enrolled' : 'Enroll'}
                </button>
            </div>
        </div>
    );
};

export default EventCard;
