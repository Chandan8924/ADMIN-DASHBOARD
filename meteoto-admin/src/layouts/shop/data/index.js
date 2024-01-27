import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import team2 from "assets/images/team-2.jpg";
import Icon from "@mui/material/Icon";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

export function CustomerData({ data, view, refresh, edit, update }) {
  const tableData = {
    columns: [
      { name: "ShopType", align: "left" },
      { name: "ShopName", align: "left" },
      { name: "OwnerName", align: "left" },
      { name: "OwnerPhone", align: "left" },
      { name: "ActiveInactive", align: "left" },
      { name: "ShopInformation", align: "center" },
      { name: "Update", align: "center" },
      { name: "Order", align: "center" },
    ],

    rows: [],
  };

  const updateShopData = id => {
    try {
      fetch(`${process.env.REACT_APP_API}/api/vendor/update/activeness/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            refresh();
          } else {
            toast.error(result.message);
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  data &&
    data.length > 0 &&
    data.map((elm, i) => {
      tableData.rows.push({
        ShopType: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5} key={i}>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography
                variant="button"
                class="btn btn-light"
                fontWeight="medium"
              >
                {elm?.shopType}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        ShopName: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5} key={i}>
            <SoftBox mr={2}>
              <SoftAvatar
                src={
                  elm?.banner
                    ? `${process.env.REACT_APP_IMG}/${elm?.banner}`
                    : team2
                }
                alt={elm?.title}
                size="sm"
                variant="rounded"
              />
            </SoftBox>

            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                {elm?.name}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),

        OwnerName: (
          <SoftBox display="flex" flexDirection="row">
            <SoftTypography
              variant="caption"
              color="secondary"
              key={i}
              style={{ marginRight: "5px" }}
            >
              {elm?.vendorId?.fullName ? elm?.vendorId?.fullName : "NA"}
            </SoftTypography>
          </SoftBox>
        ),
        OwnerPhone: (
          <SoftBox display="flex" flexDirection="row">
            <SoftTypography
              variant="caption"
              color="secondary"
              key={i}
              style={{ marginRight: "5px" }}
            >
              {elm?.vendorId?.phone ? elm?.vendorId?.phone : "NA"}
            </SoftTypography>
          </SoftBox>
        ),

        // Email: (
        //   <SoftBox display="flex" flexDirection="row">
        //     <SoftTypography
        //       variant="caption"
        //       color="secondary"
        //       key={i}
        //       style={{ marginRight: "5px" }}
        //     >
        //       {elm?.userId?.email}
        //     </SoftTypography>
        //   </SoftBox>
        // ),

        ShopInformation: (
          <Icon
            fontSize="small"
            style={{ cursor: "pointer" }}
            color="info"
            onClick={() => edit(elm)}
          >
            visibility
          </Icon>
        ),

        ActiveInactive: (
          <Switch
            name="ActiveInactive"
            color="info"
            checked={elm?.vendorId?.disabled ? false : true}
            onClick={() => updateShopData(elm?.vendorId?._id)}
          ></Switch>
        ),

        Update: (
          <Icon
            fontSize="small"
            style={{ cursor: "pointer" }}
            color="info"
            onClick={() => update(elm)}
          >
            edit
          </Icon>
        ),
        Order: (
          <NavLink
            to={{
              pathname:
                elm?.shopType === "AUTOPART" ? "/orders" : "/garageorders",
            }}
            state={{
              pickup_location: elm?.shopType === "AUTOPART" && elm?.pickup_location,
              garageId: elm?.shopType == "GARAGE" && elm?._id,
              vendorName: elm?.name,
            }}
          >
            <Button variant="contained" style={{ color: "black" }}> 
              {" "}
              {
                elm?.shopType === "AUTOPART" ? 'orders' : "requests"
              }
            </Button>
          </NavLink>
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
