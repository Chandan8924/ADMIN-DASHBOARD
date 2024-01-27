import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import team2 from "assets/images/user-avatar.png";
import Icon from "@mui/material/Icon";
import React, { useState } from "react";

export function CustomerData({ data, view, edit, deleto }) {
  const tableData = {
    columns: [
      // { name: "Avatar", align: "left" },
      { name: "Name", align: "left" },
      // { name: "Password", align: "left" },
      { name: "Phone", align: "left" },
      { name: "Email", align: "left" },
      { name: "AlreadyCar", align: "left" },
      { name: "CarInformation", align: "center" },
      //   { name: "delete", align: "center" },
    ],

    rows: [],
  };

  data &&
    data.length > 0 &&
    data.map((elm, i) => {
      tableData.rows.push({
        // Avatar: (
        //   <SoftBox mr={2}>
        //     <SoftAvatar
        //       // `${process.env.REACT_APP_IMG}/${ele.image}`
        //       src={
        //         elm?.profile
        //           ? `${process.env.REACT_APP_IMG}/${elm?.profile}`
        //           : team2
        //       }
        //       alt={elm?.title}
        //       size="sm"
        //       variant="rounded"
        //     />
        //   </SoftBox>
        // ),
        Name: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5} key={i}>
            <SoftBox mr={2}>
              <SoftAvatar
                src={
                  elm?.profile
                    ? `${process.env.REACT_APP_IMG}/${elm?.profile}`
                    : team2
                }
                alt={elm?.title}
                size="sm"
                variant="rounded"
              />
            </SoftBox>
            {console.log(elm, "abaaa")}
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                {elm?.fullName}
              </SoftTypography>
              {/* <SoftTypography variant="caption" color="secondary">
                {elm?.email}
              </SoftTypography> */}
            </SoftBox>
          </SoftBox>
        ),
        // Password: (
        //   <SoftBox display="flex" flexDirection="row" justifyContent="space-around">
        //     <SoftBox style={{ width: "80%" }}>
        //       <SoftTypography variant="caption" color="secondary">
        //         {showPassword ? elm?.password : "********"}
        //       </SoftTypography>
        //     </SoftBox>
        //     <SoftBox style={{ width: "20%" }}>
        //       <Icon
        //         fontSize="small"
        //         style={{ cursor: "pointer" }}
        //         color="inherit"
        //         onClick={() => {
        //           console.log("Icon clicked"); // Add this line for debugging
        //           view();
        //         }}
        //       >
        //         {showPassword ? "visibility_off" : "visibility"}
        //       </Icon>
        //     </SoftBox>
        //   </SoftBox>
        // ),
        Phone: (
          <SoftBox display="flex" flexDirection="row">
            <SoftTypography
              variant="caption"
              color="secondary"
              key={i}
              style={{ marginRight: "5px" }}
            >
              {elm.phone}
            </SoftTypography>
          </SoftBox>
        ),
        Email: (
          <SoftBox display="flex" flexDirection="row">
            <SoftTypography
              variant="caption"
              color="secondary"
              key={i}
              style={{ marginRight: "5px" }}
            >
              {elm.email}
            </SoftTypography>
          </SoftBox>
        ),
        AlreadyCar: (
          <SoftBox display="flex" flexDirection="row">
            <SoftTypography
              variant="caption"
              color="secondary"
              key={i}
              style={{ marginRight: "5px" }}
            >
              {elm.alreadyCar === false ? "No" : "Yes"}
            </SoftTypography>
          </SoftBox>
        ),
        CarInformation: (
          <Icon
            fontSize="small"
            style={{ cursor: "pointer" }}
            color="info"
            onClick={() => edit(elm)}
          >
            visibility
          </Icon>
        ),
        // delete: (
        //   <Icon
        //     fontSize="small"
        //     style={{ cursor: "pointer" }}
        //     color="inherit"
        //     onClick={() => deleto(elm?._id)}
        //   >
        //     delete
        //   </Icon>
        // ),
      });
    });
  return tableData;
}

export default CustomerData;
