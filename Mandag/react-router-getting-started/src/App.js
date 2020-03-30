import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./style2.css";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul className="header">
          <Header />
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content>">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/generatelist">
              <GenerateList />
            </Route>
            <Route path="/albums">
              <GetAlbums />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function GenerateList() {
  const [array, setArray] = useState([]);

  const updateList = e => {
    //keycode 13 is enter
    if (e.keyCode === 13) {
      setArray([...array, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div>
      <p>Your list : {array}</p>
      <input type="text" onKeyUp={updateList} />
    </div>
  );
}

function Header() {
  return (
    <div>
      <li>
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/generatelist">
          Generate List
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/albums">
          Albums
        </NavLink>
      </li>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function GetAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        setAlbums(data);
      });
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>ID</th>
          </tr>
          {albums.map(a => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
