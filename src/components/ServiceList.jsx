import React from "react";
import { services } from "../data/services";
import serviceImg from "../../src/assets/images/img5.jpg";

function ServiceList() {
  return (
    <>
      <section className="my-3">
        <div className="container">
          <h3 className="text-center">Services We Provide</h3>
          <div className="row">
            {services &&
              services.map((data) => {
                return (
                  <>
                    <div className="col-md-3 mb-3" key={data.id}>
                      <div className="card shadow">
                        <img
                          src={serviceImg}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{data.name}</h5>
                          <p className="card-text">
                          {data.about.slice(0,100)}{'...'}
                          </p>
                          <a
                            href="#"
                            className="btn btn-sm btn-primary rounded-0"
                          >
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceList;
