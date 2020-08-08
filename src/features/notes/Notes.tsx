import React from "react";
import { css } from "linaria";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ShortcutsInfo from "./ShortcutsInfo";
import Search from "./Search";
import Nav from "./Nav";
import Body from "./Body";

const stylesClass = css`
  display: flex;
  height: calc(100vh - 3.44em);
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;

function Notes() {
  let { path, url } = useRouteMatch();

  return (
    <section>
      <Search />
      <div className={stylesClass}>
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
