import React from "react";

const LoginButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}> Log In</button>
    </div>
  );
};

export default LoginButton;
