import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const SideNav = ({ closeModal }) => {
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
        <a
          href="#home"
          onClick={() => {
            setNavToggle(!navToggle);
            closeModal();
          }}
        >
          Home
        </a>
        <div className="line"></div>
        <a
          href="#cv"
          onClick={() => {
            setNavToggle(!navToggle);
            closeModal();
          }}
        >
          CV
        </a>
        <div className="line"></div>
        <a
          href="#attributes"
          onClick={() => {
            setNavToggle(!navToggle);
            closeModal();
          }}
        >
          What can I offer?
        </a>
        <div className="line"></div>
        <a
          href="#projects"
          onClick={() => {
            setNavToggle(!navToggle);
            closeModal();
          }}
        >
          Projects
        </a>
        <div className="line"></div>
        <a
          href="#contact"
          onClick={() => {
            setNavToggle(!navToggle);
            closeModal();
          }}
        >
          Contact
        </a>
      </nav>
    </>
  );
};

export default SideNav;
