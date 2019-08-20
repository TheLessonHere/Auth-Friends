import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const FriendsList = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      setFriends(res.data)
    })
    .catch(err => {
      console.log('Friends request not successful', err)
    })
  }, [ friends ])

  return (
   <div className='friends-container'>
      {friends.length > 1 ? friends.map(friend => {
        return (<div key={friend.id}>
          <h2>{friend.name}</h2>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>)
      }) : () => {return <div>You need more friends!</div>}}
   </div>
  );
};

export default FriendsList;