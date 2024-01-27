// @mui material components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "components/ApnaLoading";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Skeleton, Switch } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import BootstrapTable from "react-bootstrap-table-next";
import Icon from "@mui/material/Icon";
import Location from "../layouts/shop/Location/Index";
import LocationEditForm from "../layouts/shop/Location/LocationEditForm";


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
            setRefresh(true);
          } else {
            toast.error(result.message);
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
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
              // "on/off": doc?.visibility,
              "on/off": (
                <Switch
                  name="ActiveInactive"
                  color="info"
                  checked={doc?.visibility}
                  onClick={() => updateLocationData(doc?._id)}
                />
              ),
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
        <LocationEditForm
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
          </SoftBox>
        </>
      )}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Index;
