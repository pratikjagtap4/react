import React, { createContext } from "react";

const UserContext = createContext({
  users: [],
  setUsers: () => {},
});

export default UserContext;
