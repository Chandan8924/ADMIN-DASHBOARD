import React, { useState } from "react";

import "../Login.css";
import toast from "react-hot-toast";

function ServiceTypeAddForm(props) {
  const [username, setUsername] = useState("");

  const [selectType, setSelectType] = useState("");
  const [selectRemark, setSelectRemark] = useState("");

  const handleCreateServiceType = async event => {
    try {
      event.preventDefault();

      const adminId = localStorage.getItem("userid");

      fetch(
        `${process.env.REACT_APP_API}/api/createDefaultJob/${adminId}`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            serviceType: selectType,
            remark: selectRemark,
          }),
        }
      )
        .then(res => res.json())
        .then(result => {
         
          if (result.success) {
            toast.success(result.message);
            props.reloadData(true);
            props.toggle();

          } else {
            toast.error(result.message);
          }
        });
    } catch (error) {
      console.error("Error sending POST request:", error);
      toast.error(error.message, "456");
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button class="btn btn-danger float-end" onClick={props.toggle}>
          Close
        </button>

        <h2>Create</h2>

        <form onSubmit={handleCreateServiceType}>
          <label>
            Service Name:
            <input
              type="text"
              placeholder="Service Name"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
          <label> Service Type:</label>
          <select
            class="form-select mb-4"
            aria-label="Default select example"
            value={selectType}
            onChange={e => setSelectType(e.target.value)}
          >
            <option value="" selected disabled>
              Service Type
            </option>
            <option value="General">General</option>
            <option value="Major">Major</option>
          </select>

          <label> Remark:</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={selectRemark}
            onChange={e => setSelectRemark(e.target.value)}
          >
            <option value="" selected disabled>
              Remark
            </option>
            <option value="replaced">replaced</option>
            <option value="serviced">Serviced</option>
            <option value="topup">topup</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default ServiceTypeAddForm;
