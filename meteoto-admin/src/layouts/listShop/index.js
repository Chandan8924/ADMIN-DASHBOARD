// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/listShop/listShopCard";
import Transactions from "layouts/billing/components/Transactions";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import SoftButton from "components/SoftButton";
// import CreateExpense from "./formPart/index";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import { Skeleton } from "@mui/material";

export default function Billing() {
  const [showCustomer, setshowCustomer] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [refresh, setRefresh] = useState(0);

  const [upFormDat, setUpFormDat] = useState(null);
  const [category, setCategory] = useState("");
  const [showCase, setShowCase] = useState({ category: true, part: false });
  const [id, setId] = useState("");
  const [shopId, setShopId] = useState("");
  const [part, setPart] = useState([]);
  const [skelLoading, setSkelLoading] = useState(false);
  const [count, setCount] = useState("");



  const handleRefresh = () => setRefresh(refresh + 1);



  const setFunc = (sam) => {
    getAllShop(sam);
    setId(sam._id);
    setShopId(sam);
  };



  const getAllCategory = () => {
    try {
      setSkelLoading(true);
      // setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/getListCategory`, {
        method: "GET",
        // headers: {
        //   Authorization: token,
        // },
      })
        .then((res) => res.json())
        .then((result) => {
       
          if (result.success) {
            // setLoading(false);
            setCount(result);
            setSkelLoading(false);
            setCategory(result?.categories);
          
          }
        });
    } catch (error) {
   
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, [refresh]);

  const getAllShop = (sam) => {
    try {
      // setLoading(true);
  

      fetch(
        `${process.env.REACT_APP_API}/api/getAllListShopByCategory/${sam._id}`
      )
        .then((res) => res.json())
        .then((result) => {
       
          if (result.success) {
            setPart(result?.listShop);
          
          }
        });
    } catch (error) {
   
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllShop(shopId);
  }, [refresh]);

  const goBack = () => {
    if (showCase.part) {
   

      setShowCase({ category: true, part: false });
      getAllCategory();
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <CreateExpense
        show={showForm}
        unShow={setShowForm}
        dat={upFormDat}
        data={category}
        handleRefresh={handleRefresh}
        createRefreshFunc={createRefreshFunc}
      /> */}

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
          <SoftBox mt={4}>
            {/* <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={10}>
              <Grid container spacing={4}>
               

                <Grid item xs={12} md={6} xl={3}>
                  <MiniStatisticsCard
                    title={{ text: "Total Category" }}
                    count="53,000"
             
                    icon={{ color: "info", component: "businesscenter" }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                
                  <MiniStatisticsCard
                    title={{ text: "Total Part" }}
                    count="53,000"
               
                    icon={{ color: "info", component: "devices" }}
                  />
                </Grid>
               

               
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2}>
         
              <Stack direction="row" spacing={2}>
                <SoftButton
                  variant="gradient"
                  color="dark"
                  style={{ width: "80%", marginRight: "30%" }}
                  onClick={() => handleShowForm(null)}
                >
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;Create Part
                </SoftButton>
              </Stack>
            </Grid>
          </Grid>
        </SoftBox> */}
            <SoftBox my={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6} xl={3}>
                      <MiniStatisticsCard
                        title={{ text: "Category Count" }}
                        count={count.categoryCount} //"53,000"
                        icon={{ color: "info", component: "businesscenter" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                      <MiniStatisticsCard
                        title={{ text: "Shop Count" }}
                        count={count.shopCount} //"53,000"
                        icon={{ color: "info", component: "devices" }}
                      />
                    </Grid>
                  </Grid>
                  <SoftBox my={3}>
                    {!showCase.category && (
                      <Button
                        // color="secondary"
                        variant="contained"
                        style={{
                          color: "white",
                          marginRight: "10px",
                          fontSize: "20px",
                          marginBottom: "1.5rem",
                        }}
                        onClick={goBack}
                      >
                        <KeyboardBackspaceSharpIcon />
                      </Button>
                    )}
                   
                    {showCase.part && (
                      <>
                        <BillingInformation
                          data={part}
                          // delFunc={delFunc}
                          // setFunc={setFunc}
                          setShowCase={setShowCase}
                          showCase={showCase}
                          handleRefresh={handleRefresh}
                          id={id}
                          // edit={handleShowForm}
                        />
                      </>
                    )}
                    {showCase.category && (
                      <BillingInformation
                        data={category}
                        setFunc={setFunc}
                        setShowCase={setShowCase}
                        handleRefresh={handleRefresh}
                        showCase={showCase}
                        //   edit={handleShowForm}
                      />
                    )}
                  </SoftBox>
                </Grid>
                {/* <Grid item xs={12} md={5}>
              <Transactions />
            </Grid> */}
              </Grid>
            </SoftBox>
          </SoftBox>
        </>
      )}

      {/* <Footer /> */}
    </DashboardLayout>
  );
}
