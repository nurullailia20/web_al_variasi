import React from "react";
import Loginpage from "../../components/Loginpage";
// import RegisterForm from "../../components/Loginpage/RegisterForm";
import LoginForm from "../../components/Loginpage/LoginForm";
// import {useToggleForm } from "../../hooks/useToggleForm";

function login() {
  // const { isRegister} = useToggleForm();

  // return <Loginpage>{isRegister ? <LoginForm /> : <RegisterForm />}</Loginpage>;
  return <Loginpage>
    {<LoginForm/>}
  </Loginpage>
}

export default login;