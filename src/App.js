import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailNotesWrapper from "./pages/DetailNotes";
import NotFound from "./pages/NotFound";
import NotesInputWrapper from "./pages/NotesInput";
import { ThemeProvider } from "./context/ThemeContext";
import { LocaleProvider } from "./context/LocaleContext";
import RegisterPage from "./pages/RegisterPage";
import { deleteNote, getUserLogged, putAccessToken } from "./utils/api";
import LoginPage from "./pages/LoginPage";
import SignHeader from "./components/header/SignHeader";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      themeContext: {
        theme: localStorage.getItem("theme") || "light",
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme =
              prevState.themeContext.theme === "light" ? "dark" : "light";

            localStorage.setItem("theme", newTheme);
            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale =
              prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
    document.documentElement.setAttribute(
      "data-theme",
      this.state.themeContext.theme
    );
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeContext.theme !== this.state.themeContext.theme) {
      document.documentElement.setAttribute(
        "data-theme",
        this.state.themeContext.theme
      );
    }
  }

  render() {
    const loginURL = "/*";
    const registerURL = "/register";
    const homeURL = "/";
    const detailNotesURL = "/notes/:id";
    const noteFormURL = "/notes/new";
    const notFoundURL = "*";
    if (this.state.initializing === null) {
      return null;
    }
    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <ThemeProvider value={this.state.themeContext}>
            <div className="App">
              <SignHeader />
              <main>
                <Routes>
                  <Route
                    path={loginURL}
                    element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                  />
                  <Route path={registerURL} element={<RegisterPage />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </LocaleProvider>
      );
    }
    return (
      <LocaleProvider value={this.state.localeContext}>
        <ThemeProvider value={this.state.themeContext}>
          <div className="App">
            <Routes>
              <Route
                exact
                path={homeURL}
                element={<HomePage onLogout={this.onLogout} />}
              />
              <Route
                exact
                path={detailNotesURL}
                element={<DetailNotesWrapper />}
              />
              <Route exact path={noteFormURL} element={<NotesInputWrapper />} />
              <Route path={notFoundURL} element={<NotFound />} />
            </Routes>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default App;
