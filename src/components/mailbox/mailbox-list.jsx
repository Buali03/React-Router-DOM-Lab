import { Link } from "react-router";

const MailboxList = ({ mailbox }) => {
  console.log(mailbox);
  return (
    <>
      <h1>All Mailbox List: </h1>
      <ul>
        {mailbox.map((element) => {
          console.log(element.boxOwner + element._id);
          return (
            <li>
              <Link to={`/mailbox/${element._id}`} key={element._id}>
                {element.boxOwner}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MailboxList;
