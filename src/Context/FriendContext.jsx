import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const friendContext = createContext();
const FriendContext = ({ children }) => {
    const [callList, setCallList] = useState([]);
    const [messageList, setMessageList] = useState([])
    const [videoCallList, setVideoCallList] = useState([])
    const handleCall = (currentFriend) => {
        // console.log(currentFriend, 'currentFriend');
        const existsFriends = callList.find(friend => friend.id === currentFriend.id);
        if (existsFriends) {
            toast.warn(`${currentFriend.name} is already called`);
        } else {
            setCallList([...callList, currentFriend]);
            toast.success(`${currentFriend.name} called successful`);
        }
    };
    const handleMessage = (currentFriend) => {
        const existsFriends = messageList.find(friend => friend.id === currentFriend.id);
        if (existsFriends) {
            toast.warn(`${currentFriend.name} is already messaged`);
        } else {
            setMessageList([...messageList, currentFriend]);
            toast.success(`${currentFriend.name} messaged successful`);
        }
    };
    const handleVideoCall = (currentFriend) => {
        const existsFriends = videoCallList.find(friend => friend.id === currentFriend.id);
        if (existsFriends) {
            toast.warn(`${currentFriend.name} is already video called`);
        } else {
            setVideoCallList([...videoCallList, currentFriend]);
            toast.success(`${currentFriend.name} video called successful`);
        }
    };
    const data = {
        callList,
        messageList,
        videoCallList,
        setMessageList,
        setVideoCallList,
        setCallList,
        handleCall,
        handleMessage,
        handleVideoCall

    }
    return <friendContext.Provider value={data}>{children}</friendContext.Provider>
};

export default FriendContext;