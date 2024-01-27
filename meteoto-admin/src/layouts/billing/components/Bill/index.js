
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import MediaCard from "pages/card";

function Bill({ name, image, key }) {

  return (
    <SoftBox
      component="li"
      // display="flex"
      // justifyContent="space-between"
      // alignItems="flex-start"
      // bgColor="grey-100"
      borderRadius="lg"
      p={3}
      mb={1}
      mt={2}
      sx={{ listStyle: "none" }}
      style={{ width: "25%" }}
    >

      <SoftBox sx={{ listStyle: "none", width: "250px" }}>
        <MediaCard name={name} key={key} image={image} />
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
