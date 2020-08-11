import React from "react";
import { css } from "linaria";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ShortcutsInfo from "./ShortcutsInfo";
import Search from "./Search";
import Nav from "./Nav";
import Body from "./Body";

const stylesClass = css`
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
`;

function Notes() {
  let { path, url } = useRouteMatch();

  return (
    <section className={stylesClass}>
      <div className="left">
        <Search />
        <Nav url={url} />
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
    </section>
  );
}

export default Notes;
