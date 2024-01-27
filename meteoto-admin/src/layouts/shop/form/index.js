import React, { useEffect, useState } from "react";
import SoftInput from "components/SoftInput";
// import Uploader from "components/ApnaUploader";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Card } from "@mui/material";
import toast from "react-hot-toast";
import BasicModal from "components/Modal";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./style.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { Mail } from "@mui/icons-material";

const index = ({ show, unShow, handleRefresh, data }) => {
 
 
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    // Fetch the list of countries from the API
  
    const fetchCountries = async () => {
      try {
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, {
          method:'GET',
          headers:{
              "X-CSCAPI-KEY":process.env.REACT_APP_TOKEN
          }
      });
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        
      }
    };
    fetchCountries();
  }, []);
  const countryOptions = countries.length > 1 && countries.map((country) => (
    <option key={country.iso2} value={country.name}>
      {country.name}
    </option>
  ));



  const [options, setOptions] = useState([]);

  const [Brands, setBrands] = useState([{ id: "", commision: "" }]);

  const addMoreBrand = () => {
    setBrands(prev => [...prev, { id: "", commision: "" }]);
  };
  const removeMoreBrand = i => {
    const temp = [...Brands];
    temp.splice(i, 1);
    setBrands(temp);
  };
  const onChangeBrand = (e, i) => {
    const temp = [...Brands];
    var value = e.target.value;
    var name = e.target.name;

    var element = { ...temp[i], [name]: value };

    temp.splice(i, 1, element);
    setBrands(temp);
  };


  const checkboxItems = [
    { id: 1, label: "ALL" },
    { id: 2, label: "CAR" },
    { id: 3, label: "PARTS" },
    { id: 4, label: "USERS" },
    { id: 5, label: "VENDORS" },
    { id: 6, label: "ORDERS" },
    { id: 6, label: "SUBADMIN" },
    { id: 7, label: "OFFER" },
    { id: 8, label: "SLIDER" },
    { id: 9, label: "PRIVACY" },

    // Add more items as needed
  ];

  const idTypeToPhotoKeyMap = {
    DL: "DL",
    AADHAR: "AADHAR",
    PAN: "PAN",
    // Add more idType options and their corresponding keys here
  };

  const [showRemoveIDButton, setShowRemoveIDButton] = useState(false);
  const [showRemoveBrandButton, setShowRemoveBrandButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ifscCode, setIfscCode] = useState("");
  const [gst, setGst] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shopNo, setShopNo] = useState("");
  const [streetAddress, setStreetaddress] = useState("");
  const [city, setCity] = useState("");
  const [countryName, setCountryName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [pickupLocation,  setPickupLocation] = useState("");
  const [address, setAddress] = useState("");
  const [alternateNo, setAlternateNo] = useState("");
  const [noOfServiceDay, setNoOfServiceDay] = useState("");
  const [selectedGaragePriority, setSelectedGaragePriority] = useState("");
  const [selectedEmergencyService, setSelectedEmergencyService] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const showEmergencyDropdown = selectedType === "EMERGENCY";

  const [brandData, setBrandData] = useState([]);

  const [banner, setBanner] = useState("");
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [passbook, setPassbook] = useState("");
  const [selectedPassbookImage, setSelectedPassbookImage] = useState(null);
  const [sign, setSign] = useState("");
  const [selectedSignImage, setSelectedSignImage] = useState(null);

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesPrev, setSelectedImagesPrev] = useState([]);



  const handleImageChange = e => {
    const files = Array.from(e.target.files);

    // Store the File objects in selectedImages
    setSelectedImages(prevSelectedImages => [...prevSelectedImages, ...files]);

    // Generate and store image preview URLs in selectedImagesPrev
    const imagePreviewURLs = files.map(file => URL.createObjectURL(file));
    setSelectedImagesPrev(prev => [...prev, ...imagePreviewURLs]);
  };




  const handleRemoveImage = index => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    setSelectedImagesPrev(prev => {
      const updatedPrev = [...prev];
      updatedPrev.splice(index, 1);
      return updatedPrev;
    });
  };

  const handleSignChange = e => {
    const file = e.target.files[0];
  
    setSign(e.target.files[0]);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedSignImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
 

  const handlePassbookImageChange = e => {
    const file = e.target.files[0];
    setPassbook(e.target.files[0]);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedPassbookImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = e => {
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

  // const [brandData, setBrandData] = useState([]);
  const [brandCommissions, setBrandCommissions] = useState([
    { id: "", commision: "" },
  ]);

  const addBrandCommission = () => {
    setBrandCommissions(prev => [...prev, { id: "", commision: "" }]);
    setShowRemoveBrandButton(true);
  };

  const removeBrandCommission = indexToRemove => {
    setBrandCommissions(prev =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };



  ////upload id wala

  const [IDs, setIDs] = useState([{ idType: "", idNumber: "", idImage: null }]);
  const [idImagePreview, setIdImagePreview] = useState(null);

  const addMoreID = () => {
    setIDs(prevIDs => [
      ...prevIDs,
      { idType: "", idNumber: "", idImage: null },
    ]);
    setShowRemoveIDButton(true);
  };

  const removeID = index => {
    const updatedIDs = [...IDs];
    updatedIDs.splice(index, 1);
    setIDs(updatedIDs);
  };

  const onChangeID = (event, index) => {
    const { name, value, files } = event.target;
    const updatedIDs = [...IDs];

    if (name === "idImage") {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = e => {
        const imagePreview = e.target.result;
        setIdImagePreview(imagePreview);
      };
      reader.readAsDataURL(file);
      updatedIDs[index][name] = file;
    } else {
      updatedIDs[index][name] = value;
    }

    setIDs(updatedIDs);
  };



  //// upload wala yhi tak

  useEffect(() => {
    if (show) {
      if (data != null) {
       
        setSelectedType(data?.shopType);
        setSelectedImages([]);

        // isko abhi suudharna hai
     
        const IDs = [];
        data.ID.forEach(elm => {
  
          IDs.push({ id: elm.id, commision: elm?.commision });
        });
        // After the loop, set the brandCommissions array
        // setIDs(IDs);
        // isko abhi suudharna hai yha tak

        setIDs([
          {
            idType: data?.ID[0].idType,
            idNumber: data?.ID[0].idNumber,
            idImage: null,
          },
        ]);

 
        const brandCommissions = [];
        data.brands.forEach(elm => {
         
          brandCommissions.push({ id: elm.id, commision: elm?.commision });
        });
     
        setBrandCommissions(brandCommissions);

      
        setSign(data?.sign);
        setSelectedGaragePriority("");
        setNoOfServiceDay(data?.noOfServiceDay);
        setLng(data?.location?.coordinates[1]);
        setLat(data?.location?.coordinates[0]);
        setBanner(data?.banner);
        setAlternateNo(data?.alternateNo);
        setOwnerPhone(data?.vendorId?.phone);
        setOwnerName(data?.vendorId?.fullName);
        setSelectedPassbookImage(null);
        setSelectedBanner(`${process.env.REACT_APP_IMG}/${data.banner}`);

        const selectedImagesPrev = [];
        data?.photos.forEach(elm => {
      
          selectedImagesPrev.push(`${process.env.REACT_APP_IMG}/${elm}`);
        });
        // After the loop, set the brandCommissions array
        setSelectedImagesPrev(selectedImagesPrev);
        // setSelectedImagesPrev([]);
        setSelectedSignImage(`${process.env.REACT_APP_IMG}/${data.sign}`);

        setAddress(data?.address);
        setPassbook(data?.bankAccount?.passbook);
        setIfscCode(data?.bankAccount?.ifscCode);
        setAccountNumber(data?.bankAccount?.accountNumber);
        setGst(data?.GST);
        setName(data?.name);
        setSelectedEmergencyService("");
      } else {
        setSelectedImages([]);
        setIDs([{ idType: "", idNumber: "", idImage: null }]);
        setBrandCommissions([{ id: "", commision: "" }]);
        setSign("");
        setSelectedGaragePriority("");
        setNoOfServiceDay("");
        setLng("");
        setLat("");
        setBanner("");
        setAlternateNo("");
        setOwnerPhone("");
        setOwnerName("");
        setSelectedPassbookImage(null);
        setSelectedBanner(null);
        setSelectedImagesPrev([]);
        setSelectedSignImage(null);

        setAddress("");
        setEmail("");
        setShopNo("");
        setStreetaddress("");
        setCity("");
        setCountryName("");
        setPinCode("");
        setPickupLocation("");
        setPassbook("");
        setIfscCode("");
        setAccountNumber("");
        setGst("");
        setName("");
        setSelectedEmergencyService("");
        setSelectedType("");
        setSelectedState("");
      }
    }
  }, [show, data]);

  // const resetForm = () => {
  //   setSelectedImages([]);
  //   setIDs([{ idType: "", idNumber: "", idImage: null }]);
  //   setBrandCommissions([{ id: "", commission: "" }]);
  //   setSign("");
  //   setSelectedGaragePriority("");
  //   setNoOfServiceDay("");
  //   setLng("");
  //   setLat("");
  //   setBanner("");
  //   setAlternateNo("");
  //   setOwnerPhone("");
  //   setOwnerName("");
  //   setSelectedPassbookImage(null);
  //   setSelectedBanner(null);
  //   setSelectedImagesPrev([]);
  //   setSelectedSignImage(null);

  //   setAddress("");
  //   setPassbook("");
  //   setIfscCode("");
  //   setAccountNumber("");
  //   setGst("");
  //   setName("");
  //   setSelectedEmergencyService("");
  //   setSelectedType("");
  // };

  // useEffect(() => {
  //   if (show) {
  //     // Only reset the form when the form is shown
  //     resetForm();
  //   }
  // }, [show]);

  const getAllBrands = () => {
    try {
      // setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/getAllBrand`, {
        method: "GET",
      })
        .then(res => res.json())
        .then(result => {
        
          if (result.success) {
            // setLoading(false);
            setBrandData(result?.data);
            
          }
        });
    } catch (error) {
    
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllBrands();
    // handleLocation();
  }, []);

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

  // const token = localStorage.getItem("token");

  const adminId = localStorage.getItem("userid");




  const handleCreateShop = async () => {
    try {
      const location = await handleLocation();
      setLoading(true);

      const formData = new FormData();
      formData.append("shopType", selectedType);
      selectedType === "EMERGENCY" &&
        formData.append("emergencyService", selectedEmergencyService);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("shopNo", shopNo);
      formData.append("address_2", streetAddress);
      formData.append("city", city);
      formData.append("state", selectedState);
      formData.append("country", countryName);
      formData.append("pin_code", pinCode);
      formData.append("pickup_location", pickupLocation);
      formData.append("ownerName", ownerName);
      formData.append("ownerPhone", ownerPhone);
      formData.append("GST", gst);
      formData.append("accountNumber", accountNumber);
      formData.append("ifscCode", ifscCode);
      formData.append("passbook", passbook);
      formData.append("address", address);
      formData.append("alternateNo", alternateNo);
      formData.append("banner", banner);

      formData.append("lat", location?.lat);
      formData.append("lng", location?.lng);
      selectedType === "GARAGE" &&
        formData.append("noOfServiceDay", noOfServiceDay);
      selectedType === "GARAGE" &&
        formData.append("garagePriority", selectedGaragePriority);
      formData.append("sign", sign);

      // Create an array of objects for brands and commissions
      const brandCommissionsData = brandCommissions.map(commision => ({
        id: commision.id,
        commision: commision.commision,
      }));

      // Append the brand commissions data as JSON string
      selectedType === "AUTOPART" &&
        formData.append("brands", JSON.stringify(brandCommissionsData));

      IDs.forEach((id, index) => {
       
        formData.append("idType", JSON.stringify(id.idType));
        formData.append(`idNumber`, id.idNumber);

        // Use the mapping to determine the photo key
        const photoKey = idTypeToPhotoKeyMap[id.idType];

        if (photoKey && id.idImage) {
          formData.append(photoKey, id.idImage);
        }
        // formData.append(`DL`, id.idImage);
      });

  
      selectedImages.forEach(image => {
      
        formData.append(`photos`, image);
      });

      // brandCommissions.map((elm) => {
      //   formData.append("brands[id]", elm.id);
      //   formData.append("brands[commision]", elm.commission);
      // });

      // IDs.map((elm) => {
      //   formData.append("idType", elm.idType);
      //   formData.append("idNumber", elm.idNumber);
      //   formData.append("DL", elm.idImage);
      // });

      // selectedImages.map((elm) => {
      //   formData.append("photos", elm);
      // });

      // selectedDays.map((elm) => {
      //   formData.append("closingDay", elm);
      // });

      // formData.append("categoryId", categoryId);


      fetch(
        data == null
          ? `${process.env.REACT_APP_API}/api/createShop/${adminId}`
          : `${process.env.REACT_APP_API}/api/updateShop/${data?._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      )
        .then(res => res.json())
        .then(result => {
       
          if (result.success) {
            toast.success(result.message);
            setLoading(false);
            unShow();

            handleRefresh();
          } else {
            setLoading(false);
            toast.error(result.message);
          }
        });
    } catch (error) {
  
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <BasicModal
        show={show}
        unShow={unShow}
        overflowY={true}
        height="80%"
        // width="50%"
        // className="shop-form"
      >
        <form
          onSubmit={e => {
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
                Select Type:
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
                  value={selectedType}
                  onChange={e => {
                    setSelectedType(e.target.value);
                  }}
                >
                  <option
                    value=""
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    Select Type
                  </option>
                  <option
                    value="AUTOPART"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    AUTOPART
                  </option>
                  <option
                    value="GARAGE"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    GARAGE
                  </option>
                  <option
                    value="EMERGENCY"
                    style={{ padding: "10px", fontSize: "15px" }}
                  >
                    EMERGENCY
                  </option>
                </select>
              </label>
            </div>

            {showEmergencyDropdown && (
              <div>
                <label style={{ fontSize: "1rem" }}>
                  Emergency Service:
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
                    value={selectedEmergencyService}
                    onChange={e => {
                      setSelectedEmergencyService(e.target.value);
                    }}
                  >
                    <option
                      value=""
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      Emergency Service
                    </option>
                    <option
                      value="KEYISSUES"
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      KEYISSUES
                    </option>
                    <option
                      value="TOWING"
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      TOWING
                    </option>
                    <option
                      value="FLATTYRE"
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      FLATTYRE
                    </option>
                    <option
                      value=" MCSUPPORT"
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      MCSUPPORT
                    </option>
                    <option
                      value=" BATTERYJUMP"
                      style={{ padding: "10px", fontSize: "15px" }}
                    >
                      BATTERYJUMP
                    </option>
                  </select>
                </label>
              </div>
            )}

            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Shop Name:</label>

              <SoftInput
                name="name"
                placeholder="Enter Name"
                onChange={e => setName(e.target.value)}
                value={name}
                required
              />
            </SoftBox>

            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Owner Name:</label>

              <SoftInput
                name="ownerName"
                placeholder="Enter Owner Name"
                onChange={e => setOwnerName(e.target.value)}
                value={ownerName}
                required
              />
            </SoftBox>

            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Owner Phone:</label>

              <SoftInput
                type="number"
                name="ownerPhone"
                placeholder="Enter Owner Phone"
                onChange={e => {
                  const input = e.target.value;
                  const trimmedValue = input.substring(0, 10);
                  setOwnerPhone(trimmedValue);
                }}
                value={ownerPhone}
                required
              />
            </SoftBox>

            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Email Id:</label>

              <SoftInput
                name="emailId"
                placeholder="Enter Your Email Id"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
              />
            </SoftBox>

            {selectedType === "AUTOPART" && (
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
                      <label style={{ fontSize: "1rem" }}>Brand:</label>

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
                      </select> */}

                      <SoftInput
                        type="text"
                        value={brandCommission.id}
                        onChange={e => {
                          const selectedBrandId = e.target.value;
                          setBrandCommissions(prev =>
                            prev.map((item, i) =>
                              i === index
                                ? { ...item, id: selectedBrandId }
                                : item
                            )
                          );
                        }}
                        placeholder="Enter Brand"
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "1rem" }}>Commission:</label>

                      <SoftInput
                        type="number"
                        value={brandCommission.commision}
                        onChange={e => {
                          const newCommission = e.target.value;
                          setBrandCommissions(prev =>
                            prev.map((item, i) =>
                              i === index
                                ? { ...item, commision: newCommission }
                                : item
                            )
                          );
                        }}
                        placeholder="Enter commision"
                      />
                    </div>
                    <Button
                      // variant="contained"
                      style={{
                        color: "black",
                        background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
                        width: "20%",
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
                  <AddCircleIcon /> Add more Brands
                </Button>
              </>
            )}
            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}> GST:</label>

              <SoftInput
                type="text"
                name="gst"
                placeholder="Enter GST"
                onChange={e => setGst(e.target.value)}
                value={gst}
                required
              />
            </SoftBox>

            <SoftBox mt={2}>
              {IDs.map((id, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    // gap: "0.1rem",
                    // justifyContent: "left",
                    // alignItems: "start",
                    // gap: "5%",
                  }}
                >
                  <SoftBox m={1}>
                    <label style={{ fontSize: "1rem" }}> ID Type:</label>

                    <select
                      name="idType"
                      style={{
                        padding: "10px",
                        // margin: "10px",
                        borderRadius: "8px",
                        border: "2px solid gainsboro",
                        outline: "none",
                      }}
                      autoFocus={true}
                      onChange={e => onChangeID(e, index)}
                      value={id.idType}
                    >
                      <option
                        value=""
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        Select ID Type
                      </option>
                      <option
                        value="DL"
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        DL
                      </option>
                      <option
                        value="AADHAR"
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        AADHAR
                      </option>
                      <option
                        value="PAN"
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        PAN
                      </option>
                    </select>
                  </SoftBox>
                  <SoftBox m={1}>
                    <label style={{ fontSize: "1rem" }}> ID No:</label>

                    <SoftInput
                      type="text"
                      name="idNumber"
                      placeholder="Enter ID Number"
                      onChange={e => onChangeID(e, index)}
                      value={id.idNumber}
                      required
                    />
                  </SoftBox>

                  <SoftBox m={1}>
                    <label style={{ fontSize: "1rem" }}>
                      {" "}
                      Upload ID Image:
                    </label>

                    <input
                      className="custom-file-input"
                      type="file"
                      name="idImage"
                      accept="image/*"
                      onChange={e => onChangeID(e, index)}
                      required
                    />
                    {id.idImage && (
                      <img
                        src={idImagePreview}
                        alt="ID Preview"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    )}
                  </SoftBox>
                  <Button
                    // variant="contained"
                    style={{
                      color: "black",
                      background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
                      width: "70%",
                      padding: "10px",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      borderRadius: "8px",
                      border: "2px solid  gainsboro",
                      borderRadius: "8px",
                      outline: "none",
                      display: showRemoveIDButton ? "inlineBlock" : "none",
                    }}
                    onClick={() => removeID(index)}
                  >
                    <RemoveCircleIcon /> remove
                  </Button>
                </div>
              ))}

              <Button
                // variant="contained"
                style={{
                  color: "black",
                  background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
                  width: "100%",
                  padding: "10px",
                  // margin: "10px",
                  borderRadius: "8px",
                  border: "2px solid  gainsboro",
                  borderRadius: "8px",
                  outline: "none",
                }}
                onClick={addMoreID}
              >
                <AddCircleIcon /> Add more ID
              </Button>
            </SoftBox>

            {/* {Brands &&
            Brands.length > 0 &&
            Brands.map((elm, i) => {
              return (
                <>
                  <SoftBox m={1}>
                    Brand:
                    <SoftInput
                      type="text"
                      name="id"
                      placeholder="Enter brand"
                      onChange={(e) => onChangeBrand(e, i)}
                      value={elm.id}
                      required
                    />
                  </SoftBox>
                  <SoftBox m={1}>
                    commision:
                    <SoftInput
                      type="text"
                      name="commision"
                      placeholder="Enter brand"
                      onChange={(e) => onChangeBrand(e, i)}
                      value={elm.commision}
                      required
                    />
                  </SoftBox>
                  <button onClick={() => removeMoreBrand(i)}>remove more brand</button>
                </>
              );
            })}
          <button onClick={addMoreBrand}>add more brand</button> */}

            <div>
              <label style={{ fontSize: "1rem" }}>
                Account Number:
                <input
                  type="number"
                  placeholder="Enter Account Number"
                  name="accountNumber"
                  value={accountNumber}
                  onChange={e => setAccountNumber(e.target.value)}
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
              <label style={{ fontSize: "1rem" }}>
                ifscCode:
                <input
                  type="text"
                  placeholder="Enter ifscCode"
                  name="ifscCode"
                  value={ifscCode}
                  onChange={e => setIfscCode(e.target.value)}
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
              <label style={{ fontSize: "1rem" }}>passbook Image:</label>
              <input
                className="custom-file-input"
                type="file"
                accept="image/*"
                onChange={handlePassbookImageChange}
              />

              {selectedPassbookImage && (
                <div>
                  <p style={{ fontSize: "1rem" }}>Preview:</p>
                  <img
                    src={selectedPassbookImage}
                    alt="Selected"
                    style={{ maxWidth: "40%", maxHeight: "100px" }}
                  />
                </div>
              )}
            </div>

          
            <div>
              <label style={{ fontSize: "1rem" }}>
                address:
                <textarea
                  rows="4"
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
                    borderRadius: "8px",
                    margin: "10px",
                  }}
                />
              </label>
            </div>
            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Street Address.</label>

              <SoftInput
                type="streetAddress"
                name="streetAddress"
                placeholder="Enter Your Street Address"
                onChange={e => {
                  const input = e.target.value;
                  const trimmedValue = input.substring(0, 500);
                  setStreetaddress(trimmedValue);
                }}
                value={streetAddress}
                required
              />
            </SoftBox>
            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Shop No.</label>

              <SoftInput
                type="shopNo"
                name="shopNo"
                placeholder="Enter Your Shop No."
                onChange={e => {
                  const input = e.target.value;
                  const trimmedValue = input.substring(0, 500);
                  setShopNo(trimmedValue);
                }}
                value={shopNo}
                required
              />
            </SoftBox>
            
            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>City</label>

              <SoftInput
                type="city"
                name="city"
                placeholder="Enter Your City"
                onChange={e => {
                  const input = e.target.value;
                  const trimmedValue = input.substring(0, 100);
                  setCity(trimmedValue);
                }}
                value={city}
                required
              />
            </SoftBox>

            <div>
              <label style={{ fontSize: "1rem" }}>
                Select State:
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
                  value={selectedState}
                  onChange={e => {
                    setSelectedState(e.target.value);
                  }}
                >
                    {countryOptions}
                </select>
              </label>
            </div>

            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Country</label>

              <SoftInput
                type="country"
                name="country"
                placeholder="Enter Your Country"
                onChange={e => {
                  const input = e.target.value;
                  const trimmedValue = input.substring(0, 100);
                  setCountryName(trimmedValue);
                }}
                value={countryName}
                required
              />
            </SoftBox>
            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Pin Code</label>

              <SoftInput
                type="pinCode"
                name="pinCode"
                placeholder="Enter Your Pin Code"
                onChange={e => {
                  const input = e.target.value;
                  const trimmedValue = input.substring(0, 100);
                  setPinCode(trimmedValue);
                }}
                value={pinCode}
                required
              />
            </SoftBox>
            <SoftBox m={1}>
              <label style={{ fontSize: "1rem" }}>Pickup Location Name</label>

              <SoftInput
                type="pickupLocation"
                name="pickupLocation"
                placeholder=" Pickup Location Name"
                onChange={e => {
                  const input = e.target.value;
                  const trimmedValue = input.substring(0, 500);
                  setPickupLocation(trimmedValue);
                }}
                value={pickupLocation}
                required
              />
            </SoftBox>



            <div>
              <label style={{ fontSize: "1rem" }}>
                alternateNo:
                <input
                  type="number"
                  placeholder="Enter alternateNo"
                  name="alternateNo"
                  value={alternateNo}
                  onChange={e => {
                    const input = e.target.value;
                    const trimmedValue = input.substring(0, 10);

                    // Limit the input to 10 digits

                    setAlternateNo(trimmedValue);
                  }}
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
                onChange={handleImageChange}
                multiple
              />

              <div>
                {/* <p style={{ fontSize: "1rem" }}>Preview:</p> */}
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

            {/* <div>
            <label style={{ fontSize: "1rem" }}>Upload Photos:</label>
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
          </div> */}

            {selectedType === "GARAGE" && (
              <>
                <div>
                  <label style={{ fontSize: "1rem" }}>
                    noOfServiceDay:
                    <input
                      type="number"
                      placeholder="Enter noOfServiceDay"
                      name="noOfServiceDay"
                      value={noOfServiceDay}
                      onChange={e => setNoOfServiceDay(e.target.value)}
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
              </>
            )}

            {selectedType === "GARAGE" && (
              <>
                <SoftBox m={1}>
                  <label style={{ fontSize: "1rem" }}>
                    garagePriority:
                    <select
                      name="garagePriority"
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
                      value={selectedGaragePriority}
                      onChange={e => setSelectedGaragePriority(e.target.value)}
                    >
                      <option
                        value=""
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        Select garagePriority
                      </option>
                      <option
                        value="General"
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        General
                      </option>
                      <option
                        value="Major"
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        Major
                      </option>
                      <option
                        value="Premium"
                        style={{ padding: "10px", fontSize: "15px" }}
                      >
                        Premium
                      </option>
                    </select>
                  </label>
                </SoftBox>
              </>
            )}

            <div>
              <label style={{ fontSize: "1rem" }}>Upload sign:</label>
              <input
                className="custom-file-input"
                type="file"
                accept="image/*"
                onChange={handleSignChange}
              />

              {selectedSignImage && (
                <div>
                  <p style={{ fontSize: "1rem" }}>Preview:</p>
                  <img
                    src={selectedSignImage}
                    alt="Selected"
                    style={{ maxWidth: "40%", maxHeight: "100px" }}
                  />
                </div>
              )}
            </div>

            <SoftButton
              type="submit"
              size="small"
              color="info"
              fullWidth
              onClick={handleCreateShop}
            >
              {data == null ? "submit" : "update"}
            </SoftButton>
            {/* </Card> */}
          </SoftBox>
        </form>
      </BasicModal>
    </div>
  );
};

export default index;
