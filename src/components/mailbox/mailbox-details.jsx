import { Link } from "react-router";
import { useParams } from "react-router";

const MailboxDetails = ({ mailbox }) => {
  const params = useParams();
  const foundMailbox = mailbox.find((element) => {
    return element._id === Number(params.id);
  });
  return (
    <>
      <h1>Mailbox {foundMailbox._id}</h1>
      <h3>Details</h3>
      <ul>
        <li>Boxholder: {foundMailbox.boxOwner}</li>
        <li>Box Size: {foundMailbox.boxSize}</li>
      </ul>
    </>
  );
};

export default MailboxDetails;
