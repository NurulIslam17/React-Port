import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="bg-dark text-light pt-5 mt-auto" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Address</h4>
              <p>Dublin, Ire Land</p>
              <p>Uk-123</p>
            </div>
            <div className="col-md-4">
              <h4>Links</h4>
              <ul>
                <li>
                  <Link to="/">Facebok</Link>
                </li>
                <li>
                  <Link to="/">LinkedIn</Link>
                </li>
                <li>
                  <Link to="/">E-mail</Link>
                </li>
                <li>
                  <Link to="/">Phone</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                nemo quidem beatae cumque dolor provident, fugit, omnis
                reiciendis quibusdam, ullam est eaque! Eveniet ea ipsa iste cum
                lab
              </p>
            </div>
          </div>
          <div className="row text-light">
            <div className="col-md-12">
                <p className="text-center">&copy;All Right Reserved By <span className="text-danger">Re</span><span className="text-success">Act</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
