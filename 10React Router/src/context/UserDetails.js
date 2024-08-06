import { createContext, useContext } from "react";

const userContext = createContext({
  education: [],
});

const UserProvider = userContext.Provider;

function useUserDetails() {
  return useContext(userContext);
}

export { userContext, UserProvider, useUserDetails };
