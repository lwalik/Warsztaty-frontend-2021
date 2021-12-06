import { useState, useEffect } from "react";

import { getUsers } from "../services/usersService";

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const handleDeleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading, handleDeleteUser, setIsLoading };
};
