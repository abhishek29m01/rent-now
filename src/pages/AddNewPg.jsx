import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/addnewpg.css";

const AddNewPg = () => {
  const [pgData, setPgData] = useState({});
  const [message,setMessage]=useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPgData({ ...pgData, [name]: value });
  };

  const handleSubmit = (event) => {
     event.preventDefault();

     //Validation
    const requiredFields = ["pgname", "pgtype", "owner", "contact", "city", "address"];
    for(let field of requiredFields){
      if(!pgData[field]){
        setMessage(`${field} field cannot be empty.`);
        console.log(`${field} field cannot be empty.`)
        return;
      }
    }

    setPgData({});
  };

  return (
    <div className="add-new-pg">
      <div className="form-heading">
        <button className="back-to-home">
          <Link to="/">Back</Link>
        </button>
        <h2>Add New pg</h2>
      </div>
      <form action="" className="add-pg-form" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="pgname-n-type">
            <div className="input pg-name">
              <label htmlFor="">
                PG name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="pgname"
                id="pgname"
                value={""}
                onChange={handleChange}
              />
            </div>
            <div className="input pg-type">
              <label htmlFor="">
                PG type <span className="required">*</span>
              </label>
              <select
                name="pgtype"
                id="pgtype"
                value={""}
                onChange={handleChange}
              >
                <option value="">--Select type--</option>
                <option value="girls">Girls</option>
                <option value="boys">Boys</option>
              </select>
            </div>
          </div>
          <div className="owner-n-contact">
            <div className="input owner-name">
              <label htmlFor="">
                Owner Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="owner"
                id="onwer"
                value={""}
                onChange={handleChange}
              />
            </div>
            <div className="input owner-contact">
              <label htmlFor="">
                Contact <span className="required">*</span>
              </label>
              <input type="tel" name="contact" id="contact" value={""} />
            </div>
          </div>

          <div className="rent-n-category">
            <div className="input pg-category">
              <label htmlFor="">Category</label>
              <select name="pg-category" id="pg-category">
                <option value="">--Select Categtory--</option>
                <option value="pg">PG</option>
                <option value="rooms">Rooms</option>
                <option value="single">Single</option>
                <option value="sharing">Sharing</option>
              </select>
            </div>
            <div className="input pg-rent">
              <label htmlFor="">Rent Per Month</label>
              <input
                type="number"
                name="rent"
                id="rent"
                value={""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="city-address-pincode">
            <div className="input pg-city">
              <label htmlFor="">
                City<span className="required">*</span>
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={""}
                onChange={handleChange}
              />
            </div>
            <div className="input pg-address">
              <label htmlFor="">
                Address/Area<span className="required">*</span>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={""}
                onChange={handleChange}
              />
            </div>
            <div className="input pg-pincode">
              <label htmlFor="">Pincode</label>
              <input
                type="number"
                name="pincode"
                id="pincode"
                value={""}
                onChange={handleChange}
              />
            </div>
          </div>

          <p className="near-by-facilities">Near by facilties</p>
          <div className="input">
            <label htmlFor="">Nearest College</label>
            <select name="nearestCollege" id="nearestPage">
              <option value="">--Select College--</option>
              <option value="BIT">BIT</option>
              <option value="Science College"> Science College</option>
            </select>
          </div>

          <div className="input">
            <label htmlFor="">Add image</label>
            <input type="file" name="pg-image" id="pg-image" />
          </div>
        </div>
        <div>{message}</div>
        <button className="add-pg-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewPg;
