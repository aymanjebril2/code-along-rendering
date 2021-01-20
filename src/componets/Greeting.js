import React from "react";
import UserGreeting from "./UserGreeting";
import GuessGreeting from "./GuessGreeting";

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuessGreeting />;
  }
};

export default Greeting;
