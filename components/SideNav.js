import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const SideNav = () => {
  const [navToggle, setNavToggle] = useState(false);

  const toggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <>
      <button className="nav-toggle" onClick={toggle}>
        {navToggle ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <nav className={navToggle ? "active" : ""}>
        <a href="">Home</a>
        <div className="line"></div>
        <a href="">CV</a>
        <div className="line"></div>
        <a href="">Projects</a>
        <div className="line"></div>
        <a href="">Contact</a>
      </nav>
    </>
  );
};

export default SideNav;
