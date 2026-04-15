import React, { useContext } from 'react';
import { friendContext } from '../../Context/FriendContext';
import { IoCall } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';

const Timeline = () => {
    const {callList, messageList, videoCallList } = useContext(friendContext);
    // console.log(storedFriend,setVideoCallList,setMessageList, 'storedFriend');
    return (
        <div className='container mx-auto'>
            <h1 className="text-3xl font-bold mb-8">Timeline</h1>
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                    <IoCall className="text-green-500 text-2xl" />
                    <h2 className="text-xl font-semibold">Calls ({callList.length})</h2>
                </div>
                {callList.length === 0 ? (
                    <p className="text-gray-400">Not Found Any Video Call</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {callList.map(friend => (
                            <div key={friend.id} className="shadow rounded-xl p-4 flex items-center gap-3">
                                <img src={friend.picture} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">{friend.name}</p>
                                    <p className="text-sm text-green-500">Called</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                    <MdMessage className="text-blue-500 text-2xl" />
                    <h2 className="text-xl font-semibold">Messages ({messageList.length})</h2>
                </div>
                {messageList.length === 0 ? (
                    <p className="text-gray-400">Not Found Any Message History</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {messageList.map(friend => (
                            <div key={friend.id} className="shadow rounded-xl p-4 flex items-center gap-3">
                                <img src={friend.picture} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">{friend.name}</p>
                                    <p className="text-sm text-blue-500">Messaged</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                    <FaVideo className="text-purple-500 text-2xl" />
                    <h2 className="text-xl font-semibold">Video Calls ({videoCallList.length})</h2>
                </div>
                {videoCallList.length === 0 ? (
                    <p className="text-gray-400">Not Found Any Video Call History</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {videoCallList.map(friend => (
                            <div key={friend.id} className="shadow rounded-xl p-4 flex items-center gap-3">
                                <img src={friend.picture} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">{friend.name}</p>
                                    <p className="text-sm text-purple-500">Video Called</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;