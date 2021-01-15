import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import PollForm from "./components/PollForm";
import PollVoteForm from "./components/PollVoteForm";
import PollResult from "./components/PollResult";

function App() {
  const [page, setPage] = useState(["home", {}]);

  return (
    <>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: " rgb(90, 88, 88)" }}
      >
        <div className="container">
          <h1 className="display-4" style={{ color: "rgb(199, 241, 239)" }}>
            Don’t Be a Loser, Be a Chooser!
          </h1>
        </div>
      </div>
      <div className="App">
        {page[0] === "home" && <Home setPage={setPage} />}
        {page[0] === "create" && <PollForm setPage={setPage} />}
        {page[0] === "vote" && (
          <PollVoteForm poll={page[1].poll} setPage={setPage} />
        )}
        {page[0] === "result" && (
          <PollResult poll={page[1].poll} setPage={setPage} />
        )}
      </div>
    </>
  );
}

export default App;
