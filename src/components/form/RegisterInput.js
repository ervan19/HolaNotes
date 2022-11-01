import { React, useState } from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { LocaleConsumer } from "../../context/LocaleContext";
import { registerText } from "../../utils/content";
import NameField from "../fields/NameField";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";

function RegisterInput({ register }) {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPassword] = useInput("");
  const [passValidate, setPassValidate] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPassValidate(true);
    } else {
      setPassValidate(false);
      register({ name, email, password });
    }
  };

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form onSubmit={onSubmitHandler} className="login-input">
            <NameField
              label={registerText[locale].name}
              placeholder={registerText[locale].name}
              name={name}
              handleNameChange={handleNameChange}
            />
            <EmailField email={email} handleEmailChange={handleEmailChange} />
            <div className="pass-field">
              <PasswordField
                label={registerText[locale].passwordText}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
              <p className="pass-validate">At least must 6 character</p>
            </div>
            <div className="pass-field">
              <PasswordField
                label={registerText[locale].confirmPassword}
                password={confirmPassword}
                handlePasswordChange={handleConfirmPassword}
              />
              <p className="pass-validate error">
                {passValidate ? "Kata sandi tidak sesuai" : ""}
              </p>
            </div>
            <button> {registerText[locale].buttonText}</button>
          </form>
        );
      }}
    </LocaleConsumer>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
