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
// import CreateExpense from "./form/index";
import Loading from "components/ApnaLoading";
import customerData from "./data/index";
import ViewCustomer from "../../pages/customer copy/view";
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
import CreateShopInfo from "./shopInfoModal/index";

function User() {
  const [showForm, setShowForm] = useState(false);
  const [showFormDelete, setShowFormDelete] = useState(false);
  const [deleteId, setDleteId] = useState("");
  const [open, setOpen] = useState(false);
  // const { columns, rows } = authorsTableData;
  //   const { columns: prCols, rows: prRows } = projectsTableData;
  const [refresh, setRefresh] = useState(0);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { columns, rows } = data;
  const [customerId, setCustomerId] = useState("");
  const [showCustomer, setshowCustomer] = useState(false);
  const [expeneId, setExpeneId] = useState(null);
  const [skelLoading, setSkelLoading] = useState(false);
  const [userCarInfo, setUserCarInfo] = useState("");
  const [showCarForm, setShowCarForm] = useState(false);

  const handleRefresh = () => setRefresh(refresh + 1);

  const handleShopShowInfo = (elm) => {
    setShowCarForm(!showCarForm);
    setUserCarInfo(elm);
    console.log(elm, "aya");
  };

  //   const handleShowForm = (e) => {
  //     setShowForm(!showForm);
  //     setExpeneId(e);
  //     console.log(e);
  //   };
  //   const handleViewCustomer = (e) => {
  //     setshowCustomer(!showCustomer);
  //     setCustomerId(e);
  //   };

  //   const handleDelete = (e) => {
  //     setShowFormDelete(!showFormDelete);
  //     setDleteId(e);
  //   };

  const getCustomerList = () => {
    try {
      setSkelLoading(true);
      setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/getAllUser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
            setSkelLoading(false);
            setLoading(false);
            setData(
              customerData({
                data: result?.user,
                // view: handleHide,
                edit: handleShopShowInfo,
                // deleto: handleDelete,
              })
            );
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getCustomerList();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <CreateShopInfo
        show={showCarForm}
        unShow={setShowCarForm}
        data={userCarInfo}
        handleRefresh={handleRefresh}
      />
      {/* <CreateExpense
        show={showForm}
        unShow={setShowForm}
        data={expeneId}
        handleRefresh={handleRefresh}
      />
      <CreateDelete
        show={showFormDelete}
        unShow={setShowFormDelete}
        handleRefresh={handleRefresh}
        id={deleteId}
      /> */}
      {/* <ViewCustomer show={showCustomer} unShow={setshowCustomer} data={customerId} /> */}
      <SoftBox py={3}>
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
            <SoftBox mb={3}>
              <Card>
                <SoftBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <SoftTypography variant="h6">User</SoftTypography>
                  {/* <Button
                variant="contained"
                color="primary"
                style={{ color: "white" }}
                onClick={() => handleShowForm(null)}
              >
                Create Admin
              </Button> */}
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
          </>
        )}
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
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default User;
