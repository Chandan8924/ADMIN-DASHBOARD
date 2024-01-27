import Table from "examples/Tables/Table";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { BasicTabs } from "./policyTabs";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Skeleton } from "@mui/material";

function Tables() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const handelRefresh = () => setRefresh(refresh + 1);
  const [policies, setPolicies] = useState([]);
  const [skelLoading, setSkelLoading] = useState(false);

  useEffect(() => {
    setSkelLoading(true);
    setLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/company/getCompany`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
      
        if (resp.success) {
          setPolicies((prev) => [...prev, resp?.data?.privacy_policy]);
          setPolicies((prev) => [...prev, resp?.data?.term_condition]);
          setPolicies((prev) => [...prev, resp?.data?.return_policy]);
          setLoading(false);
          setSkelLoading(false);
        }
      })
      .catch((err) => {
        return toast.success(err.message);
      });
  }, [refresh]);

  return (
    <DashboardLayout>
      <DashboardNavbar />

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
              <Card>
                <SoftBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <SoftTypography variant="h6">
                    Update Your Policies
                  </SoftTypography>
                </SoftBox>

                <BasicTabs />
              </Card>
            </SoftBox>
          </SoftBox>
        </>
      )}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
