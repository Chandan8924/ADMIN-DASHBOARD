import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import team2 from "assets/images/team-2.jpg";
import Icon from "@mui/material/Icon";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import toast from "react-hot-toast";
import LocationEditForm from "./LocationEditForm";

// const [showShopEditForm, setShowShopEditForm] = useState(false);

function LocationData1({ data, refresh, edit, update }) {
  const tableData = {
    columns: [
      { name: "sno", align: "left" },
      { name: "city", align: "left" },
      { name: "state", align: "left" },
      { name: "on/off", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: [],
  };

  const updateLocationData = id => {
    try {
      fetch(
        `${process.env.REACT_APP_API}/api/location/updateVisibility/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
        sno: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5} key={i}>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                {i + 1}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),

        city: (
          <SoftBox display="flex" flexDirection="row">
            <SoftTypography
              variant="caption"
              color="secondary"
              key={i}
              style={{ marginRight: "5px" }}
            >
              {elm?.city ? elm?.city : "NA"}
            </SoftTypography>
          </SoftBox>
        ),
        state: (
          <SoftBox display="flex" flexDirection="row">
            <SoftTypography
              variant="caption"
              color="secondary"
              key={i}
              style={{ marginRight: "5px" }}
            >
              {elm.state ? elm.state : "NA"}
            </SoftTypography>
          </SoftBox>
        ),

        "on/off": (
          <Switch
            name="on/off"
            color="info"
            checked={elm.visibility ? true : false}
            onClick={() => updateLocationData(elm?._id)}
          ></Switch>
        ),

        action: (
          <Icon
            fontSize="small"
            style={{ cursor: "pointer" }}
            color="info"
            onClick={() => (
              <LocationEditForm
                show={true}
                unShow={false}
                handleRefresh={refresh}
                elm
              />
            )}
          >
            edit
          </Icon>
        ),
      });
    });
  return tableData;
}

export default LocationData1;
