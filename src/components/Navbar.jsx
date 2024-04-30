import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-zinc-100">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex items-center justify-between border-b-2 py-4">
                    <div className="flex space-x-4">
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-300">Dashboard</button>
                        <button className="text-zinc-800 px-4 py-2 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 rounded-md">Team</button>
                        <button className="text-zinc-800 px-4 py-2 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 rounded-md">Projects</button>
                        <button className="text-zinc-800 px-4 py-2 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 rounded-md">Calendar</button>
                    </div>
                    <div className="flex-grow max-w-lg mx-10">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full border-5 border-zinc-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                            <Link href="/login" legacyBehavior>
                                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Log in
                                </button>
                            </Link>
                            <Link href="/register" legacyBehavior>
                                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Sign In
                                </button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}
