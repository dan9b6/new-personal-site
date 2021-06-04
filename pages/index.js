import SideNav from '../components/SideNav';
import Modal1 from '../components/Modal1';
import Modal2 from '../components/Modal2';
import Modal3 from '../components/Modal3';

import { useState } from 'react';

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineClose,
} from 'react-icons/ai';

export default function Home() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const resetModal = () => {
    setModal1(false);
    setModal2(false);
    setModal3(false);
  };

  return (
    <div className="index" id="home">
      <SideNav />
      <div className="landing">
        <h1>Hello. I’m Dan. I’m a Web Developer looking for a new role!</h1>
        <img src="images/wave.gif" alt="It's me waving" />
      </div>
      <div className="cv" id="cv">
        <div className="header">
          <h2>
            Are you considering employing a Junior Web Developer? How long have you got to be
            convinced I’m your guy?
          </h2>
        </div>
        <div className="buttons">
          <div>
            <button onClick={() => setModal1(true)}>I have no time..</button>
          </div>
          <div>
            <button onClick={() => setModal2(true)}>Just a minute</button>
          </div>
          <div>
            <button onClick={() => setModal3(true)}>All freakin' day</button>
          </div>
        </div>
      </div>
      <div className="attributes" id="attributes">
        <h1>What can I offer?</h1>
        <div className="row">
          <section>
            <img src="images/sign.gif" alt="" />
            <h2>Try before you buy...</h2>
            <p>
              I’m so eager to prove my worth, I’ll give you two weeks free. If you really don’t
              think I’m a good match at the end, we part ways, no hard feelings. But, if you see the
              potential, think about making me permanent.
            </p>
          </section>
          <section>
            <img src="images/enthusiasm.gif" alt="" />
            <h2>Enthusiasm...</h2>
            <p>
              This is something I am incredibly passionate about. I know I will end up learning for
              the rest of my life, but this really excites me. I know this is what I want for now
              and my future. I’m open minded and enthusiastic to learn and improve.
            </p>
          </section>
          <section>
            <img src="images/bulb.gif" alt="" />
            <h2>Innovation...</h2>
            <p>
              I hold a big desire to be at the forefront of innovation, which is one of the main
              reasons I chose to complete Ironhack, learning React. I can talk more about this in
              detail when we meet.
            </p>
          </section>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <h2>Here is a few of my recent projects...</h2>
        <div className="row">
          <section>
            <img src="images/wave.gif" alt="" />
            <h2>Marisol Corona</h2>
            <p>
              I created this game using CanvasJS, JS, HTML & CSS. The aim of the game is to keep
              this Pufferfish alive by swimming under the hooks and over the seaweed. Also, you have
              to avoid floating plastic in the sea. If you hit the plastic the Pufferfish will rage
              and double in size - making it much harder to avoid the obstacles!
            </p>
          </section>
          <section>
            <img src="images/wave.gif" alt="" />
            <h2>BenDando</h2>
            <p>
              I created this game using CanvasJS, JS, HTML & CSS. The aim of the game is to keep
              this Pufferfish alive by swimming under the hooks and over the seaweed. Also, you have
              to avoid floating plastic in the sea. If you hit the plastic the Pufferfish will rage
              and double in size - making it much harder to avoid the obstacles!
            </p>
          </section>
          <section>
            <img src="images/wave.gif" alt="" />
            <h2>FootHeads</h2>
            <p>
              I created this game using CanvasJS, JS, HTML & CSS. The aim of the game is to keep
              this Pufferfish alive by swimming under the hooks and over the seaweed. Also, you have
              to avoid floating plastic in the sea. If you hit the plastic the Pufferfish will rage
              and double in size - making it much harder to avoid the obstacles!
            </p>
          </section>
        </div>
        <h4>
          Check out my <a href="https://github.com/dan9b6">GitHub</a> for more of my work!
        </h4>
      </div>
      <div className="close" id="contact">
        <h1>"I may not have 100 years of experience, but I am 100% ready to be a developer!"</h1>
        <h4>Click on the really big and enthusiastic button to get in touch...</h4>
        <img src="images/point-side.png" alt="" />
        <button>Click here to hire your next developer!</button>
      </div>
      {/* <Modal1 />
      <Modal2 />
      <Modal3 /> */}
      <footer>
        <h1>Say Hi!</h1>
        <p>Use the icons below to get in touch..</p>
        <div className="row icons">
          <a href="mailto:danbh7296@gmail.com">
            <AiOutlineMail />
          </a>
          <a href=""></a>
          <AiOutlinePhone />
          <AiOutlineGithub />
          <AiOutlineLinkedin />
          <AiOutlineInstagram />
        </div>
        <p>Copyright © 2020 Dan Burton. All Rights Reserved</p>
      </footer>
      <div className={modal1 || modal2 || modal3 ? 'modal-trial active' : 'modal-trial'}>
        <button className="close-modal" onClick={resetModal}>
          <AiOutlineClose />
        </button>
        {modal1 && <Modal1 />}
        {modal2 && <Modal2 />}
        {modal3 && <Modal3 />}
      </div>
    </div>
  );
}
