import React, { useEffect, useState, useRef } from "react";
import SoftInput from "components/SoftInput";
// import Uploader from "components/ApnaUploader";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Card, Typography, FormControl, Select, MenuItem, Stack, Icon } from "@mui/material";
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

const index = ({ show, unShow, handleRefresh, data, id, delFunc }) => {
 

  const handleDelete = (dat) => {
 
    deleteCategory(dat);
  };

  const token = localStorage.getItem("token");
  const deleteCategory = (ev) => {
    try {
      fetch(`${process.env.REACT_APP_API}/api/deleteListCategory/${ev._id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            toast.success(result.message);
            unShow();
            // ev.parent != null && delFunc(ev.parent);
            handleRefresh();
          } else {
            toast.error(result.message);
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <BasicModal show={show} unShow={unShow}>
        <SoftBox mt={2}>
          <Card
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
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "red",
                padding: "2rem",
              }}
            >
              Are you sure you want to Delete??
            </div>
            <Stack direction="row" spacing={2}>
              <SoftButton
                variant="gradient"
                color="info"
                style={{ width: "80%", margin: "auto" }}
                // onClick={() => {
                //   id && deleteCar(id);
                // }}
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <Icon sx={{ fontWeight: "bold" }}>delete</Icon>
                &nbsp;Delete
              </SoftButton>
            </Stack>
          </Card>
        </SoftBox>
      </BasicModal>
    </div>
  );
};

export default index;
