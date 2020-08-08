import React, { Suspense, lazy } from "react";
import { Switch, Route, Link } from "react-router-dom";

const Notes = lazy(() => import("./features/notes/Notes"));
const Board = lazy(() => import("./features/board/Board"));

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/board">Board</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/notes" render={() => <Notes />} />
          <Route path="/board" render={() => <Board />} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
