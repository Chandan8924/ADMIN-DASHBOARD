import React, { useEffect, useState } from "react";
import SoftInput from "components/SoftInput";
// import Uploader from "components/ApnaUploader";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Card } from "@mui/material";
import toast from "react-hot-toast";
import BasicModal from "components/Modal";
import "./style.css";
import { lightBlue } from "@mui/material/colors";
import imag from "../../../assets/images/car-no.avif";

const index = ({ show, unShow, handleRefresh, data }) => {
  console.log(data._id, "adfaaaaaaaaaaaaag");
  const [carData, setCarData] = useState([]);

  const getUserCar = () => {
    try {
      // setSkelLoading(true);
      // setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/getusercar/${data._id}`, {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result, "ayaaaaaaaa");
          if (result.success) {
            // setSkelLoading(false);
            // setLoading(false);
            setCarData(result.car);
            // customerData({
            //   data: result?.user,
            //   // view: handleHide,
            //   edit: handleShopShowInfo,
            //   // deleto: handleDelete,
            // })
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    console.log(show, "show");
    if (show === true) {
      getUserCar();
    }
  }, [show]);

  return (
    <div>
      <BasicModal show={show} unShow={unShow} height="80%">
        <SoftBox mt={2}>
          {/* <Card
            sx={{
              backdropFilter: `saturate(200%) blur(30px)`,
              backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                rgba(white.main, 0.8),
              boxShadow: ({ boxShadows: { navbarBoxShadow } }) =>
                navbarBoxShadow,
              position: "relative",
              mt: 2,
              mx: 3,
              py: 2,
              px: 2,
            }}
          > */}
          {carData && carData.length > 0 ? (
            carData.map((data) => (
              <>
                {console.log(data, "data ayaa")}
                <div
                  style={
                    {
                      // display: "flex",
                      // justifyContent: "space-between",
                      // background: "Blue",
                      // padding: "1rem",
                      // borderRadius: ".5rem",
                      // margin: ".5rem",
                    }
                  }
                >
                  <div
                    className="super"
                    style={{
                      // background: "lightBlue",
                      boxShadow:
                        " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      border: "1px solid  gainsboro",
                      fontSize: "1rem",
                      padding: "1rem",
                      borderRadius: ".5rem",
                      marginBottom: "1.5rem",
                      width: "100%",
                    }}
                  >
                    <h5 style={{ marginBottom: "0.5rem" }}>
                      User Car Details -
                    </h5>
                    <p>Model Image : </p>
                    <img
                      style={{
                        height: "20vh",
                        width: "100%",
                        borderRadius: ".5rem",
                      }}
                      src={`${process.env.REACT_APP_IMG}/${data?.modelId.image}`}
                      alt="photo"
                    />
                    <p>RC Image : </p>
                    <img
                      style={{
                        height: "20vh",
                        width: "100%",
                        borderRadius: ".5rem",
                      }}
                      src={`${process.env.REACT_APP_IMG}/${data?.RC}`}
                      alt="photo"
                    />
                    <p>Brand Name : {data?.brandId?.name}</p>
                    <p>Model Name : {data?.modelId?.name}</p>
                    <p>
                      Varient Name :{" "}
                      {data?.varientId?.name ? data?.varientId?.name : "NA"}
                    </p>
                    <p>Owner Name : {data?.ownerName}</p>

                    <p>Car Number : {data?.carNumber}</p>
                    <p>Model Year : {data?.modelYear}</p>
                    <p>Created Date : {data?.createdAt}</p>

                    {/* <h4>Alternate No : {data?.alternateNo}</h4> */}
                    {/* <h4>noOfServiceDay : {data?.noOfServiceDay}</h4> */}
                    {/* <h4>garagePriority No : {data?.garagePriority}</h4> */}
                  </div>

                  {/* <div
                    style={{
                      background: "lightBlue",
                      padding: "1rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      width: "45%",
                    }}
                  >
                    <h3 style={{ marginBottom: "0.5rem" }}>Vendor Details -</h3>
                    <h5>Vendor Name: {data?.vendorId?.fullName}</h5>
                    <h5>Vendor Phone: {data?.vendorId?.phone}</h5>
                    <h5>Vendor Type: {data?.vendorId?.type}</h5>
                    <h5>Vendor verified: {data?.vendorId?.verified}</h5>
            
                  </div> */}
                </div>

                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // background: "Blue",
                    padding: "1rem",
                    borderRadius: ".5rem",
                    margin: ".5rem",
                  }}
                >
                  <div
                    className="super"
                    style={{
                      background: "lightBlue",
                      padding: "1rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      width: "45%",
                    }}
                  >
                    <h3 style={{ marginBottom: "0.5rem" }}>ID Details -</h3>
                    {data?.ID?.map((elm) => (
                      <div key={elm._id}>
                        <h5>ID Type : {elm?.idType}</h5>
                        <h5>ID Number : {elm?.idNumber}</h5>
                        <h5>ID Photo : </h5>
                        <img
                          style={{
                            height: "20vh",
                            width: "100%",
                            borderRadius: ".5rem",
                          }}
                          src={`${process.env.REACT_APP_IMG}/${elm?.photo}`}
                          alt="photo"
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      background: "lightBlue",
                      padding: "1rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      width: "45%",
                    }}
                  >
                    <h3 style={{ marginBottom: "0.5rem" }}>Bank Details -</h3>
                    <h5>Account Number: {data?.bankAccount?.accountNumber}</h5>
                    <h5>ifsc Code: {data?.bankAccount?.ifscCode}</h5>
                    <h5>Passbook photo:</h5>
                    <img
                      style={{
                        height: "20vh",
                        width: "100%",
                        borderRadius: ".5rem",
                      }}
                      src={`${process.env.REACT_APP_IMG}/${data?.bankAccount?.passbook}`}
                      alt="photo"
                    />
                  </div>
                </div> */}
                {/* <div
                  style={{
                    // background: "lightBlue",
                    padding: "1rem",
                    borderRadius: ".5rem",
                    margin: ".5rem",
                  }}
                >
                  <h3>
                    Shop Banner:
                    <img
                      style={{
                        height: "auto",
                        width: "100%",
                        borderRadius: ".5rem",
                      }}
                      src={`${process.env.REACT_APP_IMG}/${data.banner}`}
                      alt="photo"
                    />
                  </h3>
                </div> */}

                {/* <div
                  style={{
                    // background: "lightBlue",
                    padding: "1rem",
                    borderRadius: ".5rem",
                    margin: ".5rem",
                  }}
                >
                  <h3>photos:</h3>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      // background: "Blue",
                      padding: "1rem",
                      borderRadius: ".5rem",
                      margin: ".5rem",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {data?.photos?.map((elm) => (
                      <div key={elm} style={{ height: "43vh", width: "45%" }}>
                        <img
                          style={{
                            height: "40vh",
                            width: "100%",
                            borderRadius: ".5rem",
                          }}
                          src={`${process.env.REACT_APP_IMG}/${elm}`}
                          alt="photo"
                        />
                      </div>
                    ))}
                  </div>
                </div> */}
              </>
            ))
          ) : (
            <>
              <div
                style={{
                  textAlign: "center",
                  // padding: "1.5rem",
                  margin: "1.5rem",
                }}
              >
                <div>User Have No Car Found</div>
                <img src={imag} alt="data" style={{ height: "20vmax" }} />
              </div>
            </>
          )}
          {/* </Card> */}
        </SoftBox>
      </BasicModal>
    </div>
  );
};

export default index;
