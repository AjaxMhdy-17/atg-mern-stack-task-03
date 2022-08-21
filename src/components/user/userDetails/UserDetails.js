import React from "react";
import RoundSpinner from "../../ui/RoundSpinner/RoundSpinner";
import "./user-detail.css";

const UserDetails = ({ userDetail, loading }) => {
  console.log(userDetail);
  // const { avatar, jobTitle, Bio, profile } = userDetail;
  if (userDetail === null) {
    return (
      <div className="null_user">
        <div className="null__user__msg">
          No User Has Been Selected , Please Select A User To View User Details.
        </div>
      </div>
    );
  }
  if (loading === true) {
    return <RoundSpinner />;
  }
  return (
    <div className="user__detail__box">
      <div className="user__detail__heading">
        <h3>user details</h3>
      </div>
      <div className="user__detail">
        <div className="user__detail__info">
          <div className="user__detail__avatar">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              className="img-fluid"
              alt="user_detail_image"
            />
            {/* here userDetail.avatar was not loading that's why a use another image url  */}
            {/* <img
              src={userDetail.avatar}
              className="img-fluid"
              alt="user_detail_image"
            /> */}
          </div>
          <div className="user__username">
            @{userDetail.profile != null && userDetail.profile.username}
          </div>
          <div className="user__bio">
            <span>{userDetail.Bio != null && userDetail.Bio}</span>
          </div>
          <div className="user__info">
            <h4>full name</h4>
            <div className="user__info__slice">
              <span>
                {" "}
                {userDetail.profile != null && userDetail.profile.firstName}
              </span>
              <span>
                {" "}
                {userDetail.profile != null && userDetail.profile.lastName}
              </span>
            </div>
          </div>
          <div className="user__info">
            <h4>job title</h4>
            <div className="user__info__slice">{userDetail.jobTitle}</div>
          </div>
          <div className="user__info">
            <h4>email</h4>
            <div className="user__info__slice">{userDetail.profile.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
