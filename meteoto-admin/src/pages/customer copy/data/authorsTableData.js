import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import team2 from "assets/images/team-2.jpg";
import Icon from "@mui/material/Icon";
import React, { useState } from "react";

export function CustomerData({ data, view, edit, deleto }) {
  const tableData = {
    columns: [
      { name: "Admin", align: "left" },
      // { name: "Password", align: "left" },
      { name: "Permission", align: "left" },
      { name: "edit", align: "center" },
      { name: "delete", align: "center" },
    ],

    rows: [],
  };

  data &&
    data.length > 0 &&
    data.map((elm, i) => {
      tableData.rows.push({
        Admin: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5} key={i}>
            {/* <SoftBox mr={2}>
              <SoftAvatar
                src={elm?.photo ? `${${process.env.REACT_APP_IMG}}/${elm?.photo}` : team2}
                alt={elm?.title}
                size="sm"
                variant="rounded"
              />
            </SoftBox> */}
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                {elm?.amount}
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                {elm?.email}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),

        Permission: (
          <SoftBox display="flex" flexDirection="row">
            {elm?.permission.map((per, i) => (
              <SoftTypography
                variant="caption"
                color="secondary"
                key={i}
                style={{ marginRight: "5px" }}
              >
                {per}
              </SoftTypography>
            ))}
          </SoftBox>
        ),
        edit: (
          <Icon
            fontSize="small"
            style={{ cursor: "pointer" }}
            color="info"
            onClick={() => edit(elm)}
          >
            edit
          </Icon>
        ),
        delete: (
          <Icon
            fontSize="small"
            style={{ cursor: "pointer" }}
            color="info"
            onClick={() => deleto(elm)}
          >
            delete
          </Icon>
        ),
      });
    });
  return tableData;
}

export default CustomerData;
