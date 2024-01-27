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
import BillingInformation from "layouts/parts/components/BillingInformationPart";
import Transactions from "layouts/billing/components/Transactions";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import SoftButton from "components/SoftButton";
import CreateExpense from "./formPart/index";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import { Skeleton } from "@mui/material";

export default function Billing() {
  const [showCustomer, setshowCustomer] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [upFormDat, setUpFormDat] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState("");
  const [showCase, setShowCase] = useState({ category: true, part: false });
  const [id, setId] = useState("");
  const [part, setPart] = useState([]);
  const [skelLoading, setSkelLoading] = useState(false);



  const handleRefresh = () => setRefresh(refresh + 1);

  const createRefreshFunc = (data) => {
    getAllPart(data);
  };

  const delFunc = (dat) => {

    getAllPart(dat);
  };

  const setFunc = (sam) => {
    getAllPart(sam);
    // setId(sam.id);
  };

  const handleShowForm = (e) => {
    setShowForm(!showForm);
    setUpFormDat(e);
  
  };

  const getAllCategory = () => {
    try {
      setSkelLoading(true);
      // setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/getAllCategory`, {
        method: "GET",
        // headers: {
        //   Authorization: token,
        // },
      })
        .then((res) => res.json())
        .then((result) => {
     
          if (result.success) {
            setSkelLoading(false);
            // setLoading(false);
            setCount(result);
            setCategory(result?.data);
           
          }
        });
    } catch (error) {
    
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, [refresh]);

  const getAllPart = (sam) => {
    try {
      // setLoading(true);

      fetch(`${process.env.REACT_APP_API}/api/getAllPartsByCategoryId/${sam}`)
        .then((res) => res.json())
        .then((result) => {
      
          if (result.success) {
            setPart(result?.data);
           
          }
        });
    } catch (error) {
    
      toast.error(error.message);
    }
  };

  // useEffect(() => {
  //   getAllPart(delRef);
  // }, [ refresh]);

  const goBack = () => {
    if (showCase.part) {
  

      setShowCase({ category: true, part: false });
      getAllCategory();
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CreateExpense
        show={showForm}
        unShow={setShowForm}
        dat={upFormDat}
        data={category}
        handleRefresh={handleRefresh}
        createRefreshFunc={createRefreshFunc}
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
          {" "}
          <SoftBox mt={4}>
            <SoftBox mb={1.5}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={10}>
                  <Grid container spacing={4}>
                    {/* <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid> */}

                    <Grid item xs={12} md={6} xl={3}>
                      <MiniStatisticsCard
                        title={{ text: "Total Category" }}
                        count={count.categoryCount} //"53,000"
                        // percentage={{ color: "success", text: "+55%" }}
                        icon={{ color: "info", component: "businesscenter" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                      {/* <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  /> */}
                      <MiniStatisticsCard
                        title={{ text: "Total Part" }}
                        count={count.partCount} //"53,000"
                        // percentage={{ color: "success", text: "+55%" }}
                        icon={{ color: "info", component: "devices" }}
                      />
                    </Grid>
                    {/* <Grid item xs={12} md={6} xl={3}>
                  
                  <MiniStatisticsCard
                    title={{ text: "Total Varient" }}
                    count="53,000"
                    // percentage={{ color: "success", text: "+55%" }}
                    icon={{ color: "info", component: "apps" }}
                  />
                </Grid> */}

                    {/* <Grid item xs={12}>
                  <PaymentMethod />
                </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={2}>
                  {/* <Invoices /> */}
                  <Stack direction="row" spacing={2}>
                    <SoftButton
                      variant="gradient"
                      color="info"
                      style={{ width: "80%", marginRight: "30%" }}
                      onClick={() => handleShowForm(null)}
                    >
                      <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                      &nbsp;Create Part
                    </SoftButton>
                  </Stack>
                </Grid>
              </Grid>
            </SoftBox>
            <SoftBox my={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
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
                        delFunc={delFunc}
                        setFunc={setFunc}
                        setShowCase={setShowCase}
                        handleRefresh={handleRefresh}
                        edit={handleShowForm}
                      />
                    </>
                  )}
                  {showCase.category && (
                    <BillingInformation
                      data={category}
                      setFunc={setFunc}
                      setShowCase={setShowCase}
                      handleRefresh={handleRefresh}
                      edit={handleShowForm}
                    />
                  )}
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
