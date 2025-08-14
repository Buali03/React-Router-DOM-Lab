import { useNavigate } from "react-router";

const MailboxForm = ({ newMailbox, setNewMail, mailbox, setMail }) => {
  const navigate = useNavigate();
  const handleChangeInput = (event) => {
    setNewMail({ ...newMailbox, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMail([...mailbox, newMailbox]);
    setNewMail({ _id: mailbox.length + 1, boxOwner: "", boxSize: "Small" });
    navigate("/mailbox");
  };

  return (
    <>
      <h1>New Mailbox:</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter a Boxholder:</label>
        <input
          name="boxOwner"
          value={newMailbox.boxOwner}
          onChange={handleChangeInput}
        />
        <label>Select a Box Size:</label>
        <select name="boxSize" onChange={handleChangeInput}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
