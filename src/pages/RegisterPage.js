import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/form/RegisterInput";
import { LocaleConsumer } from "../context/LocaleContext";
import { register } from "../utils/api";
import { registerText } from "../utils/content";

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="sign-page register-page">
            <h2>{registerText[locale].heading}</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>
              {registerText[locale].textLink}
              <Link to="/"> {registerText[locale].link} </Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
