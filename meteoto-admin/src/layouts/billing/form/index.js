import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import SoftInput from "components/SoftInput";
// import Uploader from "components/ApnaUploader";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Card, Typography, FormControl, Select, MenuItem } from "@mui/material";
import toast from "react-hot-toast";
import BasicModal from "components/Modal";
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
import Loading from "components/Loading";

const index = ({ show, unShow, handleRefresh, data, dat }) => {
  const [selectedOption, setSelectedOption] = useState("brand"); // Default selected option
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  // const [type, setType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState("");
  const [brandId, setBrandId] = useState("");
  const [modelId, setModelId] = useState("");
  const [model, setModel] = useState([]);
  const [modelType, setModelType] = useState("");
  const [selectedValuesArray, setSelectedValuesArray] = useState([]);

  useEffect(() => {
    if (show) {
      if (dat != null) {
     
        setName(dat.name);
        setSelectedOption(dat.type);

        (dat.type == "model" || dat.type == "varient") &&
          setBrandId(dat.brandId._id);
        dat.type == "varient" && setModelId(dat.modelId._id);
        dat.type == "model" && setModelType(dat.modelType);
        setSelectedImage(`${process.env.REACT_APP_IMG}/${dat.image}`);
      } else {
        setName("");
        setBrandId("");
        setModelId("");
        setSelectedOption("");
        setModelType("");
        setImage("");
        setSelectedImage(null);
      }
    }
  }, [show, dat]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleModelTypeChange = (event) => {
    const value = event.target.value;
    setModelType(value);
    // setSelectedValue(value);
    setSelectedValuesArray([...selectedValuesArray, value]);
  };

  const handleBrandChange = (e) => {
    setBrandId(e.target.value);
  };

  const handleModelChange = (e) => {
    setModelId(e.target.value);
  };

  const shouldShowBrandDropdown =
    selectedOption === "model" || selectedOption === "varient";
  const shouldShowModelDropdown = selectedOption === "varient";
  const shouldShowModelTypeDropdown = selectedOption === "model";

 

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

 

  const getAllModels = () => {
    try {
      // setLoading(true);
      fetch(
        `${process.env.REACT_APP_API}/api/getAllModel&Varient/${brandId}?type=model`,
        {
          method: "GET",
          // headers: {
          //   Authorization: token,
          // },
        }
      )
        .then((res) => res.json())
        .then((result) => {
        
          if (result.success) {
            // setLoading(false);
            setModel(result?.data);
          
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // if (dat != null) {
    getAllModels();
    // }
  }, [brandId]);



  const token = localStorage.getItem("token");

  const handleCreateCar = () => {
    if (image === "" && dat === null && selectedOption !== "varient") {
      toast.error("Image is required.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      selectedOption &&
        selectedOption !== "varient" &&
        formData.append("image", image);
      formData.append("name", name);
      selectedOption == "model" && formData.append("modelType", modelType);

      formData.append("type", selectedOption);
    
      (selectedOption == "model" || selectedOption == "varient") &&
        formData.append("brandId", brandId);
      selectedOption == "varient" && formData.append("modelId", modelId);
   
      fetch(
        dat == null
          ? `${process.env.REACT_APP_API}/api/addCar`
          : `${process.env.REACT_APP_API}/api/updateCar/${dat?._id}`,
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
            selectedOption !== "varient" && setImage("");
            setName("");
            setSelectedOption("");
            setSelectedImage(null);
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
                    Select Type
                  </option>
                  <option
                    value="brand"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    Brand
                  </option>
                  <option
                    value="model"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    Model
                  </option>
                  <option
                    value="varient"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    Varient
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
                    borderRadius: "8px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                    margin: "10px",
                  }}
                />
              </label>
            </div>

            {!shouldShowModelDropdown && (
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
            )}

            {shouldShowBrandDropdown && (
              <div>
            
                <label style={{ fontSize: "1rem" }}>
                  Select Brands:
                  <select
                    value={brandId}
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
                    onChange={handleBrandChange}
                  >
                    {/* Render Brand options */}
                    <option
                      value=""
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      Select brand
                    </option>

                    {data && data.length > 0 ? (
                      data.map((elm) => {
                        return (
                          <>
                            <option
                              key={elm?._id}
                              value={elm?._id}
                              style={{ padding: "10px", fontSize: "15px" }}
                            >
                              {elm?.name}
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
                          No brand found
                        </option>
                      </>
                    )}
                  </select>
                </label>
              </div>
            )}

            {shouldShowModelDropdown && (
              <div>
                <label style={{ fontSize: "1rem" }}>
                  Select Models:
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
                    value={modelId}
                    onChange={handleModelChange}
                  >
                    {/* Render Model options */}
                    <option
                      value=""
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      Select model
                    </option>
                    {model && model.length > 0 ? (
                      model.map((elm) => {
                        return (
                          <>
                            <option
                              key={elm?._id}
                              value={elm?._id}
                              style={{ padding: "10px", fontSize: "15px" }}
                            >
                              {elm?.name}
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
                          No Model found
                        </option>
                      </>
                    )}
                  </select>
                </label>
              </div>
            )}

            {shouldShowModelTypeDropdown && (
              <div>
                <label style={{ fontSize: "1rem" }}>
                  Select Model type:
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
                    value={modelType}
                    onChange={handleModelTypeChange}
                  >
                    <option
                      value=""
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      Select Model Type
                    </option>
                    <option
                      value="General"
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      General
                    </option>
                    <option
                      value="Premium"
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      Premium
                    </option>
                  </select>
                </label>
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
                  onClick={handleCreateCar}
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
