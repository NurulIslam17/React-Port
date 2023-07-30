import React from "react";
import Male from "../../assets/images/male.png";
import { useLocation } from "react-router-dom";
function MemberDetails() {
  const location = useLocation();
  const { name, about, institute,profession,contact } = location.state;
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card p-5">
                <div className="row">
                  <div className="col-md-4">
                    <img src={Male} className="w-100 h-100" />
                  </div>
                  <div className="col-md-8">
                    <span className="me-3">Name : </span> <span>{name}</span> <br />
                    <span className="me-3">profession : </span> <span>{profession}</span> <br />
                    <span className="me-3">Institute : </span> <span>{institute}</span> <br />
                  </div>
                </div>

                <h4 className="text-center">About {name}</h4>
                <p>{about}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberDetails;
