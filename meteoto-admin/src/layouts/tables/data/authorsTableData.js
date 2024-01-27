/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useState } from "react";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Star() {
  return (
    <SoftBox style={{ width: "100%" }} px={1} py={0.5}>
      **********
    </SoftBox>
  );
}

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <SoftBox
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      style={{ width: "100%" }}
    >
      <SoftTypography variant="caption" fontWeight="medium" color="text" style={{ width: "60%" }}>
        {showPassword ? job : <Star />}
      </SoftTypography>
      {/* <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography> */}
      <IconButton onClick={handleClickShowPassword} style={{ width: "40%" }}>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "admin", align: "left", width: "30%" },
    { name: "password", align: "center", width: "20%" },
    // { name: "status", align: "center" },
    { name: "created", align: "center", width: "25%" },
    { name: "action", align: "center", width: "25%" },
  ],

  rows: [
    {
      admin: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      password: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          style={{ width: "50%", margin: "auto" }}
        >
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SoftTypography>
          


          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Delete
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      admin: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      password: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      action: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          style={{ width: "50%", margin: "auto" }}
        >
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Delete
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      admin: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      password: <Function job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      action: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          style={{ width: "50%", margin: "auto" }}
        >
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SoftTypography>

          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Delete
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      admin: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      password: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      action: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          style={{ width: "50%", margin: "auto" }}
        >
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Delete
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      admin: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      password: <Function job="Manager" org="Executive" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SoftTypography>
      ),
      action: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          style={{ width: "50%", margin: "auto" }}
        >
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Delete
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      admin: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      password: <Function job="Programtor" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      created: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      action: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          style={{ width: "50%", margin: "auto" }}
        >
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Delete
          </SoftTypography>
        </SoftBox>
      ),
    },
  ],
};

export default authorsTableData;
