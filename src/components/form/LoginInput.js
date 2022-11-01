import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { LocaleConsumer } from "../../context/LocaleContext";
import { loginText } from "../../utils/content";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";

function LoginInput({ login }) {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form onSubmit={onSubmitHandler} className="login-input">
            <EmailField email={email} handleEmailChange={handleEmailChange} />
            <PasswordField
              label={loginText[locale].passwordText}
              password={password}
              handlePasswordChange={handlePasswordChange}
            />
            <button>{loginText[locale].buttonText}</button>
          </form>
        );
      }}
    </LocaleConsumer>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
