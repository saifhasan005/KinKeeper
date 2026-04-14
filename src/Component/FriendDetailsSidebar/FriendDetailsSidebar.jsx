import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const FriendDetailsSidebar = ({ expectedFriends }) => {
    return (
        <div className='pt-2'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='shadow rounded-xl text-center p-6'>
                    <p className='font-bold text-lg'>{expectedFriends.days_since_contact}</p>
                    <p className='text-gray-400 text-sm'>Daily Since Contact</p>
                </div>
                <div className='shadow rounded-xl text-center p-6'>
                    <p className='font-bold text-lg'>{expectedFriends.goal}</p>
                    <p className='text-gray-400 text-sm'>Goal(days)</p>
                </div>
                <div className='shadow rounded-xl text-center p-6'>
                    <p className='font-bold text-lg'>{expectedFriends.next_due_date}</p>
                    <p className='text-gray-400 text-sm'>Next Due</p>
                </div>
            </div>
            <div className='shadow p-6 mt-[25px]  flex justify-between'>
                <div>
                    <p className='font-semibold text-[#244d3f]'>Relationship Goal</p>
                    <p className='text-gray-400'>Connect every {expectedFriends.days_since_contact}</p>
                </div>
                <button className='btn rounded-lg'>Edit</button>
            </div>

            <div className='shadow mt-[25px] p-6'>
                <p className='text-[#244d3f] font-bold text-lg mb-[12px]'>Quick Check-in</p>
                <div className='flex gap-10 ml-[60px]'>
                    <span className='shadow w-[118px] items-center p-4 flex flex-col'><IoCall /> Call</span>
                    <span className='shadow w-[118px] items-center p-4 flex flex-col'><MdMessage /> Message</span>
                    <span className='shadow w-[118px] items-center p-4 flex flex-col'><FaVideo /> Video Call</span>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsSidebar;