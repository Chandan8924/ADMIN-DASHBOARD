import React, { useEffect, useState, useRef } from "react";
import SoftInput from "components/SoftInput";
import "./style.css";

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

const index = ({ show, unShow, handleRefresh, dat }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (show) {
      if (dat !== null) {
       

        setSelectedImage(`${process.env.REACT_APP_IMG}/${dat?.banner}`);

        setName(dat.name);
      } else {
        setSelectedImage(null);

        setName("");
      }
    }
  }, [show, dat]);

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

  const handleCreateSlider = () => {
    // if (image === "" && dat == null) {
    //   toast.error("Image is required.");
    //   return;
    // }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("banner", image);

      formData.append("name", name);

 

      fetch(
        dat === null
          ? `${process.env.REACT_APP_API}/api/createSlider`
          : `${process.env.REACT_APP_API}/api/updateSlider/${dat?._id}`,
        {
          method: dat == null ? "POST" : "POST",
          headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${token}`,
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
      <BasicModal show={show} unShow={unShow} overflowY={true} height="60%">
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

            <div>
              <label style={{ fontSize: "1rem" }}>upload Image:</label>
              <input
                // id="pic"
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

            {loading ? (
              <Loading />
            ) : (
              <>
                <SoftButton
                  type="submit"
                  size="small"
                  color="info"
                  fullWidth
                  onClick={handleCreateSlider}
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
