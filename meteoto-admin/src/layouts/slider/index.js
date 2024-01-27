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
import BillingInformation from "layouts/slider/data";
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
  const [refresh, setRefresh] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [upFormDat, setUpFormDat] = useState("");
  const [skelLoading, setSkelLoading] = useState(false);

  const [offer, setOffer] = useState([]);

  const handleRefresh = () => setRefresh(refresh + 1);

  const handleShowForm = (e) => {
    setShowForm(!showForm);
    setUpFormDat(e);
   
  };

  const getAllSlider = () => {
    try {
      setSkelLoading(true);
      // setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/getAllSlider`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((result) => {
        
          if (result.success) {
            setSkelLoading(false);
            // setLoading(false);
            setOffer(result?.slider);
           
          }
        });
    } catch (error) {
      
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllSlider();
  }, [refresh]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CreateExpense
        show={showForm}
        unShow={setShowForm}
        dat={upFormDat}
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
          <SoftBox mt={4}>
            <SoftBox mb={1.5}>
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
                      {/* <MiniStatisticsCard
                        title={{ text: "Total Part" }}
                        count="53,000"
                        icon={{ color: "info", component: "devices" }}
                      /> */}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={2}>
                  <Stack direction="row" spacing={2}>
                    <SoftButton
                      variant="gradient"
                      color="info"
                      style={{ width: "80%", marginRight: "30%" }}
                      onClick={() => handleShowForm(null)}
                    >
                      <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                      &nbsp;Create Slider
                    </SoftButton>
                  </Stack>
                </Grid>
              </Grid>
            </SoftBox>
            <SoftBox my={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <>
                    <BillingInformation
                      data={offer}
                      handleRefresh={handleRefresh}
                      edit={handleShowForm}
                    />
                  </>
                </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
        </>
      )}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}
