import React from "react";

const Login = (props) => {
  const desktopClass = props.screen ? `${props.screen} btns` : 'btns';

  return (
    <div className={desktopClass}>
      <button className="login-btn">Login</button>
      <button className="btn signup">Sign up</button>
    </div>
  );
};

export default Login;