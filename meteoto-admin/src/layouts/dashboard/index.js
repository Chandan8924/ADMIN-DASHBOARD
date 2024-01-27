

import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import team2 from "assets/images/team-2.jpg";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ProfilesList from "examples/Lists/ProfilesList";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import typography from "assets/theme/base/typography";
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Skeleton } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MoneySharp } from "@mui/icons-material";
import Dropdown from 'react-bootstrap/Dropdown';


function Dashboard() {
  const { size } = typography;

 

  const [reportsBarChartData, setReportBarChartData] = useState({});
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [gradientLineChartData, setGradientLineChartData] = useState({});

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/get/dashboard`)
        .then((res) => res.json())
        .then((result) => {
        
          if (result.success) {
            setData(result.data);
            setLoading(false);

      
            setReportBarChartData({
              labels: Object.keys(result.data.shopCountBymonth),
              datasets: {
                label: "Total Shop",
                data: Object.values(result.data.shopCountBymonth),
              },
            });
            setGradientLineChartData({
              // labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              labels: Object.keys(result.data.vendorCountBymonth),
              datasets: [
                {
                  label: "Shop",
                  color: "info",
                  data: Object.values(result.data.shopCountBymonth),
                },
                {
                  label: "Vendor",
                  color: "dark",
                  data: Object.values(result.data.vendorCountBymonth),
                },
              ],
            });
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  }, []);


  const [count , setCount] = useState("Order")
  const [count1 , setCount1] = useState("Revenue")
  const [count2 , setCount2] = useState("Shipping")





  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              {loading ? (
                <Skeleton
                  variant="rounded"
                  style={{ borderRadius: "12px" }}
                  width={280}
                  height={80}
                />
              ) : (
                <MiniStatisticsCard
                  title={{ text: "Total User" }}
                  count={data.userCount}
                  // percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "info", component: "group" }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              {loading ? (
                <Skeleton
                  variant="rounded"
                  style={{ borderRadius: "12px" }}
                  width={280}
                  height={80}
                />
              ) : (
                <MiniStatisticsCard
                  title={{ text: "Total Vendor" }}
                  count={data.vendorCount}
                  // percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "info", component: "public" }}
                />
              )}
            </Grid>





            <Grid item xs={12} sm={6} xl={3}>
              {loading ? (
                <Skeleton
                  variant="rounded"
                  style={{ borderRadius: "12px" }}
                  width={280}
                  height={80}
                />
              ) : (
                <MiniStatisticsCard
                  title={{ text: "Total Shop" }}
                  count={data.shopCount}
                  // percentage={{ color: "error", text: "-2%" }}
                  icon={{ color: "info", component: <PeopleIcon /> }}
                />
              )}
            </Grid>







  
  

            <Grid item xs={12} sm={6} xl={3}>
              {loading ? (
                <Skeleton
                  variant="rounded"
                  style={{ borderRadius: "12px" }}
                  width={280}
                  height={80}
                />
              ) : (
                <MiniStatisticsCard
                  title={{ text: "Active Shop" }}
                  count={data.activeShop}
                  // percentage={{ color: "success", text: "+5%" }}
                  icon={{
                    color: "info",
                    component: <AccountCircleIcon />,
                  }}
                />
              )}
            </Grid>
          </Grid>
        </SoftBox>

 




  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <Dropdown style={{float: "inline-end"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setCount("Today Order")}>Today Order</Dropdown.Item>
        <Dropdown.Item onClick={() => setCount("Weekly Order")}>weekly Order</Dropdown.Item>
        <Dropdown.Item  onClick={() => setCount("Monthly Order")}>Monthly Order</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
        <h5 class="card-title mt-5 text-center">  <PeopleIcon />  {count}</h5>
        <p class="card-text text-center">0</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-3">
    <div class="card">
      <div class="card-body">
      <Dropdown style={{float: "inline-end"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setCount1("Today Revenue")}>Today Revenue</Dropdown.Item>
        <Dropdown.Item onClick={() => setCount1("Weekly Revenue")}>weekly Revenue</Dropdown.Item>
        <Dropdown.Item  onClick={() => setCount1("Monthly Revenue")}>Monthly Revenue</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
        <h5 class="card-title mt-5 text-center">  <PeopleIcon />  {count1}</h5>
        <p class="card-text text-center">0</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-3">
    <div class="card">
      <div class="card-body">
      <Dropdown style={{float: "inline-end"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setCount2("Shipping Delivered")}>Shipping Delivered</Dropdown.Item>
        <Dropdown.Item onClick={() => setCount2("Shipping Cancle")}>Shipping Cancle</Dropdown.Item>
        <Dropdown.Item  onClick={() => setCount2("Shipping Return")}>Shipping Return</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
        <h5 class="card-title mt-5 text-center">  <PeopleIcon />  {count2}</h5>
        <p class="card-text text-center">0</p>
      </div>
    </div>
  </div>
  


  

        <SoftBox mb={3} style={{marginTop:"10px"}}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              {loading ? (
                <>
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px" }}
                    width={500}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={500}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={500}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={500}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={500}
                    height={80}
                  />
                </>
              ) : (
                <ReportsBarChart
                  title="Total Shop"
                  description={<>AutoMobile</>}
                  chart={reportsBarChartData}
                  // items={items}
                />
              )}
            </Grid>
            <Grid item xs={12} lg={7}>
              {loading ? (
                <>
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px" }}
                    width={680}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={680}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={680}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={680}
                    height={80}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ borderRadius: "12px", marginTop: "15px" }}
                    width={680}
                    height={80}
                  />
                </>
              ) : (
                <GradientLineChart
                  title="Month Wise Shop and Vendors"
                  description={
                    <SoftBox display="flex" alignItems="center">
                      <SoftBox
                        fontSize={size.lg}
                        color="success"
                        mb={0.3}
                        mr={0.5}
                        lineHeight={0}
                      >
                        <Icon className="font-bold">arrow_upward</Icon>
                      </SoftBox>
                      <SoftTypography
                        variant="button"
                        color="text"
                        fontWeight="medium"
                      >
                        See Shops & Vendors
                        <SoftTypography
                          variant="button"
                          color="text"
                          fontWeight="regular"
                        >
                          in 2023
                        </SoftTypography>
                      </SoftTypography>
                    </SoftBox>
                  }
                  height="20.25rem"
                  chart={gradientLineChartData}
                />
              )}
            </Grid>
          </Grid>
        </SoftBox>
      
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
