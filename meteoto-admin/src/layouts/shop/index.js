// @mui material components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "../../examples/Tables/Table";
import Modal from "@mui/material/Modal";
import CreateExpense from "./form/index";
import CreateShopInfo from "./shopInfoModal/index";
import Grid from "@mui/material/Grid";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import Loading from "components/ApnaLoading";
import customerData from "./data/index";
import ViewCustomer from "../../pages/customer copy/view";
import DropdownScreen from "components/Dropdown/DropdownScreen";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Divider from "@mui/material/Divider";
import SpaceShip from "examples/Icons/SpaceShip";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import BuildIcon from "@mui/icons-material/Build";

// import CreateDelete from "./deleteModalSubAdmin";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import { useState, useEffect } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import toast from "react-hot-toast";
import { Skeleton } from "@mui/material";

function User() {
  const [showForm, setShowForm] = useState(false);
  const [showFormDelete, setShowFormDelete] = useState(false);
  const [deleteId, setDleteId] = useState("");
  const [open, setOpen] = useState(false);
  // const { columns, rows } = authorsTableData;
  //   const { columns: prCols, rows: prRows } = projectsTableData;
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { columns, rows } = data;
  const [customerId, setCustomerId] = useState("");
  const [showCustomer, setshowCustomer] = useState(false);
  const [showShopForm, setShowShopForm] = useState(false);
  const [expeneId, setExpeneId] = useState("");
  const [shopInfo, setShopInfo] = useState("");
  const [skelLoading, setSkelLoading] = useState(false);
  const [count, setCount] = useState("");
 

  const handleRefresh = () => setRefresh(refresh + 1);

  const handleShowForm = e => {
    setShowForm(!showForm);
    setExpeneId(e);
    
  };

  const handleShopShowInfo = e => {
    setShowShopForm(!showShopForm);
    setShopInfo(prev => e);
    
  };

  //   const handleViewCustomer = (e) => {
  //     setshowCustomer(!showCustomer);
  //     setCustomerId(e);
  //   };

  // const handleDelete = (e) => {
  //   setShowFormDelete(!showFormDelete);
  //   setExpeneId(e);
  // };

  const [content, setContent] = useState("Shop");

  const [shopsData, setShopsData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilterClick = () => {
    const newFilteredData = count?.shops?.filter(item =>
      item.shopType.toLowerCase().includes(content.toLowerCase())
    );

    setFilteredData(newFilteredData);
  };

  const getAllShop = () => {
    setRefresh(false);

    try {
      setSkelLoading(true);
      setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/getAllShop`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(result => {
        
          if (result.success) {
            setCount(result);
            setSkelLoading(false);
            setLoading(false);
            setData(
              customerData({
                data: result?.shops,
                // view: handleHide,
                refresh: setRefresh,
                edit: handleShopShowInfo,
                update: handleShowForm,
              })
            );
            setShopsData(result?.shops)
           
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getAllShop();
  }, [refresh]);


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CreateExpense
        show={showForm}
        unShow={setShowForm}
        data={expeneId}
        handleRefresh={handleRefresh}
      />
      <CreateShopInfo
        show={showShopForm}
        unShow={setShowShopForm}
        data={shopInfo}
        handleRefresh={handleRefresh}
      />

      {skelLoading ? (
        <>
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
          <Skeleton
            variant="rounded"
            style={{ borderRadius: "12px", marginTop: "15px" }}
            width={1180}
            height={80}
          />
        </>
      ) : (
        <>
          <SoftBox py={3}>
            <SoftBox mb={3}>
              <div style={{ display: "flex" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={10}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6} xl={3}>
                        <MiniStatisticsCard
                          title={{ text: "Total Shop" }}
                          count={count.shopCount} //"53,000"
                          icon={{ color: "info", component: "businesscenter" }}
                        />
                      </Grid>
                      {/* <Grid item xs={12} md={6} xl={3}>
                      <MiniStatisticsCard
                        title={{ text: "Experied Offer" }}
                        count={count.expiredOffer} //"53,000"
                        icon={{ color: "info", component: "devices" }}
                      />
                    </Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
                {/* <DropdownScreen style={{justifyContent: "end"}} /> */}

                <Dropdown style={{ justifyContent: "end" }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => {
                        return (
                          setContent("AutoParts"),
                          setData(
                            customerData({
                              data: shopsData?.filter(doc => doc.shopType === "AUTOPART"),
                              // view: handleHide,
                              edit: handleShopShowInfo,
                              update: handleShowForm,
                            })
                          )
                        )
                      }}
                    >
                      {" "}
                      <BuildIcon size="12px" /> &nbsp; Auto Parts
                    </Dropdown.Item>
                    <Divider sx={{ my: 0.5 }} />

                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => {
                        return (
                          setContent("Garage's"),
                          setData(
                            customerData({
                              data: shopsData?.filter(doc => doc.shopType === "GARAGE"),
                              // view: handleHide,
                              edit: handleShopShowInfo,
                              update: handleShowForm,
                            })
                          )
                        )
                      }}
                    >
                      {" "}
                      <TimeToLeaveIcon size="12px" /> &nbsp; Garage's
                    </Dropdown.Item>
                    <Divider sx={{ my: 0.5 }} />
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => {
                        return (
                          setContent("Emergency"),
                          setData(
                            customerData({
                              data: shopsData?.filter(doc => doc.shopType === "EMERGENCY"),
                              // view: handleHide,
                              edit: handleShopShowInfo,
                              update: handleShowForm,
                            })
                          )
                        )
                      }}
                    >
                      <SpaceShip size="12px" /> &nbsp; Emergency
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <SoftBox my={3}>
                <Card>
                  <SoftBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={3}
                  >
                    <SoftTypography variant="h6"> {content}</SoftTypography>

                    <Button
                      variant="contained"
                      color="primary"
                      style={{ color: "white" }}
                      onClick={() => handleShowForm(null)}
                    >
                      Create Shop
                    </Button>
                  </SoftBox>
                  <SoftBox
                    sx={{
                      "& .MuiTableRow-root:not(:last-child)": {
                        "& td": {
                          borderBottom: ({
                            borders: { borderWidth, borderColor },
                          }) => `${borderWidth[1]} solid ${borderColor}`,
                        },
                      },
                    }}
                  >
                    {loading ? (
                      <Loading />
                    ) : (
                      <Table columns={columns} rows={rows} />
                    )}
                  </SoftBox>
                </Card>
              </SoftBox>
            </SoftBox>
            {/* <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Projects table</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
        </Card> */}
          </SoftBox>
        </>
      )}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default User;
