import React, { useEffect } from "react";
import { useUsersFeatureProvider } from "../../providers/UsersFeatureProvider";
// import { useUsers } from "../../facades/useUsers";

import "./UserDetails.css";

const UserDetails = () => {
  const { isUserLoading, user, fetchUser, resetUser } =
    useUsersFeatureProvider();
  // const { users, isLoading: isUsersLoading, handleDeleteUser } = useUsers();

  if (!user) {
    return null;
  }
  return (
    <div className="user-details">
      {isUserLoading || (
        <>
          <h1>{user.username}</h1>
          <p>{user.address.city}</p>
          <button className="close-button" onClick={resetUser}>
            <span>X</span>
          </button>
          <img src="https://photographycourse.net/wp-content/uploads/2020/02/Portrait-vs-Landscape-Featured-Image-3.jpg" />
        </>
      )}
    </div>
  );
};

export default UserDetails;
