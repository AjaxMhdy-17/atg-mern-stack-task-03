import React from "react";
import SingleUser from "../singleUser/SingleUser";
import './user-list.css'

const UserList = ({ users , getSingleUser }) => {
  return (
    <div className="user__main">
        <div className="user__main__heading">
            <h3>user list</h3>
        </div>
      <div>
        {users.map(user => (
            <SingleUser key={user.id} user={user} getSingleUser={getSingleUser}/>
        ))}
      </div>
    </div>
  );
};

export default UserList;
