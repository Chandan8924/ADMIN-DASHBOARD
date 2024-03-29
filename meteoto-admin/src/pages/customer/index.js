
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Grid from "@mui/material/Grid";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import customerData from './data/authorsTableData';
import Loading from "components/ApnaLoading";
import ViewCustomer from "./view"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Tables() {

  const [data, setData] = useState([]);
  const [counts, setCounts] = useState([])
  const { columns, rows } = data;
  const [loading, setLoading] = useState(false)
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const [showCustomer, setshowCustomer] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const location = useLocation();
  const search = useSelector((state)=>state.searchSlice.search);
  const [totalPage, setTotalPage] = useState(0);
  
  const handleViewCustomer = (e) => {
    setshowCustomer(!showCustomer)
    setCustomerId(e)
  }

  const getCustomerList = (ev) =>{
    try {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/v1/get/customer/admin/${id}?search=${ev}`, {
        method: "GET",
        headers: {
          Authorization: token
        }
      }).then((res) => res.json())
        .then((result) => {
         console.log(result)
          if (result.success) {
            setTotalPage(result.data?.totalPage);
            setLoading(false);
            setCounts(result.counts);
            setData(customerData({
              data: result?.data,     ////filter here
              view: handleViewCustomer
            }))
          }
          // console.log(result, 'erespnosef')
        })
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    if(location.pathname=='/customers'){
      getCustomerList(search)
    }
  }, [search]);

  console.log(counts, 'counts')

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ViewCustomer show={showCustomer} unShow={setshowCustomer} id={customerId} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "Active member" }}
                  count={counts.active}
                  percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "info", component: "paid" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "UnActive member" }}
                  count={counts.unActive}
                  percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "info", component: "public" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "Plan Online" }}
                  count={counts.onlinPlan}
                  percentage={{ color: "error", text: "-2%" }}
                  icon={{ color: "info", component: "emoji_events" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "Plan Offline" }}
                  count={counts.offlinePlan}
                  percentage={{ color: "success", text: "+5%" }}
                  icon={{
                    color: "info",
                    component: "shopping_cart",
                  }}
                />
              </Grid>
            </Grid>
          </SoftBox>
          <Card>
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
              {loading ? <Loading /> : <Table columns={columns} rows={rows} />}
            </SoftBox>
            {
              rows&&rows.length > 20 && <Stack spacing={5} m={5} sx={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                <Pagination  count={totalPage} variant="outlined" shape="rounded" />
              </Stack>
            }
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
{/* <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
  <SoftTypography variant="h6">Authors table</SoftTypography>
</SoftBox> */}

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