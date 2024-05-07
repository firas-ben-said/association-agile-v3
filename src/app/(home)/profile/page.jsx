'use client';

import { useState } from 'react';
import { profile } from '@/components/main/Event/data';
import Footer from '@/components/main/Footer/Footer';
import { auth } from '@/lib/auth';

const Profile = async () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const session = await auth();
    console.log(session);
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 xl:px-8 max-w-full">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="flex flex-row pb-8 max-w-full">
                    {profile.map((profileData, index) => (
                        <div key={index} className="flex flex-row p-8">
                            <div className="p-14">
                                <img src={session.user.img || "/noavatar.png"} className="rounded-full w-100 h-80 border-4 border-white" />
                            </div>
                            <div className="w-4/5 bg-white shadow-md rounded-xl p-6">
                                <div className="mb-4">
                                    <h2 className="text-lg font-semibold">Profile</h2>
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-zinc-600">Full-Name</span>
                                            <span className="text-zinc-900">{session.user.fullname}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-zinc-600">Username</span>
                                            <span className="text-zinc-900">{session.user.username}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-zinc-600">Role</span>
                                            <span className="text-zinc-900">{session.user?.isAdmin ? "Admin" : "User"}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-zinc-600">Date of birth</span>
                                            <span className="text-zinc-900">{profileData.dob}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-zinc-600">Genre</span>
                                            <span className="text-zinc-900">{profileData.genre}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold">Coordonnées</h2>
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-zinc-600">E-mail</span>
                                            <span className="text-zinc-900">{session.user.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-zinc-600">Téléphone</span>
                                            <span className="text-zinc-900">{session.user.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;