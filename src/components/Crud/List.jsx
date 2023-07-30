import React from "react";
import { Link } from "react-router-dom";

function List() {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 shadow d-flex justify-content-between py-3">
              <h3>List</h3>
              <Link to="/create" className="btn btn-sm btn-success pt-2">Add New</Link>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card card-body">
                <table className="table text-center table-striped table-bordered py-2" id="myTable">
                  <thead className="bg-info text-center">
                    <tr>
                      <th scope="col text-center">SL</th>
                      <th scope="col text-center">First</th>
                      <th scope="col text-center">Last</th>
                      <th scope="col text-center">Handle</th>
                      <th scope="col text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Link className="btn btn-sm btn-success pt-2 me-2">
                          Edit
                        </Link>
                        <Link className="btn btn-sm btn-danger pt-2">
                          Delete
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>
                        <Link className="btn btn-sm btn-success pt-2 me-2">
                          Edit
                        </Link>
                        <Link className="btn btn-sm btn-danger pt-2">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default List;
