import React, { useContext, useEffect, useState } from 'react';
import { friendContext } from '../../Context/FriendContext';
import { IoCall } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';

const Timeline = () => {
    const { callList, messageList, videoCallList } = useContext(friendContext);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const date = new Date();

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    };
    return (
        <div className='container mx-auto px-4 py-4'>
            <h1 className="text-2xl font-bold mb-2">Timeline</h1>
            <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-8 px-4 py-2 border rounded-lg">
                <option value="all">All Activities</option>
                <option value="call">Calls</option>
                <option value="message">Messages</option>
                <option value="video">Video Calls</option>
            </select>
            {(filter === 'all' || filter === 'call') && callList.length > 0 && (
                <div className="mb-8">
                    <div className='flex items-center gap-2'>
                        <IoCall/> <h2 className="text-lg font-semibold mb-2">Calls ({callList.length})</h2>
                    </div>
                    {callList.map(friend => (
                        <div key={friend.id} className="shadow rounded-lg p-3 flex items-center gap-3 mb-2">
                            <img src={friend.picture} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold">{friend.name}</p>
                                <p className='text-blue-400 text-[14px] font-semibold'>Called With {friend.name}</p>
                                <p className="text-xs  text-gray-400">Date: {date.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {(filter === 'all' || filter === 'message') && messageList.length>0 &&(
                <div className="mb-8">
                    <div className='flex items-center gap-2'>
                        <MdMessage/>
                        <h2 className="text-lg font-semibold mb-2">Messages ({messageList.length})</h2>
                    </div>
                    {messageList.map(friend => (
                        <div key={friend.id} className="shadow rounded-lg p-3 flex items-center gap-3 mb-2">
                            <img src={friend.picture} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold">{friend.name}</p>
                                <p className='font-semibold text-green-500 text-[14px]'>Messaged with {friend.name}</p>
                                <p className="text-xs text-gray-400">Date: {date.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {(filter === 'all' || filter === 'video') && videoCallList.length>0 &&(
                <div className="mb-8">
                    <div className='flex items-center gap-2'>
                        <FaVideo/>
                        <h2 className="text-lg font-semibold mb-2">Video Calls ({videoCallList.length})</h2>
                    </div>
                    {videoCallList.map(friend => (
                        <div key={friend.id} className="shadow rounded-lg p-3 flex items-center gap-3 mb-2">
                            <img src={friend.picture} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold">{friend.name}</p>
                                <p className='font-semibold text-purple-500 text-[14px]'>Video Called with {friend.name}</p>
                                <p className="text-xs text-gray-400">Date: {date.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
           
        </div>
    );
};

export default Timeline;