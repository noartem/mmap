import React, { useState } from "react";
import { styled } from "linaria/react";
import { useDispatch } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { addNote } from "./notesSlice";
import ShortcutsInfo from "./ShortcutsInfo";
import Search from "./Search";
import Nav from "./Nav";
import Body from "./Body";

const Section = styled.section`
  @media (min-width: 992px) {
    display: flex;

    .left {
      width: 32%;
      border-right: 1px solid #006dff;
      overflow-y: auto;
    }

    .right {
      height: calc(100vh - 2.6em);
      width: 100%;
      overflow-x: auto;
    }
  }

  @media (max-width: 992px) {
    .left {
      border-bottom: 1px solid #006dff;
    }
  }
`;

function Notes() {
  const [query, setQuery] = useState("");
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  const goAddNote = async (query: string) => {
    await dispatch(addNote(query));
    setQuery("");
  };

  return (
    <Section>
      <div className="left">
        <Search
          query={query}
          setQuery={(e) => setQuery(e)}
          addNote={goAddNote}
        />
        <Nav url={url} query={query} />
      </div>

      <div className="right">
        <Switch>
          <Route exact path={path}>
            <ShortcutsInfo />
          </Route>
          <Route path={`${path}/:noteId`}>
            <Body />
          </Route>
        </Switch>
      </div>
    </Section>
  );
}

export default Notes;
