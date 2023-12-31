import React from "react";
import ProfileImgMale from "../../assets/images/male.png";
import ProfileImgFemale from "../../assets/images/female.jpg";
import { members } from "../../data/members";
import { Link } from "react-router-dom";

function Member() {
  return (
    <>
      <section className="py-2">
        <div className="container">
          <div className="row">
            <h3 className="text-center my-3">Our Team Members</h3>
          </div>

          <div className="row my-2">
            {members &&
              members.map((data) => {
                const {id,name,about,contact,institute,profession} = data;
                return (
                  <div className="col-md-3 mt-2" key={id}>
                    <div className="card shadow">
                      <img
                        src={
                          data.gender == "Female"
                            ? ProfileImgFemale
                            : ProfileImgMale
                        }
                        className="card-img-top"
                        style={{ height: "220px" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <h6 className="card-title text-center">
                          {data.profession}
                        </h6>
                        <p className="card-text">
                          {about.slice(0, 70)} {"..."}
                        </p>
                        <Link to={name} state={{ id,name,about,contact,institute,profession }}  className="btn btn-sm btn-info rounded-0">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Member;
