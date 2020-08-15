import React, { Suspense, lazy } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { styled } from "linaria/react";
import { BookIcon } from "@primer/octicons-react";

import { useShortcut } from "./utils";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("./Home"));
const Notes = lazy(() => import("./features/notes/Notes"));
const Board = lazy(() => import("./features/board/Board"));

const Nav = styled.nav`
  display: flex;
  padding: 0;
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
`;

const Links = styled.div`
  border-bottom: 1px solid #006dff;
  width: 100%;

  ul {
    display: block;

    list-style: none;
    margin: auto 0.75em;
    padding: 0;

    li {
      font-size: 18px;
      display: inline-block;
      margin: 0;
      padding: 0.5em 0.75em;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.17em;
  background: #006dff;
  margin: 0;
  padding: 0.4em 0.8em 0.3em 0.8em;
  a {
    color: white !important;
    display: flex;
  }
`;

const Main = styled.main`
  height: calc(100vh - 2.6em);
  display: flex;
  flex-direction: column;

  & > * {
    flex-grow: 1;
  }
`;

function App() {
  const { push } = useHistory();

  useShortcut("ctrl+shift+1", () => push("/notes"), [push]);
  useShortcut("ctrl+shift+2", () => push("/board"), [push]);

  return (
    <div>
      <Nav>
        <Logo>
          <Link to="/">
            <BookIcon size={28} />
          </Link>
        </Logo>
        <Links>
          <ul>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
          </ul>
        </Links>
      </Nav>

      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/notes" render={() => <Notes />} />
            <Route path="/board" render={() => <Board />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </Suspense>
      </Main>

      <ScrollToTop />
    </div>
  );
}

export default App;
