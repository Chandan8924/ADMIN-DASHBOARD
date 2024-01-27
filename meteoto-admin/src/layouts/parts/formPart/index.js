import React, { useEffect, useState, useRef } from "react";
import SoftInput from "components/SoftInput";
import "./style.css";

// import Uploader from "components/ApnaUploader";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Card, Typography, FormControl, Select, MenuItem } from "@mui/material";
import toast from "react-hot-toast";
import BasicModal from "components/Modal";
import Loading from "components/Loading";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// import {, MenuItem } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const index = ({
  show,
  unShow,
  handleRefresh,
  data,
  dat,
  createRefreshFunc,
}) => {
  const [selectedOption, setSelectedOption] = useState("category"); // Default selected option
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [deliveryCharge, setDeliveryCharge] = useState("");
  // const [type, setType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState("");
  const [parent, setParent] = useState("");
  // const [modelId, setModelId] = useState("");
  const [model, setModel] = useState([]);

  useEffect(() => {
    if (show) {
      if (dat !== null) {
    
        setName(dat.name);
        // setWeight(dat.weight);
        // setDeliveryCharge(dat.deliveryCharge);
        setSelectedImage(`${process.env.REACT_APP_IMG}/${dat.image}`);
        dat.parent != null && setParent(dat.parent);
        dat.parent == null
          ? setSelectedOption("category")
          : setSelectedOption("part");
      } else {
        setName("");
        // setWeight("");
        // setDeliveryCharge("");
        setParent("");
        setSelectedOption("");
        setImage("");
        setSelectedImage(null);
      }
    }
  }, [show, dat]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCategoryChange = (e) => {
    setParent(e.target.value);
  };

  // const handleModelChange = (e) => {
  //   setModelId(e.target.value);
  // };

  const shouldShowPartDropdown = selectedOption === "part";



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(e.target.files[0]);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };



  const token = localStorage.getItem("token");

  const handleCreatePart = () => {
    if (image === "" && dat == null) {
      toast.error("Image is required.");
      return;
    }

    try {
      // const { title, description, amount, photo } = values;
      setLoading(true);
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      // formData.append("weight", weight);
      // selectedOption == "part" &&
      //   formData.append("deliveryCharge", deliveryCharge);

  
      selectedOption == "part" && formData.append("parent", parent);
      // selectedOption == "varient" && formData.append("modelId", modelId);
   

      fetch(
        dat == null
          ? `${process.env.REACT_APP_API}/api/addParts`
          : `${process.env.REACT_APP_API}/api/updateParts/${dat?._id}`,
        {
          method: dat == null ? "POST" : "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((result) => {
     
          if (result.success) {
            toast.success(result.message);
            setLoading(false);
            unShow();
            setImage("");
            setName("");
            setSelectedOption("");
            setSelectedImage(null);
            parent && createRefreshFunc(parent);
            handleRefresh();
          } else {
            setLoading(false);
            toast.error(result.message);
          }
        });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <BasicModal show={show} unShow={unShow} overflowY={true} height="80%">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SoftBox mt={2}>
            {/* <Card
              sx={{
                backdropFilter: `saturate(200%) blur(30px)`,
                backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                  rgba(white.main, 0.8),
                boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
                position: "relative",
                mt: 2,
                mx: 3,
                py: 2,
                px: 2,
              }}
            > */}
            <div>
              <label style={{ fontSize: "1rem" }}>
                Select:
                <select
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "8px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  autoFocus={true}
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option
                    value=""
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    Select
                  </option>
                  <option
                    value="category"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    Category
                  </option>
                  <option
                    value="part"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    Part
                  </option>
                </select>
              </label>
            </div>

            <div>
              <label style={{ fontSize: "1rem" }}>
                Name:
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  // Assuming you have an 'email' state for the name input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                    margin: "10px",
                  }}
                />
              </label>
            </div>

            {/* <div>
              <label style={{ fontSize: "1rem" }}>
                Weight:
                <input
                  type="number"
                  placeholder="Enter Name"
                  name="weight"
                  // Assuming you have an 'email' state for the name input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                    borderRadius: "8px",
                    margin: "10px",
                  }}
                />
              </label>
            </div> */}

            {/* {shouldShowPartDropdown && (
              <div>
                <label style={{ fontSize: "1rem" }}>
                  Delivery Charge:
                  <input
                    type="number"
                    placeholder="Enter Name"
                    name="deliveryCharge"
                    // Assuming you have an 'email' state for the name input
                    value={deliveryCharge}
                    onChange={(e) => setDeliveryCharge(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "2px solid  gainsboro",
                      borderRadius: "8px",
                      outline: "none",
                      borderRadius: "8px",
                      margin: "10px",
                    }}
                  />
                </label>
              </div>
            )} */}
            <div>
              <label style={{ fontSize: "1rem" }}>upload Image:</label>
              <input
                className="custom-file-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {selectedImage && (
                <div>
                  <p style={{ fontSize: "1rem" }}>Preview:</p>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{ maxWidth: "40%", maxHeight: "100px" }}
                  />
                </div>
              )}
            </div>

            {shouldShowPartDropdown && (
              <div>
                <label style={{ fontSize: "1rem" }}>
                  Select Category:
                  <select
                    value={parent}
                    style={{
                      width: "100%",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "8px",
                      border: "2px solid  gainsboro",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                    autoFocus={true}
                    onChange={handleCategoryChange}
                  >
                    {/* Render Brand options */}
                    <option style={{ padding: "10px", fontSize: "15px" }}>
                      Select category
                    </option>

                    {data && data.length > 0 ? (
                      data.map((elem) => {
                        return (
                          <>
                            <option
                              key={elem?._id}
                              value={elem?._id}
                              style={{ padding: "10px", fontSize: "15px" }}
                            >
                              {elem?.name}
                            </option>
                          </>
                        );
                      })
                    ) : (
                      <>
                        <option
                          value="Model1"
                          style={{ padding: "10px", fontSize: "15px" }}
                        >
                          No parts found
                        </option>
                      </>
                    )}
                  </select>
                </label>

                <div>
              <label style={{ fontSize: "1rem" }}>
                Length:
                <input
                  type="text"
                  placeholder="c.m"
                  name="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                    margin: "10px",
                  }}
                />
              </label>
            </div>
                <div>
              <label style={{ fontSize: "1rem" }}>
                Width:
                <input
                  type="text"
                  placeholder="c.m"
                  name="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                    margin: "10px",
                  }}
                />
              </label>
            </div>
                <div>
              <label style={{ fontSize: "1rem" }}>
                Height:
                <input
                  type="text"
                  placeholder="c.m"
                  name="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                    margin: "10px",
                  }}
                />
              </label>
            </div>
           

              </div>


              
            )}

            {loading ? (
              <Loading />
            ) : (
              <>
                <SoftButton
                  type="submit"
                  size="small"
                  color="info"
                  fullWidth
                  onClick={handleCreatePart}
                  style={{ marginTop: "1rem" }}
                >
                  submit
                </SoftButton>
              </>
            )}
            {/* </Card> */}
          </SoftBox>
        </form>
      </BasicModal>
    </div>
  );
};

export default index;
