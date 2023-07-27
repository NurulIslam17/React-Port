import React, { useState } from "react";

function ContactSection() {
  const [data, setData] = useState({name:"",email:"",comments:""});

  const handleOnChange = (e) => {
    setData( {...data,[e.target.name]: e.target.value} )
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({name:"",email:"",comments:""});
    
  };

  return (
    <>
      <section className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={handleOnSubmit} method="post">
                <div className="mb-3">
                  <label htmlFor="" className="m-1">
                    Name
                  </label>
                    <input
                      type="text"
                      className="form-control outline_none rounded-0"
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={handleOnChange}
                      placeholder="Enter Name"
                    />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="m-1">
                    Email
                  </label>
                    <input
                      type="email"
                      className="form-control outline_none rounded-0"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleOnChange}
                      placeholder="Enter Email"
                    />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="m-1">
                    Comments
                  </label>
                    <textarea
                      name="comments"
                      value={data.comments}
                      onChange={handleOnChange}
                      placeholder="Type..."
                      className="form-control outline_none rounded-0"
                      id="comments"
                      cols="30"
                      rows="5"
                    ></textarea>
                </div>
                <div>
                  <button className="btn btn-info rounded-0" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.680817996743!2d90.4057056!3d23.794755549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690449998661!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
