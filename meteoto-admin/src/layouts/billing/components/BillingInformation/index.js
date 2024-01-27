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
import CreateDelete from "../../deleteModal";
import imag from "../../../../assets/images/nodata.png";
import SoftButton from "components/SoftButton";

// import PropTypes from "prop-types";

function BillingInformation({
  data,
  setFunc,
  setShowCase,
  handleRefresh,
  edit,
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
  

    dat.type == "brand" && setFunc({ id: dat?._id, type: "model" });
    dat.type == "model" &&
      setFunc({ id: dat?._id, brId: dat.brandId._id, type: "varient" });
    dat.type == "brand" &&
      setShowCase &&
      setShowCase({ brand: false, model: true, varient: false });
    dat.type == "model" &&
      setShowCase &&
      setShowCase({ brand: false, model: false, varient: true });
  };

  return (
    <Card>
      <CreateDelete
        show={showForm}
        unShow={setShowForm}
        id={delId}
        handleRefresh={handleRefresh}
      />
      <SoftBox pt={3} px={2}>
        {/* <div style={{ display: "flex", width: "15%", alignItems: "center" }}> */}
        <SoftTypography variant="h6" fontWeight="medium">
          {data[0]?.type == "brand" ? "Brands" : ""}
          {data[0]?.type == "varient" ? "Varient" : ""}
          {data[0]?.type == "model" ? "Models" : ""}
        </SoftTypography>
        {/* </div> */}
      </SoftBox>
      {data && data.length > 0 ? (
        <>
          <SoftBox pt={1} pb={2} px={2}>
            <SoftBox
              component="ul"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              // flexDirection="row"
              p={0}
              m={0}
            >
              {data &&
                data?.map((ele, index) => (
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
                              onClick={() => handleShowForm(ele._id)}
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
                        {data[0].type !== "varient" && (
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
                            {data[0].type == "brand" ? "view Models" : ""}
                            {data[0].type == "model" ? "view Varients" : ""}
                          </SoftButton>
                        )}
                      </CardActions>
                    </Card>
                    {/* </SoftBox> */}
                    {/* </SoftBox> */}
                  </SoftBox>
                ))}

              {/* <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          /> */}
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
  data: PropTypes.any,
  brand: PropTypes.any,
  setFunc: PropTypes.any,
  setShowCase: PropTypes.any,
  handleRefresh: PropTypes.any,
  edit: PropTypes.any,
  // company: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // vat: PropTypes.string.isRequired,
  // noGutter: PropTypes.bool,
};

export default BillingInformation;
