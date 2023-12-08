import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AllSellers.css";

const AllSellers = () => {
  useEffect(() => {
    getAllSellers();
  }, []);
  const getAllSellers = async () => {
    try {
      //fill the http url with your own
      const response = await axios.get("http://localhost:8000/users/");
      console.log(response);
      setUsers(response.data);
      setName(response.data);
      setLastName(response.data);
      setEmail(response.data);
      setHashedPassword(response.data);
      setPhoneNumber(response.data);
      setAddress(response.data);
    } catch (error) {
      console.log("error fetching events", error);
    }
  };
  const navigate = useNavigate();
  const handleHome = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleApprove = async (e) => {
    e.preventDefault();
    navigate("/ApproveProducts");
  };
  const handleStatistics = async (e) => {
    e.preventDefault();
    navigate("/Statistics");
  };
  const AllProducts = async (e) => {
    e.preventDefault();
    navigate("/AllProducts");
  };
  const handleSellers = async (e) => {
    e.preventDefault();
    navigate("/AllSellers");
  };

  return (
    <div>
      <div className="sidebar">
        <a className="home" onClick={handleHome}>
          Home
        </a>
        <a className="sellers" onClick={handleSellers}>
          View and Add Sellers
        </a>
        <a className="view-products" onClick={AllProducts}>
          View all products
        </a>
        <a className="stats" onClick={handleStatistics}>
          Statistics
        </a>
        <a className="approval" onClick={handleApprove}>
          Approve products
        </a>
      </div>
      <div className="grid-container">
        <div className="grid-item">Name</div>
        <div className="grid-item">Last Name</div>
        <div className="grid-item">Address</div>
        <div className="grid-item">Phone Number</div>
        <div className="grid-item">Email</div>
        <div className="grid-item">Password</div>
        <div className="grid-item">Action</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

      </div>
      <div className="coolinput">
        <label for="input" class="text">Name:</label>
        <input type="text" placeholder="Write here..." name="input" className="input" />
      </div>
      <div className="coolinput">
        <label for="input" class="text">Last name:</label>
        <input type="text" placeholder="Write here..." name="input" className="input" />
      </div>
      <div className="coolinput">
        <label for="input" class="text">Email:</label>
        <input type="text" placeholder="Write here..." name="input" className="input" />
      </div>
      <div className="coolinput">
        <label for="input" class="text">Phone Number:</label>
        <input type="text" placeholder="Write here..." name="input" className="input" />
      </div>
      <div className="coolinput">
        <label for="input" class="text">Password:</label>
        <input type="password" placeholder="Write here..." name="input" className="input" />
      </div>
      <button className="add-seller">Add Seller</button>

    </div>
  );
};

export default AllSellers;
