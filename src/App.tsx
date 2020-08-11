import React, { Suspense, lazy } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { css } from "linaria";
import { BookIcon } from "@primer/octicons-react";
import { useShortcut } from "./utils";

const Notes = lazy(() => import("./features/notes/Notes"));
const Board = lazy(() => import("./features/board/Board"));

const stylesClass = css`
  nav.routes {
    display: flex;
    padding: 0 0.75em 0 0;
    border-bottom: 1px solid #006dff;
    overflow-y: auto;
    background: #f8f9fa !important;

    a {
      color: #006dff;
      text-decoration: none;

      &:focus,
      &:hover,
      &:visited {
        color: #006dff;
      }
    }

    .logo {
      font-size: 1.17em;
      background: #006dff;
      margin: 0;
      padding: 0.4em 0.8em 0.3em 0.8em;
      a {
        color: white !important;
        display: flex;
      }
    }

    ul {
      display: flex;

      list-style: none;
      margin: auto 0.75em;
      padding: 0;

      li {
        margin: 0;
        padding: 0.5em 0.75em;
      }
    }
  }
`;

function App() {
  const { push } = useHistory();

  useShortcut("ctrl+shift+1", () => push("/notes"), [push]);
  useShortcut("ctrl+shift+2", () => push("/board"), [push]);

  return (
    <div className={stylesClass}>
      <nav className="routes">
        <div className="logo">
          <Link to="/">
            <BookIcon size={28} />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/board">Board</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/notes" render={() => <Notes />} />
            <Route path="/board" render={() => <Board />} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
