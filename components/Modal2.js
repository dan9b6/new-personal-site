import React from "react";

const Modal2 = () => {
  return (
    <div className="modal modal-2">
      <section>
        <h2>Bio</h2>
        <p>
          <span>Name:</span> Daniel Burton
        </p>
        <p>
          <span>Age:</span> 25
        </p>
        <p>
          <span>Location:</span> Poole, Dorset
        </p>
        <p>
          <span>Unpopular Opinion:</span> Cheese is nasty...
        </p>
      </section>
      <section>
        <h2>Skills</h2>
        <div className="row">
          <img src="images/wave.gif" alt="" />
          <img src="images/wave.gif" alt="" />
          <img src="images/wave.gif" alt="" />
        </div>
        <div className="row">
          <img src="images/wave.gif" alt="" />
          <img src="images/wave.gif" alt="" />
          <img src="images/wave.gif" alt="" />
        </div>
        <div className="row">
          <img src="images/wave.gif" alt="" />
          <img src="images/wave.gif" alt="" />
          <img src="images/wave.gif" alt="" />
        </div>
      </section>
      <section>
        <h2>Qualification</h2>
        <img src="images/wave.gif" alt="" />
        <h2>Ironhack Lisbon</h2>
        <h4>Top 3 Global Tech Academy</h4>
        <p>
          I didn't take the most conventional into Software Engineering. I
          completed a Web Development Bootcamp set in the heart of Lisbon,
          Portugal. During my time on the course I covered a wide range of
          skills and coding languages. By the end of the course, I had created
          three web applications.
        </p>
      </section>
      <section>
        <h2>Employment</h2>
        <img src="images/wave.gif" alt="" />
        <h2>bendando</h2>
        <h4>Web Development Agency</h4>
        <p>
          This was a Web Development Bootcamp set in the heart of Lisbon,
          Portugal. During my time on the course I covered a wide range of
          skills and coding languages. By the end of the course, I had created
          three web applications.
        </p>
      </section>

      <button>Find out more...</button>
    </div>
  );
};

export default Modal2;
