import React from "react";

const Modal2 = () => {
  return (
    <div className="modal modal-2">
      <div className="row">
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
            <img src="images/html.png" alt="" />
            <img src="images/css.png" alt="" />
            <img src="images/js.png" alt="" />
          </div>
          <div className="row">
            <img src="images/react.png" alt="" />
            <img src="images/jq.png" alt="" />
            <img src="images/sass.png" alt="" />
          </div>
          <div className="row">
            <img src="images/mdb.png" alt="" />
            <img src="images/bts.png" alt="" />
            <img src="images/ghub.png" alt="" />
          </div>
        </section>
      </div>
      <div className="row">
        <section>
          <h2>Qualification</h2>
          <img src="images/ih.png" alt="" />
          <h2>
            <a href="https://www.ironhack.com/en/lisbon" target="_blank">
              Ironhack Lisbon
            </a>
          </h2>
          <h4>Top 3 Global Tech Academy</h4>
          <p>
            I didn't take the most conventional route into Software Engineering.
            I completed a Web Development Bootcamp set in the heart of Lisbon,
            Portugal. During my time on the course I covered a wide range of
            skills and coding languages. By the end of the course, I had created
            three web applications.
          </p>
        </section>
        <section>
          <h2>Employment</h2>
          <img src="images/bdlogo1.png" alt="" />
          <h2>bendando</h2>
          <h4>Web Development Agency</h4>
          <p>
            Currently I am working for BenDando as a Junior Software Engineer. I
            began working here at the start of January 2021, right in the middle
            of the second lockdown. In my role I am working from home and am
            focused on the front-end development of web applications. The
            technologies I work most with is React, Next, HTML, CSS and
            MDBootstrap.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Modal2;
