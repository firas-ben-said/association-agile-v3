import React from 'react';
import Link from 'next/link';

const EventCard = ({ imageUrl, date, author, title }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={imageUrl} alt="Event image" className="w-full h-80 object-cover" />
            <div className="p-4">
                <p className="text-sm text-zinc-600">{date} • {author}</p>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
            </div>
            <div className="flex justify-end space-x-4 p-4">
                <Link href="/login" passHref>
                    <button className="px-4 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Log in
                    </button>
                </Link>
                <Link href="/register" passHref>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
