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

const index = ({ show, unShow, handleRefresh, data }) => {
 
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
  ];

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
                marginBottom: ".5rem",
                width: "100%",
              }}
            >
              <h5 style={{ marginBottom: "0.5rem" }}>Shop Details -</h5>
              <p>Shop Name : {data?.name}</p>
              <p>Address : {data?.address}</p>
              <p>Shop Type : {data?.shopType}</p>
              {/* <h4>Shop emergencyService : {data?.emergencyService}</h4> */}
              <p>Shop GST : {data?.GST}</p>

              {/* <h4>Alternate No : {data?.alternateNo}</h4> */}
              {/* <h4>noOfServiceDay : {data?.noOfServiceDay}</h4> */}
              {/* <h4>garagePriority No : {data?.garagePriority}</h4> */}
            </div>

            <div
              style={{
                // background: "lightBlue",
                boxShadow:
                  " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                border: "1px solid  gainsboro",
                fontSize: "1rem",
                padding: "1rem",
                borderRadius: ".5rem",
                marginBottom: ".5rem",
                width: "100%",
              }}
            >
              <h5 style={{ marginBottom: "0.5rem" }}>Vendor Details -</h5>
              <p>Vendor Name: {data?.vendorId?.fullName}</p>
              <p>Vendor Phone: {data?.vendorId?.phone}</p>
              <p>Vendor Type: {data?.vendorId?.type}</p>
              <p>Vendor verified: {data?.vendorId?.verified}</p>
              {/* <h5>Passbook photo:</h5> */}
            </div>
          </div>

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
                marginBottom: ".5rem",
                width: "100%",
              }}
            >
              <h5 style={{ marginBottom: "0.5rem" }}>ID Details -</h5>
              {data?.ID?.map((elm) => (
                <div key={elm._id}>
                  <p>ID Type : {elm?.idType}</p>
                  <p>ID Number : {elm?.idNumber}</p>
                  <p>ID Photo : </p>
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
                // background: "lightBlue",
                boxShadow:
                  " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                border: "1px solid  gainsboro",
                fontSize: "1rem",
                padding: "1rem",
                borderRadius: ".5rem",
                marginBottom: ".5rem",
                width: "100%",
              }}
            >
              <h5 style={{ marginBottom: "0.5rem" }}>Bank Details -</h5>
              <p>Account Number: {data?.bankAccount?.accountNumber}</p>
              <p>ifsc Code: {data?.bankAccount?.ifscCode}</p>
              <p>Passbook photo:</p>
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
          </div>
          <div
            style={{
              // background: "lightBlue",
              boxShadow:
                " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "1px solid  gainsboro",
              fontSize: "1rem",
              padding: "1rem",
              borderRadius: ".5rem",
              margin: ".5rem",
            }}
          >
            <h5>
              Shop Banner:
              <img
                style={{
                  height: "50vh",
                  width: "100%",
                  borderRadius: ".5rem",
                }}
                src={`${process.env.REACT_APP_IMG}/${data.banner}`}
                alt="photo"
              />
            </h5>
          </div>

          <div
            style={{
              // background: "lightBlue",
              boxShadow:
                " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "1px solid  gainsboro",
              fontSize: "1rem",
              padding: "1rem",
              borderRadius: ".5rem",
              margin: ".5rem",
            }}
          >
            <h5>photos:</h5>
            <div
              style={{
                width: "100%",
                // display: "flex",
                // justifyContent: "space-between",
                // background: "Blue",
                padding: "1rem",
                borderRadius: ".5rem",
                // margin: ".5rem",
                // flexWrap: "wrap",
                // gap: "0.5rem",
              }}
            >
              {data?.photos?.map((elm) => (
                <div key={elm} style={{ height: "43vh", width: "100%" }}>
                  <img
                    style={{
                      height: "30vh",
                      width: "100%",
                      borderRadius: ".5rem",
                    }}
                    src={`${process.env.REACT_APP_IMG}/${elm}`}
                    alt="photo"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* </Card> */}
        </SoftBox>
      </BasicModal>
    </div>
  );
};

export default index;
