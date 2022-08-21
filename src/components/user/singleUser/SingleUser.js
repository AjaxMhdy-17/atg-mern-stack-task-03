import React from "react";

import "./single-user.css";

const SingleUser = ({ user, getSingleUser }) => {
  const { profile } = user;
  // const { avatar } = user;
  return (
    <div onClick={() => getSingleUser(user.id)} className="single__user">
      <div className="single__image">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          className="img-fluid"
          alt="user_image"
        />
        {/* here userDetail.avatar was not loading that's why a use another image url  */}

        {/* <img
          src={avatar}
          className="img-fluid"
          alt="user_image"
        /> */}
      </div>
      <div>
        <span>{profile.firstName}</span>
        <span> </span>
        <span>{profile.lastName}</span>
      </div>
    </div>
  );
};

export default SingleUser;
