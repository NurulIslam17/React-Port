import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// http://localhost:3030/users

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    institute: "",
    age: "",
    phone: "",
    about: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const postDataToServer = (data) => {
    const apiUrl = "http://localhost:3030/users";
    return axios
      .post(apiUrl, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postDataToServer(formData)
      .then((data) => {
        console.log("Response from the server:", data);
        navigate("/crud");
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
    setMessage("Data Inserted");
    setFormData([]);
  };
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 shadow d-flex justify-content-between py-3">
              <h3>Create</h3>
              <Link to="/crud" className="btn btn-sm btn-success pt-2">
                List
              </Link>
            </div>
            <p className="text-success">{message ? "Data Inserted" : " "}</p>
          </div>

          <div className="row mt-1">
            <div className="col-md-6 mx-auto">
              <div className="card card-body">
                <form method="post" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      className="form-control rounded-0 outline_none mb-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Institute</label>
                    <input
                      type="text"
                      className="form-control rounded-0 outline_none mb-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter institute"
                      name="institute"
                      value={formData.institute}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Age</label>
                    <input
                      type="text"
                      className="form-control rounded-0 outline_none mb-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone</label>
                    <input
                      type="text"
                      className="form-control rounded-0 outline_none mb-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">About</label>
                    <textarea
                      name="about"
                      value={formData.about}
                      className="form-control rounded-0 outline_none mb-2"
                      onChange={handleChange}
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-0 outline_none mt-3"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;
