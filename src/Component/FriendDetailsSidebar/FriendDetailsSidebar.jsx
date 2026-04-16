import React, { useContext,  } from 'react';
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { friendContext } from '../../Context/FriendContext';

const FriendDetailsSidebar = ({ expectedFriends }) => {
    const  {days_since_contact,goal,next_due_date } = expectedFriends;
    const {handleCall, handleMessage, handleVideoCall} = useContext(friendContext);


    return (
        <div className='pt-2'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='shadow rounded-xl text-center p-6'>
                    <p className='font-bold text-lg'>{days_since_contact}</p>
                    <p className='text-gray-400 text-sm'>Daily Since Contact</p>
                </div>
                <div className='shadow rounded-xl text-center p-6'>
                    <p className='font-bold text-lg'>{goal}</p>
                    <p className='text-gray-400 text-sm'>Goal(days)</p>
                </div>
                <div className='shadow rounded-xl text-center p-6'>
                    <p className='font-bold text-lg'>{next_due_date}</p>
                    <p className='text-gray-400 text-sm'>Next Due</p>
                </div>
            </div>
            <div className='shadow p-6 mt-[25px]  flex justify-between'>
                <div>
                    <p className='font-semibold text-[#244d3f]'>Relationship Goal</p>
                    <p className='text-gray-400'>Connect every {days_since_contact} days</p>
                </div>
                <button className='btn rounded-lg'>Edit</button>
            </div>

            <div className='shadow mt-[25px] p-6'>
                <p className='text-[#244d3f] font-bold text-lg mb-[12px]'>Quick Check-in</p>
                <div className='space-y-5 flex-wrap sm:flex gap-10 ml-[60px]'>
                    <button onClick={()=> handleCall(expectedFriends)} className='shadow w-[118px] items-center p-4 flex flex-col'><IoCall /> Call</button>
                    <button onClick={()=>handleMessage(expectedFriends)} className='shadow w-[118px] items-center p-4 flex flex-col'><MdMessage /> Message</button>
                    <button onClick={()=>handleVideoCall(expectedFriends)} className='shadow w-[118px] h-[70px] items-center p-4 flex flex-col'><FaVideo /> Video Call</button>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsSidebar;