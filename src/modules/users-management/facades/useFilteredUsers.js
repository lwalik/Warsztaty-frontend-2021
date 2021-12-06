import { useMemo, useState } from "react";

const filterUsers = (users, query) => {
  if (query === "") {
    return users;
  }

  const queryLowerCased = query.toLowerCase();

  return users.filter(
    (user) => user.username.toLowerCase() === queryLowerCased
  );
};

export const useFilteredUsers = (users) => {
  const [query, setQuery] = useState("");

  const triggerUsersFilter = (e) => {
    setQuery(e.target.value);
  };

  const filteredUsers = useMemo(
    () => filterUsers(users, query),
    [users, query]
  );

  return { query, filteredUsers, triggerUsersFilter };
};
