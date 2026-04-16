import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    const { name, id, picture, days_since_contact, status, tags } = friend;
    const statusStyle = {
        'on-track': 'bg-green-200 text-gray-400',
        'almost-due': 'bg-yellow-500 text-pink-600',
        'overdue': 'bg-pink-100 text-pink-600',
    };
    const tagStyles = {
        'college': 'bg-blue-100 text-blue-600',
        'work': 'bg-purple-100 text-purple-600',
        'close friend': 'bg-pink-100 text-pink-600',
    };
    return (
        <Link to={`/friendDetails/${id}`} className='bg-white border border-gray-200 rounded-xl p-4 sm:p-5 
                        flex flex-col items-center gap-2 w-full hover:shadow-md transition-shadow'>
            <img src={picture} alt={name}
                className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover' />
            <p className='font-bold text-base sm:text-lg md:text-xl text-center'>{name}</p>
            <p className='text-gray-400 text-xs sm:text-sm'>{days_since_contact}d ago</p>
            <span className={`text-xs px-3 py-1 rounded-full font-semibold
                ${statusStyle[status] || 'bg-green-100 text-green-600'}`}>
                {status}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full font-semibold
                ${tagStyles[tags] || 'bg-gray-100 text-gray-600'}`}>
                {tags}
            </span>
        </Link>
    );
};

export default FriendsCard;