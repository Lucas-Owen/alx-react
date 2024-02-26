import React from "react";

export const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
}

export function defautlLogOut() {
}

const AppContext = React.createContext({user: defaultUser, logOut: defautlLogOut})
export default AppContext;
