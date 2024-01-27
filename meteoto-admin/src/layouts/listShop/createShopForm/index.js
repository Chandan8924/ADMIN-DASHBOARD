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
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
const index = ({
  show,
  unShow,
  handleRefresh,
  data,
  dat,
  createRefreshFunc,
  categoryId,
}) => {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [alternateNo, setAlternateNo] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [icon, setIcon] = useState("");
  const [banner, setBanner] = useState("");
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [showRemoveBrandButton, setShowRemoveBrandButton] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesPrev, setSelectedImagesPrev] = useState([]);

 

  const handleImageChanges = (e) => {
    const files = Array.from(e.target.files);

    // Store the File objects in selectedImages
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...files,
    ]);

    // Generate and store image preview URLs in selectedImagesPrev
    const imagePreviewURLs = files.map((file) => URL.createObjectURL(file));
    setSelectedImagesPrev((prev) => [...prev, ...imagePreviewURLs]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    setSelectedImagesPrev((prev) => {
      const updatedPrev = [...prev];
      updatedPrev.splice(index, 1);
      return updatedPrev;
    });
  };

  const [brandCommissions, setBrandCommissions] = useState([
    { serviceName: "", servicePrice: "" },
  ]);

  const addBrandCommission = () => {
    setBrandCommissions((prev) => [
      ...prev,
      { serviceName: "", servicePrice: "" },
    ]);
    setShowRemoveBrandButton(true);
  };

  const removeBrandCommission = (indexToRemove) => {
    setBrandCommissions((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleCheckboxChange = (day) => {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((selectedDay) => selectedDay !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };



  useEffect(() => {
    if (show) {
      if (dat !== null) {
     
        setName(dat.name);
        setAddress(dat.address);
        setAlternateNo(dat.alternateNo);
        setOwnerName(dat.vendorId.fullName);
        setOwnerPhone(dat.vendorId.phone);
        setOpeningTime(dat.openingTime);
        setClosingTime(dat.closingTime);
        setIcon(dat.photo);
        setBanner(dat.banner);
        setSelectedDays(dat.closingDay);
        setSelectedImage(`${process.env.REACT_APP_IMG}/${dat.photo}`);
        setSelectedBanner(`${process.env.REACT_APP_IMG}/${dat.banner}`);
      } else {
        setName("");
        setAddress("");
        setAlternateNo("");
        setOwnerName("");
        setOwnerPhone("");
        setOpeningTime("");
        setClosingTime("");
        setLat("");
        setLng("");
        setIcon("");
        setBanner("");
        setSelectedDays("");
        setSelectedImage(null);
        setSelectedBanner(null);
      }
    }
  }, [show, dat]);



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setIcon(e.target.files[0]);
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





  async function handleLocation() {
    if ("geolocation" in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        return { lat, lng };
      } catch (error) {
       
        throw error; // Re-throw the error or handle it as needed
      }
    } else {
    
      return null; // Signal an error or handle it in your own way
    }
  }

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userid");



  const handleCreatePart = async () => {
    try {
      const location = await handleLocation();
     
      setLoading(true);

      const formData = new FormData();
      formData.append("photo", icon);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("alternateNo", alternateNo);
      formData.append("onwerName", ownerName);
      formData.append("onwnerPhone", ownerPhone);
      formData.append("openingTime", openingTime);
      formData.append("closingTime", closingTime);
      formData.append("lat", location.lat);
      formData.append("lng", location.lng);
      formData.append("banner", banner);
      // formData.append("closingDay", selectedDays);

      // selectedDays &&
      //   selectedDays.length > 0 &&
      //   selectedDays.map((elm) => {
      //     formData.append("closingDay", elm);
      //   });

      // Create an array for closingDay, even if only one checkbox is selected
      const closingDayArray = Array.isArray(selectedDays)
        ? selectedDays
        : [selectedDays];

      // Append the closingDayArray to the form data
      formData.append("closingDay", JSON.stringify(closingDayArray));

      formData.append("categoryId", categoryId);

   
      selectedImages.forEach((image) => {
        formData.append("photos", image);
      });

      // Create an array of objects for brands and commissions
      const brandCommissionsData = brandCommissions.map((commission) => ({
        serviceName: commission.serviceName,
        servicePrice: commission.servicePrice,
      }));

      // Append the brand commissions data as JSON string

      formData.append("service", JSON.stringify(brandCommissionsData));

   

      fetch(
        dat === null
          ? `${process.env.REACT_APP_API}/api/createListShop/${userId}`
          : `${process.env.REACT_APP_API}/api/updateListShop/${dat._id}`,

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
            setIcon("");
            setName("");
            setAddress("");
            setAlternateNo("");
            setOwnerName("");
            setOwnerPhone("");
            setOpeningTime("");
            setClosingTime("");
            setLat("");
            setLng("");
            setSelectedDays([]);
            // setSelectedOption("");
            setSelectedImage(null);
            setSelectedBanner(null);
            // parent && createRefreshFunc(parent);
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
                Shop Name:
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
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
                Shop Address:
                <input
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                Alternate No:
                <input
                  type="number"
                  placeholder="Enter alternateNo"
                  name="alternateNo"
                  value={alternateNo}
                  onChange={(e) => {
                    const input = e.target.value;
                    const trimmedValue = input.substring(0, 10);
                    setAlternateNo(trimmedValue);
                  }}
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
                Owner Name:
                <input
                  type="text"
                  placeholder="Enter ownerName"
                  name="ownerName"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
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
                Owner Phone:
                <input
                  type="number"
                  placeholder="Enter ownerPhone"
                  name="ownerPhone"
                  value={ownerPhone}
                  onChange={(e) => {
                    const input = e.target.value;
                    const trimmedValue = input.substring(0, 10);
                    setOwnerPhone(trimmedValue);
                  }}
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
                Opening Time:
                <input
                  type="time"
                  placeholder="Enter ownerPhone"
                  name="openingTime"
                  value={openingTime}
                  onChange={(e) => setOpeningTime(e.target.value)}
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
                Closing Time:
                <input
                  type="time"
                  placeholder="Enter ownerPhone"
                  name="closingTime"
                  value={closingTime}
                  onChange={(e) => setClosingTime(e.target.value)}
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

            <SoftBox>
              Closing Day:
              <div>
                {daysOfWeek.map((day) => (
                  <div key={day} style={{ marginLeft: "10px" }}>
                    <input
                      type="checkbox"
                      value={day}
                      checked={selectedDays.includes(day)}
                      onChange={() => handleCheckboxChange(day)}
                    />
                    {day}
                  </div>
                ))}
              </div>
            </SoftBox>

            {/* <div>
              <label style={{ fontSize: "1rem" }}>
                GetLocation:
                <SoftButton
                  type="submit"
                  size="small"
                  color="black"
                  fullWidth
                  onClick={handleLocation}
                  style={{ marginTop: "1rem" }}
                >
                  Get Location
                </SoftButton>
              </label>
            </div> */}

            <div>
              <label style={{ fontSize: "1rem" }}>Upload Photo:</label>
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
              <label style={{ fontSize: "1rem" }}>Upload Banner:</label>
              <input
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

            <div>
              <label style={{ fontSize: "1rem" }}>Upload Photos:</label>
              <input
                className="custom-file-input"
                type="file"
                accept="image/*"
                onChange={handleImageChanges}
                multiple
              />

              <div>
                {selectedImagesPrev.map((imagePreview, index) => (
                  <div
                    key={index}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <img
                      src={imagePreview}
                      alt={`Selected ${index}`}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                    <button onClick={() => handleRemoveImage(index)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <>
              {brandCommissions.map((brandCommission, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "end",
                    gap: "7%",
                  }}
                >
                  <div>
                    <label style={{ fontSize: "1rem" }}>Service Name:</label>

                    <SoftInput
                      type="text"
                      value={brandCommission.serviceName}
                      onChange={(e) => {
                        const selectedBrandId = e.target.value;
                        setBrandCommissions((prev) =>
                          prev.map((item, i) =>
                            i === index
                              ? { ...item, serviceName: selectedBrandId }
                              : item
                          )
                        );
                      }}
                      placeholder="Service Name"
                    />
                  </div>

                  {/* <select
                      style={{
                        width: "100%",
                        padding: "10px",
                        // margin: "10px",
                        borderRadius: "8px",
                        border: "2px solid  gainsboro",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                      value={brandCommission.id}
                      onChange={(e) => {
                        const selectedBrandId = e.target.value;
                        setBrandCommissions((prev) =>
                          prev.map((item, i) =>
                            i === index
                              ? { ...item, id: selectedBrandId }
                              : item
                          )
                        );
                      }}
                    >
                      <option value="">Select brand</option>
                      {brandData.map((brand) => (
                        <option key={brand._id} value={brand._id}>
                          {brand.name}
                        </option>
                      ))}
                    </select>
                  </div> */}

                  <div>
                    <label style={{ fontSize: "1rem" }}>Service Price:</label>

                    <SoftInput
                      type="number"
                      value={brandCommission.servicePrice}
                      onChange={(e) => {
                        const newCommission = e.target.value;
                        setBrandCommissions((prev) =>
                          prev.map((item, i) =>
                            i === index
                              ? { ...item, servicePrice: newCommission }
                              : item
                          )
                        );
                      }}
                      placeholder="Service Price"
                    />
                  </div>
                  <Button
                    // variant="contained"
                    style={{
                      color: "black",
                      background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
                      width: "15%",
                      padding: "10px",
                      // margin: "10px",
                      borderRadius: "8px",
                      border: "2px solid  gainsboro",
                      borderRadius: "8px",
                      outline: "none",
                      display: showRemoveBrandButton ? "inlineBlock" : "none",
                    }}
                    onClick={() => removeBrandCommission(index)}
                  >
                    <CancelPresentationIcon />
                  </Button>
                  {/* <button>Remove</button> */}
                </div>
              ))}
              {/* <button>Add more brand</button> */}
              <Button
                // variant="contained"
                style={{
                  color: "black",
                  background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
                  width: "100%",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "8px",
                  border: "2px solid  gainsboro",
                  borderRadius: "8px",
                  outline: "none",
                }}
                onClick={addBrandCommission}
              >
                <AddCircleIcon /> Add more Services
              </Button>
            </>

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
