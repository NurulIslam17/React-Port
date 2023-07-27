import React from "react";
import mission  from '../assets/images/img3.jpg';

function Mission() {
  return (
    <>
      <section className="my-3">
        <div className="container">
          <div className="row">
            <h3 className="text-center my-2">Mission</h3>
            <div className="col-md-4">
                <img src={mission} className="w-100" />
            </div>
            <div className="col-md-8">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              neque adipisci similique nihil, reiciendis eius exercitationem
              deserunt, quidem ipsa in alias error commodi asperiores vero
              aliquid. Vero aliquam perspiciatis quibusdam.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              neque adipisci similique nihil, reiciendis eius exercitationem
              deserunt, quidem ipsa in alias error commodi asperiores vero
              aliquid. Vero aliquam perspiciatis quibusdam.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              neque adipisci similique nihil, reiciendis eius exercitationem
              deserunt, quidem ipsa in alias error commodi asperiores vero
              aliquid. Vero aliquam perspiciatis quibusdam.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
