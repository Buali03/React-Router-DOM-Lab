// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import NavBar from "./components/navbar/navbar";
import MailboxList from "./components/mailbox/mailbox-list";
import MailboxForm from "./components/mailbox/mailbox-form";
import MailboxDetails from "./components/mailbox/mailbox-details";

const App = () => {
  const [mailbox, setMail] = useState([
    {
      _id: 0,
      boxOwner: "Ali",
      boxSize: "Large",
    },
  ]);
  const [newMailbox, setNewMail] = useState({
    _id: 1,
    boxOwner: "",
    boxSize: "Small",
  });

  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>}></Route>
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
        <Route
          path="/mailbox/:id"
          element={<MailboxDetails mailbox={mailbox}></MailboxDetails>}
        ></Route>
        <Route path="*" element={<h1>Mailbox Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
