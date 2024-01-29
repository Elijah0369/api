import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <div className="card-list">
        {listOfUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

