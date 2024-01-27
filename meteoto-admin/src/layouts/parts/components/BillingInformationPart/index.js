// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import PropTypes from "prop-types";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
// import SoftBox from "components/SoftBox";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import CreateDelete from "../../deleteModalPart";
import imag from "../../../../assets/images/nodata.png";
import SoftButton from "components/SoftButton";

// import PropTypes from "prop-types";

function BillingInformation({
  data,
  setFunc,
  setShowCase,
  handleRefresh,
  edit,
  delFunc,
}) {

  const [showForm, setShowForm] = useState(false);
  const [delId, setDelId] = useState("");
  // const [refresh, setRefresh] = useState(0);

  // const handleRefresh = () => setRefresh(refresh + 1);

  const handleShowForm = (e) => {
    setShowForm(!showForm);
    setDelId(e);

  
  };

  const handleIdClick = (dat) => {
    // console.log(dat, dat?.brandId?._id, "thhhhhh");

    setFunc(dat._id);

    setShowCase({ category: false, part: true });
  };

  return (
    <Card>
      <CreateDelete
        show={showForm}
        unShow={setShowForm}
        id={delId}
        handleRefresh={handleRefresh}
        delFunc={delFunc}
      />
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          {data && data[0]?.parent == null ? "Category" : "Part"}
        </SoftTypography>
      </SoftBox>
      {data && data.length > 0 ? (
        <>
          <SoftBox pt={1} pb={2} px={2}>
            <SoftBox
              component="ul"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              p={0}
              m={0}
              flexWrap="wrap"
            >
              {data &&
                data?.map((ele) => (
                  <SoftBox
                    key={ele?._id}
                    component="li"
                    borderRadius="lg"
                    p={3}
                    // mb={noGutter ? 0 : 1}
                    mt={2}
                    sx={{ listStyle: "none" }}
                    style={{ width: "18rem" }}
                  >
                    {/* <SoftBox sx={{ listStyle: "none", width: "250px" }}> */}
                    {/* <SoftBox sx={{ listStyle: "none", width: "240px" }}> */}
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.REACT_APP_IMG}/${ele.image}`}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ele.name}
                        </Typography>

                        <CardActions>
                          <Stack direction="row" spacing={7}>
                            <Button
                              variant="contained"
                              style={{ color: "white" }}
                              onClick={() => handleShowForm(ele)}
                            >
                              <DeleteIcon />
                            </Button>
                            <Button
                              variant="contained"
                              style={{ color: "white" }}
                              onClick={() => edit(ele)}
                            >
                              <EditIcon />
                            </Button>
                          </Stack>
                        </CardActions>
                      </CardContent>
                      <CardActions>
                        {data[0].parent === null && (
                          <SoftButton
                            color="info"
                            variant="gradient"
                            style={{
                              color: "white",
                              margin: "auto",
                              marginBottom: "20px",
                            }}
                            onClick={() => {
                              handleIdClick(ele);
                            }}
                          >
                            view Parts
                          </SoftButton>
                        )}
                      </CardActions>
                    </Card>
                    {/* </SoftBox> */}
                    {/* </SoftBox> */}
                  </SoftBox>
                ))}
            </SoftBox>
          </SoftBox>
        </>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              margin: "1.5rem",
            }}
          >
            <img
              src={imag}
              alt="data"
              style={{ width: "25vmax", height: "25vmax" }}
            />
          </div>
        </>
      )}
    </Card>
  );
}

Bill.defaultProps = {
  noGutter: false,
};

BillingInformation.propTypes = {
  data: PropTypes.array.isRequired,
  brand: PropTypes.array.isRequired,
  setFunc: PropTypes.function,
  setShowCase: PropTypes.function,
  handleRefresh: PropTypes.function,
  edit: PropTypes.function,
  delFunc: PropTypes.function,
  // company: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // vat: PropTypes.string.isRequired,
  // noGutter: PropTypes.bool,
};

export default BillingInformation;
