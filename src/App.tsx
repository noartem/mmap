import React, { Suspense, lazy } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { css } from "linaria";

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

    h1 {
      font-size: 1.17em;
      background: #006dff;
      margin: 0;
      padding: 0.83em 0.75em;
      a {
        color: white !important;
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

  main {
    height: calc(100vh - 3.44em);
  }
`;

function App() {
  return (
    <div className={stylesClass}>
      <nav className="routes">
        <h1>
          <Link to="/">MindMap</Link>
        </h1>
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
