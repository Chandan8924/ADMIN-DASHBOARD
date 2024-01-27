// @mui material components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import Table from "../../examples/Tables/Table";
import Modal from "@mui/material/Modal";
import CreateExpense from "../layouts/shop/form/index";
import Location from "../layouts/shop/Location/Index";
import CreateShopInfo from "../layouts/shop/shopInfoModal/index";
import Grid from "@mui/material/Grid";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import Loading from "components/ApnaLoading";
// import ViewCustomer from "../../pages/customer copy/view";
// import DropdownScreen from "components/Dropdown/DropdownScreen";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Divider from "@mui/material/Divider";
import SpaceShip from "examples/Icons/SpaceShip";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import BuildIcon from "@mui/icons-material/Build";
import Loading from "components/ApnaLoading";
import LocationData1 from "./shop/Location/LocationData1";

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
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import authorsTableData from "./tables/data/authorsTableData";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import LocationEditForm from "./shop/Location/LocationEditForm";
import BootstrapTable from "react-bootstrap-table-next";
import Icon from "@mui/material/Icon";

// import { Table } from "flowbite-react";

function Index() {
  const [showForm, setShowForm] = useState(false);
  const [showFormDelete, setShowFormDelete] = useState(false);
  const [deleteId, setDleteId] = useState("");
  const [open, setOpen] = useState(false);
  // const { columns, rows } = authorsTableData;
  //   const { columns: prCols, rows: prRows } = projectsTableData;
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("token");
  const adminId = localStorage.getItem("userid");
  const [loading, setLoading] = useState(false);
  // const { columns, rows } = data;
  const [customerId, setCustomerId] = useState("");
  const [showCustomer, setshowCustomer] = useState(false);
  const [showShopForm, setShowShopForm] = useState(false);
  const [expeneId, setExpeneId] = useState("");
  const [shopInfo, setShopInfo] = useState("");
  const [skelLoading, setSkelLoading] = useState(false);
  const [count, setCount] = useState("");

  const [data, setData] = useState([]);

  const [currentEditState, setCurrentEditState] = useState(false); //NEW

  const [editseen, setEditSeen] = useState(false);

  const handleRefresh = () => setRefresh(refresh + 1);

  const columns = [
    { dataField: "sno", text: "S.No." },
    {
      dataField: "city",
      text: "City",
    },
    { dataField: "state", text: "State" },
    { dataField: "on/off", text: "Visibility" },
    { dataField: "action", text: "Action" },
  ];

  const handleShowForm = e => {
    setShowForm(!showForm);
    setExpeneId(e);
    console.log(e);
  };

  const handleShopShowInfo = e => {
    setShowShopForm(!showShopForm);
    setShopInfo(prev => e);
    console.log(e);
  };

  //   const handleViewCustomer = (e) => {
  //     setshowCustomer(!showCustomer);
  //     setCustomerId(e);
  //   };

  // const handleDelete = (e) => {
  //   setShowFormDelete(!showFormDelete);
  //   setExpeneId(e);
  // };

  const [content, setContent] = useState("Location");

  const [shopsData, setShopsData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilterClick = () => {
    const newFilteredData = count?.shops?.filter(item =>
      item.shopType.toLowerCase().includes(content.toLowerCase())
    );

    setFilteredData(newFilteredData);
  };

  const getAllLocation = () => {
    setRefresh(false);
    try {
      setSkelLoading(true);
      setLoading(true);
      fetch(
        `${process.env.REACT_APP_API}/api/getAllLocationForAdmin/${adminId}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      )
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            setCount(result);
            setSkelLoading(false);
            setLoading(false);
            const locationData = result?.listShop.map((doc, index) => ({
              sno: index + 1,
              city: doc?.city,
              state: doc?.state,
              "on/off": doc?.visibility,
              action: (
                <Icon
                  fontSize="small"
                  style={{ cursor: "pointer" }}
                  color="dark"
                  onClick={() => {
                    setCurrentEditState(doc);
                    edittogglePop();
                  }}
                >
                  edit
                </Icon>
              ),
            }));
            setData(locationData);
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllLocation();
  }, [refresh]);

  function edittogglePop() {
    setEditSeen(!editseen);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Location
        show={showShopForm}
        unShow={setShowShopForm}
        data={shopInfo}
        handleRefresh={handleRefresh}
      />

      {editseen ? (
        <ServiceTypeEditForm
          toggle={edittogglePop}
          reloadData={setRefresh}
          data={currentEditState}
        />
      ) : null}

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
              <div>
                <Grid container spacing={1}>
                  <h2>List of Location</h2>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ color: "white" }}
                  onClick={() => handleShopShowInfo(null)}
                >
                  Add Location
                </Button>
                {/* <DropdownScreen style={{justifyContent: "end"}} /> */}

                <h6 style={{ float: "inline-end" }}>Location / List</h6>
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
                      <BootstrapTable
                        keyField="id"
                        data={data}
                        columns={columns}
                      />
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

export default Index;