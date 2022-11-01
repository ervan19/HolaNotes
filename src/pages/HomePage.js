import React, { useEffect, useState } from "react";
import HeaderApp from "../components/header/HeaderApp";
import NoteList from "../components/notes/NotesList";
import { getActiveNotes, getArchivedNotes } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../context/LocaleContext";
import { tabs } from "../utils/content";
import Tabs from "../components/button/Tabs";

function HomePage({ onLogout }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notesActive, setNotesActive] = useState([]);
  const [notesArchieve, setNotesArchive] = useState([]);
  const [toggleTabs, setToggleTabs] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotesActive(data);
    });
    getArchivedNotes().then(({ data }) => {
      setNotesArchive(data);
    });
    setLoading(false);
  }, []);

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    changeSearchParams(keyword);
  };

  const onSearchShowHandler = () => {
    setShowSearch(true);
  };

  const onBlurHandler = () => {
    setShowSearch(false);
  };

  const onToggleStateHandler = (index) => {
    setToggleTabs(index);
  };
  const filteredNotesActive = notesActive.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  const filteredNotesArchieve = notesArchieve.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <HeaderApp
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
              show={showSearch}
              onSearchShow={onSearchShowHandler}
              onBlurHandler={onBlurHandler}
              onLogoutHandler={onLogout}
            />
            <Tabs
              toggleTabs={toggleTabs}
              onToggleStateActive={() => {
                onToggleStateHandler(1);
              }}
              onToggleStateArchieve={() => {
                onToggleStateHandler(2);
              }}
              headingActive={tabs[locale].active}
              headingArchieve={tabs[locale].archive}
            />
            {loading ? (
              <p>Loading...</p>
            ) : (
              <NoteList
                notesActive={filteredNotesActive}
                notesArchieve={filteredNotesArchieve}
                tabsCategory={toggleTabs}
              />
            )}
          </>
        );
      }}
    </LocaleConsumer>
  );
}

export default HomePage;

HomePage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
