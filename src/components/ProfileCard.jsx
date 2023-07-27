import React from "react";
import ProfileImg from '../assets/images/img2.jpg';

function ProfileCard() {
  return (
    <>
      <div className="card shadow">
        <img src={ProfileImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Mr. Name</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content...
          </p>
          <a href="#" className="btn btn-sm btn-primary rounded-0">
            Details
          </a>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
