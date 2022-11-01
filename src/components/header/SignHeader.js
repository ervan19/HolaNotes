import React from "react";
import { LocaleConsumer } from "../../context/LocaleContext";
import ThemeBtn from "../button/ThemeBtn";
import TranslateBtn from "../button/TranslateBtn";
import Navigation from "./Navigation";

export default function SignHeader() {
  return (
    <LocaleConsumer>
      {({ toggleLocale }) => {
        return (
          <header className="sign-header">
            <Navigation />
            <div className="header-right">
              <ThemeBtn />
              <TranslateBtn toggleLocale={toggleLocale} />
            </div>
          </header>
        );
      }}
    </LocaleConsumer>
  );
}
