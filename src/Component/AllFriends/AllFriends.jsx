import React, { useState, useEffect } from 'react';
import FriendsCard from '../FriendsCard/FriendsCard';

const AllFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFriends = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            setFriends(data);
            setLoading(false)
        };

        fetchFriends();
    }, []);
    if (loading) {
        return (
            <div className='flex justify-center items-center h-40'>
                <span className='loading loading-spinner loading-lg text-success'></span>
            </div>
        );
    }
    return (
        <div>
            <p className='font-bold  text-3xl text-center mt-[45px]'>Your Friends</p>
            <div className='grid  grid-cols-1 container mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-6'>
                {friends.map((friend, ind) => (
                    <FriendsCard friend={friend} key={ind}></FriendsCard>
                ))}
            </div>
        </div>
    );
};

export default AllFriends;