import React from "react";
import Learner  from "../../images/Learner.jpg";
import Medicare  from "../../images/Medicare.png";
import SportyShoes  from "../../images/Sportyshoes.png";
import QuizApp  from "../../images/QuizApp.png";

export default function Projects() {
  return (
    <div className="container mt-4 d-flex flex-wrap justify-content-evenly">
      <div className="card me-5 mb-5" style={{width:"300px"}}>
        <img src={Learner} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Learner's Academy</h5>
          <p className="card-text">
            J2EE, Servelt and JSP and MySQL database.
          </p>
          <br />
          <a type="button" href="https://github.com/AjayBisht19/Learner_Academy" className="btn btn-light" target="_blank">GitHub</a>
        </div>
      </div>

      <div className="card me-5 mb-5" style={{width:"300px"}}>
        <img src={Medicare} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Medicare</h5>
          <p className="card-text">
            Spring Boot, Spring security, JWT authentication, Angular 11 and MySQL database.
          </p><br />
          <a type="button" href="https://github.com/AjayBisht19/MedicareFrontend" className="btn btn-light btn-sm me-2" target="_blank">Frontend</a>
          <a type="button" href="https://github.com/AjayBisht19/MedicareBackend" className="btn btn-light btn-sm" target="_blank">Backend</a>

        </div>
      </div>

      <div className="card me-5 mb-5" style={{width:"300px"}}>
        <img src={SportyShoes} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sporty Shoes</h5>
          <p className="card-text">
          Spring Boot, Spring security, ThymeLeaf and MySQL database.
          </p> <br />
          <a type="button" href="https://github.com/AjayBisht19/sportyshoes" className="btn btn-light" target="_blank">GitHub</a>          
        </div>
      </div>

      <div className="card me-5 mb-5" style={{width:"300px"}}>
        <img src={QuizApp} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Quiz App</h5>
          <p className="card-text">
          Spring Boot, Angular 11 and MySQL database.
          </p> <br />
          <a type="button" href="https://github.com/AjayBisht19/Quiz-app" className="btn btn-light" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  );
}
