import React, { useState } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogOutButton from "./LogOutButton";

const LoginControal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLoggoutClick = () => {
    setIsLoggedIn(false);
  };
  let button;
  if (isLoggedIn) {
    button = <LogOutButton onClick={handleLoggoutClick} />;
  } else {
    button = <LoginButton onClick={handleLogginClick} />;
  }
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
};

export default LoginControal;
