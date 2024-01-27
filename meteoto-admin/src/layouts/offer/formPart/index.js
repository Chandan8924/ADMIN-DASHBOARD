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

import InputLabel from "@mui/material/InputLabel";

import Button from "@mui/material/Button";

const index = ({ show, unShow, handleRefresh, dat, createRefreshFunc }) => {
  const [selectedOption, setSelectedOption] = useState("category"); // Default selected option
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState("");
  // const [type, setType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState("");
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [banner, setBanner] = useState("");
  const [parent, setParent] = useState("");
  // const [modelId, setModelId] = useState("");
  const [model, setModel] = useState([]);

  const [discountPercent, setDiscountPercent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLastDate, setSelectedLastDate] = useState(null);
  const [isTrue, setIsTrue] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleLastDateChange = (e) => {
    setSelectedLastDate(e.target.value);
  };

  const handleTrueFalseChange = (e) => {
    setIsTrue(e.target.checked);
  };

  useEffect(() => {
    if (show) {
      if (dat !== null) {
 

        setSelectedImage(`${process.env.REACT_APP_IMG}/${dat?.image}`);
        // setSelectedBanner(
        //   `${process.env.REACT_APP_IMG}/${dat?.banner}`
        // );
        setDiscountPercent(dat.discountPercent);
        setName(dat.name);
        dat.startDate &&
          setSelectedDate(new Date(dat.startDate).toISOString().split("T")[0]);
        dat.validTill &&
          setSelectedLastDate(
            new Date(dat.validTill).toISOString().split("T")[0]
          );
        setIsTrue(dat.showSlider);
      } else {
        setSelectedImage(null);
        setSelectedBanner(null);
        setDiscountPercent("");

        setName("");
        setSelectedDate("");
        setSelectedLastDate("");
        setIsTrue(false);
      }
    }
  }, [show, dat]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

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



  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    setBanner(e.target.files[0]);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedBanner(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const token = localStorage.getItem("token");

  const handleCreateOffer = () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);
      formData.append("banner", banner);
      formData.append("discountPercent", discountPercent);
      formData.append("name", name);
      formData.append("startDate", selectedDate);
      formData.append("validTill", selectedLastDate);
      formData.append("showSlider", isTrue);

     

      fetch(
        dat == null
          ? `${process.env.REACT_APP_API}/api/createOffer`
          : `${process.env.REACT_APP_API}/api/updateOffer/${dat?._id}`,
        {
          method: "POST",
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
            {/* <div>
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
                  <option value="category" style={{ padding: "10px", fontSize: "15px" }}>
                    Category
                  </option>
                  <option value="part" style={{ padding: "10px", fontSize: "15px" }}>
                    Part
                  </option>
                </select>
              </label>
            </div> */}

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
              <label style={{ fontSize: "1rem" }}>
                discountPercent:
                <input
                  type="number"
                  placeholder="Enter Discount Percent"
                  name="  discountPercent"
                  // Assuming you have an 'email' state for the name input
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
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

            <div>
              <label style={{ fontSize: "1rem" }}>Start Date:</label>
              <input
                type="date"
                onChange={handleDateChange}
                value={selectedDate}
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
            </div>

            <div>
              <label style={{ fontSize: "1rem" }}>Valid Till:</label>
              <input
                type="date"
                onChange={handleLastDateChange}
                value={selectedLastDate}
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
            </div>

            {dat === null && (
              <div>
                <label style={{ fontSize: "1rem" }}>
                  Create Slider with offer:
                </label>
                <input
                  type="checkbox"
                  checked={isTrue}
                  onChange={handleTrueFalseChange}
                  style={{
                    //   width: "100%",
                    padding: "10px",
                    border: "2px solid  gainsboro",
                    borderRadius: "8px",
                    outline: "none",
                    borderRadius: "8px",
                    margin: "10px",
                  }}
                />
              </div>
            )}

            {dat === null && (
              <>
                {" "}
                {isTrue ? (
                  <div>
                    <label style={{ fontSize: "1rem" }}>upload Banner:</label>
                    <input
                      // id="pic"
                      className="custom-file-input"
                      type="file"
                      accept="image/*"
                      onChange={handleBannerChange}
                    />

                    {selectedBanner && (
                      <div>
                        <p style={{ fontSize: "1rem" }}>Preview:</p>
                        <img
                          src={selectedBanner}
                          alt="Selected"
                          style={{ maxWidth: "40%", maxHeight: "100px" }}
                        />
                      </div>
                    )}
                  </div>
                ) : null}
              </>
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
                  onClick={handleCreateOffer}
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
