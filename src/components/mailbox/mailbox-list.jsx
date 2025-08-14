import { Link } from "react-router";

const MailboxList = ({ mailbox }) => {
  return (
    <>
      <h1>All Mailbox List: </h1>
      <ul>
        {mailbox.map((element) => {
          return (
            <li key={element._id}>
              <Link to={`/mailbox/${element._id}`} key={element._id}>
                Mailbox {element._id}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MailboxList;
