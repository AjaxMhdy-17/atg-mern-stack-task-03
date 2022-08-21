import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserDetails from "./user/userDetails/UserDetails";
import UserList from "./user/userList/UserList";
import axios from "axios";
import Loader from "./ui/Loader/Loader";
import ErrorMsg from "./ui/errorMsg/ErrorMsg";

const UserIndex = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setError("");
      })
      .catch((err) => {

        setError("No Data To Show");
      });
  }, []);

  const getSingleUser = (id) => {
    setLoading(true);
    const user = users.find((us) => us.id === id);
    setUserDetail(user);
    setLoading(false);
  };

  if (error !== "") {
    return <ErrorMsg error={error} />;
  }

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <UserList users={users} getSingleUser={getSingleUser} />
          </div>
          <div className="col-md-6">
            <UserDetails userDetail={userDetail} loading={loading}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserIndex;
