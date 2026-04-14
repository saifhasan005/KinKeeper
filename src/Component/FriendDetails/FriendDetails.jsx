import React, { use } from 'react';
import { useParams } from 'react-router';
import { MdOutlineArchive, MdDelete } from "react-icons/md";
import FriendDetailsSidebar from '../FriendDetailsSidebar/FriendDetailsSidebar';

const friendPromise = fetch('/data.json').then((res) => res.json());

const FriendDetails = () => {
    const { id } = useParams();
    const friends = use(friendPromise);
    const expectedFriends = friends.find(fr => fr.id == id);

    if (!expectedFriends) return <p>Friend not found</p>;

    const { name, picture, days_since_contact, status, tags, bio } = expectedFriends;
    const isOverDue = status === 'overdue';

    const tagStyles = {
        'college': 'bg-blue-100 text-blue-600',
        'work': 'bg-purple-100 text-purple-600',
        'close friend': 'bg-pink-100 text-pink-600',
    };

    return (
        <div className='max-w-[1300px] mx-auto px-6 mt-[55px]'>
            <div className='grid grid-cols-1 md:grid-cols-2  items-start'>

                {/* ── left side ── */}
                <div className='flex flex-col items-center gap-4'>
                    <div className='w-[350px] shadow bg-white rounded-xl p-5 flex flex-col items-center gap-2'>
                        <img src={picture} alt={name}
                            className='w-16 h-16 rounded-full object-cover' />
                        <p className='font-bold text-xl'>{name}</p>
                        <p className='text-gray-400 text-sm'>{days_since_contact}d ago</p>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold
                            ${isOverDue ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                            {status}
                        </span>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold
                            ${tagStyles[tags] || 'bg-gray-100 text-gray-600'}`}>
                            {tags}
                        </span>
                        <p className='text-gray-400 text-center text-sm'>{bio}</p>
                    </div>

                    <div className='w-[350px] space-y-3'>
                        <button className='btn w-full'>Snooze for 2 Weeks</button>
                        <button className='btn w-full'><MdOutlineArchive /> Archive</button>
                        <button className='btn w-full text-red-500'><MdDelete /> Delete</button>
                    </div>
                </div>

                {/* ── right side ── */}
                <FriendDetailsSidebar expectedFriends={expectedFriends} />

            </div>
        </div>
    );
};

export default FriendDetails;