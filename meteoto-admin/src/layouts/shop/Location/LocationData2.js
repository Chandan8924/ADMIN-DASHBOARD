import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import toast from "react-hot-toast";
import LocationEditForm from "./LocationEditForm";

function LocationData2({ data, refresh, edit, update }) {
  const [showLocationEditForm, setShowLocationEditForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);


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

  const handleEditLocation = (location) => {
    setSelectedLocation(location);
    setShowLocationEditForm(true);
  };

  const closeLocationEditForm = () => {
    setSelectedLocation(null);
    setShowLocationEditForm(false);
  };

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
            onClick={() => handleEditLocation(elm)}
          >
            edit
          </Icon>
        ),
      });
    });

  return (
    <>
      {showLocationEditForm && (
        <LocationEditForm
          show={showLocationEditForm}
          unShow={closeLocationEditForm}
          handleRefresh={refresh}
          elm={selectedLocation}
        />
      )}
      {tableData}
    </>
  );
}

export default LocationData2;
