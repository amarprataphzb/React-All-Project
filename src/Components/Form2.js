import React from "react";
import { useState } from "react";

function Form2() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    isVisible: false,
    gender: "",
    city:'',
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setDetails((prevalue) => {
      return {
        ...prevalue,
        [name]: type === "checkbox" ? checked : value,
      };
    }); 
  }

  function handleSubmit(e){
    e.preventDefault(); 
    console.log("finally submit the input data")
    console.log(details )
  } 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>First Name</dt>
          <dd>
            <input
              type="text"
              placeholder="first Name"
              onChange={changeHandler}
              name="firstName"
              value={details.firstName}
            />
          </dd>
          <dt>Last Name</dt>
          <dd>
            <input
              type="text"
              placeholder="last Name"
              onChange={changeHandler}
              name="lastName"
              value={details.lastName}
            />
          </dd>
          <dt>Phone Number</dt>

          <dd>
            <input
              type="text"
              placeholder="Phone Name"
              onChange={changeHandler}
              name="phoneNo"
              value={details.phoneNo}
            />
          </dd>
        </dl>

        <span>
          Am i visible{" "}
          <input
            type="checkbox"
            name="isVisible"
            onChange={changeHandler}
            checked={details.isVisible}
          />
        </span>
        <br />
        <span>
          Gender
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={changeHandler}
            checked={details.gender=='male'}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            onChange={changeHandler}
            value="female"
            checked={details.gender=='female'}
          />
          <label htmlFor="female">Female</label>
        </span>
  
        <br />
        <label htmlFor="city">City</label>
        <select id="city" name='city'   onChange={changeHandler} value={details.city}>
          <option value=''>choose any city</option>
          <option value='ranchi'>Ranchi</option>
          <option value='Delhi'>Delhi</option>
          <option value='Hyderabad'>Hyderabad</option>
        
        </select>
        
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form2;
