import React, { createContext, useContext } from "react";
import { useUsers } from "../facades/useUsers";
import { useUser } from "../facades/useUser";
import { ConfirmDeleteUser } from "../facades/confirmDelete";

const Context = createContext();

export const UsersFeatureProvider = ({ children }) => {
  const { users, isLoading: isUsersLoading, handleDeleteUser } = useUsers();
  const { user, isLoading: isUserLoading, fetchUser, resetUser } = useUser();

  const { isClicked, setClicked } = ConfirmDeleteUser();

  return (
    <Context.Provider
      value={{
        users,
        isUsersLoading,
        user,
        isUserLoading,
        fetchUser,
        handleDeleteUser,
        isClicked,
        setClicked,
        resetUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUsersFeatureProvider = () => {
  return useContext(Context);
};
