import React from "react";

import "./UsersList.css";
import { useFilteredUsers } from "../../facades/useFilteredUsers";
import { useUsersFeatureProvider } from "../../providers/UsersFeatureProvider";
import { ConfirmDeleteUser } from "../../facades/confirmDelete";
import Loading from "../../../../components/loading/Loading";
import Trash from "../trash/Trash";
import Confirm from "../confirmation-window/confirm";

const UsersList = () => {
  const { isUsersLoading, users, fetchUser, handleDeleteUser } =
    useUsersFeatureProvider();
  const { query, filteredUsers, triggerUsersFilter } = useFilteredUsers(users);

  const { isClicked, setClicked } = ConfirmDeleteUser();

  console.log(isClicked);

  if (isUsersLoading) {
    return <Loading />;
  }

  return (
    <ul className="users-list">
      <input value={query} onChange={triggerUsersFilter} placeholder="Search" />
      {filteredUsers.map((user, idx) => (
        <li
          key={user.id}
          style={{
            animationDelay: `${idx * 0.1}s`,
          }}
          className="user-list-item"
          onClick={() => fetchUser(user.id)}
        >
          <figure className="user-avatar">
            <img src="https://i.pinimg.com/564x/07/1b/97/071b976984be61fa44c2e9a8d99238ad.jpg" />
          </figure>
          <div className="user-list-item-container">
            <header>
              <span className="username">{user.username}</span>
              <span className="date">{new Date().toDateString()}</span>
            </header>
            <span className="message">{user.address.street}</span>
            <Trash
              className="trash-icon"
              onClick={(userId) => {
                handleDeleteUser(userId);
                setClicked(true);
              }}
              userId={user.id}
            />
          </div>
        </li>
      ))}
      {isClicked && (
        <>
          <Confirm />
        </>
      )}
    </ul>
  );
};

export default UsersList;
