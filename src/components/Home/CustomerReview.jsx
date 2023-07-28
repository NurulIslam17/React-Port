import React from "react";
import c1 from "../../assets/images/client1.jpg";
import { clientReviews } from "../../data/clientReviews";

function CustomerReview() {
  return (
    <>
      <section className=" bg-grey1">
        <h3 className="text-center pt-3">What Client Say</h3>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-interval="1000"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            {clientReviews &&
              clientReviews.map((data,index) => {
                return (
                  <div className={`carousel-item ${index == 0 ? "active" : " "}`} key={index}>
                    <div className="row">
                      <div className="col-md-8 mx-auto p-5">
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src={c1}
                              className="d-block w-100 img_redius img-h250"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <p>
                              {data.review}
                            </p>
                            <br />
                            <span className="mt-3">----- {data.client}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden bg-info">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default CustomerReview;
