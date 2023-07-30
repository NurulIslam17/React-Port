import React from "react";
import { Link } from "react-router-dom";

function Create() {
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
          </div>

          <div className="row mt-5">
            <div className="col-md-5 mx-auto">
              <div className="card card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control rounded-0 outline_none mb-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control rounded-0 outline_none mb-2"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-0 outline_none mb-2"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label mb-2" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary rounded-0 outline_none mt-3">
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
