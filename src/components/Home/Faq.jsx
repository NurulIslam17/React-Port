import React from "react";
import FaqImg from "../../assets/images/faq2.png";
import { faqs } from "../../data/faqs";

function Faq() {
  return (
    <>
      <section className="my-3">
        <div className="container">
          <h3 className="text-center">Frequently Asked Question</h3>
          <div className="row mt-5">
            <div className="col-md-7">
              <div className="accordion" id="accordionExample">
                {faqs &&
                  faqs.map((data, index) => {
                    return (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            {data.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${index == 0 ? "show" : " "} `}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                                {data.answer}
                            </p>
                             
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-md-5">
              <img src={FaqImg} className="w-100 h-100 faq-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
