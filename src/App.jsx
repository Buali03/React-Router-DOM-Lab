// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import NavBar from "./components/navbar/navbar";
import MailboxList from "./components/mailbox/mailbox-list";
import MailboxForm from "./components/mailbox/mailbox-form";

const App = () => {
  const [mailbox, setMail] = useState([
    {
      _id: 0,
      boxOwner: "Ali",
      boxSize: "Large",
    },
  ]);
  const [newMailbox, setNewMail] = useState({
    _id: 0,
    boxOwner: "",
    boxSize: "Small",
  });

  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/mailbox"
          element={<MailboxList mailbox={mailbox} />}
        ></Route>
        <Route
          path="/mailbox/new"
          element={
            <MailboxForm
              newMailbox={newMailbox}
              setNewMail={setNewMail}
              mailbox={mailbox}
              setMail={setMail}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
