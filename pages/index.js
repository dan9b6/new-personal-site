import SideNav from "../components/SideNav";
import Modal1 from "../components/Modal1";
import Modal2 from "../components/Modal2";

import { AiTwotoneDownCircle } from "react-icons/ai";

export default function Home() {
  return (
    <div className="index">
      <SideNav />
      <div className="landing">
        <h1>Hello. I’m Dan. I’m a Web Developer looking for a new role!</h1>
        <img src="images/wave.gif" alt="It's me waving" />
      </div>
      <div className="cv">
        <h2>
          Are you considering employing a Junior Web Developer? How long have
          you got to be convinced I’m your guy?
        </h2>
        <div className="buttons">
          <div>
            <button>I have no time..</button>
          </div>
          <div>
            <button>Just a minute</button>
          </div>
          <div>
            <button>All freakin' day</button>
          </div>
        </div>
      </div>
      <Modal1 />
      <Modal2 />
    </div>
  );
}
