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
import CreateDelete from "../listShopDelete";
import CreateCategory from "../listShopForm";
import CreateShop from "../createShopForm";
import imag from "../../../assets/images/nodata.png";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";
import "./style.css";

// import PropTypes from "prop-types";

function BillingInformation({
  data,
  setFunc,
  setShowCase,
  showCase,
  handleRefresh,
  edit,
  delFunc,
  id,
}) {
 
  const [showForm, setShowForm] = useState(false);

  const [delId, setDelId] = useState("");
  // const [refresh, setRefresh] = useState(0);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [shopShowCreateForm, setShopShowCreateForm] = useState(false);
  const [upFormDat, setUpFormDat] = useState(null);
  const [upShopFormDat, setUpShopFormDat] = useState(null);
  const [categoryId, setCategoryId] = useState([]);

 
  const handleCreatePartShowForm = (e) => {
    setShopShowCreateForm(!shopShowCreateForm);
    setUpShopFormDat(e);
   
  };

  const handleCreateShopShowForm = (e) => {
    setUpShopFormDat(e);
    setShopShowCreateForm(!shopShowCreateForm);
  };

  const handleCreateShowForm = (e) => {
    setShowCreateForm(!showCreateForm);
    setUpFormDat(e);
   
  };

  const handleDeleteShowForm = (e) => {
    setShowForm(!showForm);
    setDelId(e);

   
  };

  const handleIdClick = (dat) => {
    // setCategoryId(dat);
    setFunc(dat);

    setShowCase({ category: false, part: true });
  };



  return (
    <Card>
      <CreateShop
        show={shopShowCreateForm}
        unShow={setShopShowCreateForm}
        categoryId={id}
        dat={upShopFormDat}
        // data={category}
        handleRefresh={handleRefresh}
        // createRefreshFunc={createRefreshFunc}
      />
      <CreateCategory
        show={showCreateForm}
        unShow={setShowCreateForm}
        dat={upFormDat}
        // data={category}
        handleRefresh={handleRefresh}
        // createRefreshFunc={createRefreshFunc}
      />
      <CreateDelete
        show={showForm}
        unShow={setShowForm}
        id={delId}
        handleRefresh={handleRefresh}
        // delFunc={delFunc}
      />
      <SoftBox pt={3} px={2} class="ab">
        <SoftTypography
          variant="h6"
          fontWeight="medium"
          style={{ marginLeft: "2%" }}
        >
          {showCase.category ? "Category" : "Shop"}
        </SoftTypography>

        {showCase.category && (
          <SoftButton
            variant="gradient"
            color="info"
            style={{ marginRight: "2%" }}
            onClick={() => handleCreateShowForm(null)}
          >
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;Create Category
          </SoftButton>
        )}

        {showCase.part && (
          <SoftButton
            variant="gradient"
            color="info"
            style={{ marginRight: "2%" }}
            onClick={() => handleCreateShopShowForm(null)}
          >
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;Create Shop
          </SoftButton>
        )}
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
                    <Card sx={{ maxWidth: "345px" }}>
                      {showCase.part && (
                        <>
                          <CardMedia
                            sx={{ height: 140 }}
                            image={`${process.env.REACT_APP_IMG}/${ele.photo}`}
                            title="photo"
                          />
                          {/* <h5>photos:</h5>

                          {console.log(data, "dataya")}
                          {ele?.photos?.map((elm) => (
                            <CardMedia
                              key={elm}
                              sx={{ height: 140 }}
                              image={`${process.env.REACT_APP_IMG}/${elm}`}
                              title="photo"
                            />
                          ))} */}
                        </>
                      )}

                      {showCase.category && (
                        <CardMedia
                          sx={{ height: 140 }}
                          image={`${process.env.REACT_APP_IMG}/${ele.icon}`}
                          title="green iguana"
                        />
                      )}
                      <CardContent>
                        {showCase.category && (
                          <Typography gutterBottom variant="h5" component="div">
                            {ele.name}
                          </Typography>
                        )}
                        {showCase.part && (
                          <Typography gutterBottom variant="h6" component="div">
                            Name - {ele.name}
                          </Typography>
                        )}
                        {showCase.part && (
                          <Typography gutterBottom variant="h6" component="div">
                            Address - {ele.address}
                          </Typography>
                        )}
                        {showCase.part && (
                          <Typography gutterBottom variant="h6" component="div">
                            OpeningTime - {ele.openingTime}
                          </Typography>
                        )}
                        {showCase.part && (
                          <Typography gutterBottom variant="h6" component="div">
                            ClosingTime - {ele.closingTime}
                          </Typography>
                        )}
                        {showCase.part && (
                          <Typography gutterBottom variant="h6" component="div">
                            ClosingDay -
                            {ele.closingDay.map((day) => (
                              <span key={day}> {day} </span>
                            ))}
                          </Typography>
                        )}
                        {showCase.part && (
                          <Typography gutterBottom variant="h6" component="div">
                            Owner - {ele.vendorId.fullName}
                          </Typography>
                        )}
                        {showCase.part && (
                          <Typography gutterBottom variant="h6" component="div">
                            Phone - {ele.vendorId.phone}
                          </Typography>
                        )}
                        <CardActions>
                          <Stack direction="row" spacing={7}>
                            {showCase.category && (
                              <Button
                                variant="contained"
                                style={{ color: "white" }}
                                onClick={() => handleDeleteShowForm(ele)}
                              >
                                <DeleteIcon />
                              </Button>
                            )}

                            {showCase.category && (
                              <Button
                                variant="contained"
                                style={{ color: "white" }}
                                onClick={() => handleCreateShowForm(ele)}
                              >
                                <EditIcon />
                              </Button>
                            )}
                            {showCase.part && (
                              <Button
                                variant="contained"
                                style={{
                                  color: "white",
                                  marginLeft: "3rem",
                                }}
                                onClick={() => handleCreatePartShowForm(ele)}
                              >
                                <EditIcon />
                              </Button>
                            )}
                          </Stack>
                        </CardActions>
                      </CardContent>
                      <CardActions>
                        {showCase.category && (
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
                            view Shop
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
  showCase: PropTypes.object,
  id: PropTypes.string,
  // company: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // vat: PropTypes.string.isRequired,
  // noGutter: PropTypes.bool,
};

export default BillingInformation;
