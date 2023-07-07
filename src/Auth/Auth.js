import React from "react";
import { useUserContext } from "./Context/UserContext";
import Dashboard from "./Dashboard";
import SignIn from './SignIn';

const Auth = () => {
  const { user } = useUserContext();
  return <div>{user.isUserLoggedIn ? <Dashboard /> : <SignIn />}</div>;
};

export default Auth;
