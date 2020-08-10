import React from "react";
import { css } from "linaria";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ShortcutsInfo from "./ShortcutsInfo";
import Search from "./Search";
import Nav from "./Nav";
import Body from "./Body";

const stylesClass = css`
  height: 100%;

  .nav-and-body {
    display: flex;
    height: 100%;
    height: calc(100vh - 6.07em);
    border-top: 1px solid #006dff;
  }
`;

function Notes() {
  let { path, url } = useRouteMatch();

  return (
    <section className={stylesClass}>
      <Search />
      <div className="nav-and-body">
        <Nav url={url} />

        <Switch>
          <Route exact path={path}>
            <ShortcutsInfo />
          </Route>
          <Route path={`${path}/:noteId`}>
            <Body />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Notes;
