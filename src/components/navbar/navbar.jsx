import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <Link to="/mailbox"> Mailbox List | </Link>
      <Link to="/mailbox/new"> New | </Link>
    </>
  );
};

export default NavBar;
