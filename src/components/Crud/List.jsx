import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loadder from "../Loadder";
import { FaTrash, FaEdit } from "react-icons/fa";

function List() {
  const [data, setData] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = "http://localhost:3030/users";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Delete Data
  const deleteDataFromServer = (id) => {
    const apiUrl = `http://localhost:3030/users/${id}`;
    return axios
      .delete(apiUrl)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        throw error;
      });
  };

  const handleDelete = (id) => {
    deleteDataFromServer(id)
      .then((data) => {
        console.log("Response from the server:", data);
        navigate("/crud");
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
    setDeleteMsg("Success");
  };

  if (!data) return <Loadder />;
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 shadow d-flex justify-content-between py-3">
              <h3>List</h3>
              <Link to="/create" className="btn btn-sm btn-success pt-2">
                Add New
              </Link>
            </div>
            <p className="text-danger">{deleteMsg ? "Successfull..." : " "}</p>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card card-body">
                <table
                  className="table text-center table-striped table-bordered py-2"
                  id=""
                >
                  <thead className="bg-info text-center">
                    <tr>
                      <th scope="col text-center">SL</th>
                      <th scope="col text-center">Name</th>
                      <th scope="col text-center">Phone</th>
                      <th scope="col text-center">About</th>
                      <th scope="col text-center">Age(Year)</th>
                      <th scope="col text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                          <td>{item.about.slice(0, 50)} .....</td>
                          <td>{item.age}</td>
                          <td>
                            <Link className="btn btn-sm btn-success p-1 me-2">
                              <FaEdit  size={18} />
                            </Link>
                            <Link
                              onClick={() => handleDelete(item.id)}
                              className="btn btn-sm btn-danger p-1"
                            >
                              <FaTrash size={18}/>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
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
