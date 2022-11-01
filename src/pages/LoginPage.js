import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/form/LoginInput";
import { login } from "../utils/api";
import { LocaleConsumer } from "../context/LocaleContext";
import { loginText } from "../utils/content";
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="sign-page login-page">
            <h2>{loginText[locale].heading}</h2>
            <LoginInput login={onLogin} />
            <p>
              {loginText[locale].text}
              <Link to="/register"> {loginText[locale].link}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
