import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import "./style2.css";
// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample({ info }) {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink activeClassName="selected" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" exact to="/topics">
              Topics
            </NavLink>
          </li>
        </ul>

        <hr />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topics">
              <Topics info={info} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics({ info }) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative NavLinks.
  let { path, url } = useRouteMatch();
  const listItems = info.map(topic => {
    return (
      <li key={topic.id}>
        <NavLink to={`${url}/${topic.id}`}>{topic.title}</NavLink>
      </li>
    );
  });
  return (
    <div>
      <h2>Topics</h2>
      <p> Size {info.length}</p>
      <ul>{listItems}</ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic info={info} />
        </Route>
      </Switch>
    </div>
  );
}

function Topic(props) {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  const { info } = props;
  const topic = info.find(topic => topicId === topic.id);

  return (
    <div>
      <h3>{topicId}</h3>
      <h3>Title</h3>
      <p>{topic.title}</p>
      <h3>Info</h3>
      <p>{topic.info}</p>
    </div>
  );
}
