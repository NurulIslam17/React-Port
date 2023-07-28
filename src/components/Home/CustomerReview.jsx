import React from "react";
import c1 from "../../assets/images/client1.jpg";
import c2 from "../../assets/images/client2.jpg";
// import client_reviews from '../../data/clientReview';

function CustomerReview() {
    // console.log(client_reviews);
  return (
    <>
      <section className=" bg-grey1">
        <h3 className="text-center pt-3">What Client Say</h3>
        <div
          id="carouselExampleIndicators"
          className="carousel slide" data-interval="1000"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            
            <div className="carousel-item active">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sed, reiciendis corrupti adipisci dolor nisi illo
                        perferendis cumque necessitatibus aliquam, et laborum
                        inventore quisquam, impedit tempore qui labore
                        architecto quo quaerat.
                      </p>
                      <br />
                      <span className="mt-3">----- Mrs. Robert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-8 mx-auto p-5">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={c2}
                        className="d-block w-100 img_redius img-h250"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sed, reiciendis corrupti adipisci dolor nisi illo
                        perferendis cumque necessitatibus aliquam, et laborum
                        inventore quisquam, impedit tempore qui labore
                        architecto quo quaerat.
                      </p>
                      <br />
                      <span className="mt-3">----- Mr. Nurul</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
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
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default CustomerReview;
