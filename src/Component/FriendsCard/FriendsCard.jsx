import React from 'react';

const FriendsCard = ({ friend }) => {
    const { name, picture, days_since_contact, status, tags } = friend;
    const isOverDue = status === 'overdue';

    const tagStyles = {
        'college':      'bg-blue-100 text-blue-600',
        'work':         'bg-purple-100 text-purple-600',
        'close friend': 'bg-pink-100 text-pink-600',
        'childhood':    'bg-yellow-100 text-yellow-600',
        'mentor':       'bg-orange-100 text-orange-600',
        'neighbor':     'bg-teal-100 text-teal-600',
    };

    return (
        <div className='bg-white border border-gray-200 rounded-xl p-4 sm:p-5 
                        flex flex-col items-center gap-2 w-full hover:shadow-md transition-shadow'>
            <img src={picture} alt={name}
                className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover' />
            
            <p className='font-bold text-base sm:text-lg md:text-xl text-center'>{name}</p>
            
            <p className='text-gray-400 text-xs sm:text-sm'>{days_since_contact}d ago</p>

            <span className={`text-xs px-3 py-1 rounded-full font-semibold
                ${isOverDue ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                {status}
            </span>

            <span className={`text-xs px-3 py-1 rounded-full font-semibold
                ${tagStyles[tags] || 'bg-gray-100 text-gray-600'}`}>
                {tags}
            </span>
        </div>
    );
};

export default FriendsCard;