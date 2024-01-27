import React, { useState, useEffect } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

import Icon from "@mui/material/Icon";
import ServiceTypeAddForm from "./ServiceTypeAddForm";
import ServiceTypeEditForm from "./ServiceTypeEditForm";

function ServiceType({ show, unShow }) {
  const [generalProducts, setGeneralProducts] = useState([]);
  const [majorProducts, setMajorProducts] = useState([]);
  const [currentEditState, setCurrentEditState] = useState(false);
  const [reloadData, setReloadData] = useState(false);


  useEffect(() => {
    // Fetch the list of countries from the API
    setReloadData(false);
    const fetchsetDefault = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/api/getAllDefaultJobs`,
          {
            method: "GET",
            headers: {
              "X-CSCAPI-KEY": process.env.REACT_APP_TOKEN,
            },
          }
        );
        const data = await response.json();

        if (data.success === true) {
          const generalProducts = data.data
            .filter(doc => doc.serviceType === "General")
            .map((doc, index) => ({
              sno: index + 1,
              servicename: doc?.name,
              servicetype: doc?.serviceType,
              remark: doc?.remark,
              edit: (
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
          setGeneralProducts(generalProducts);

          // Filter and map Major products
          const majorProducts = data.data
            .filter(doc => doc.serviceType === "Major")
            .map((doc, index) => ({
              sno: index + 1,
              servicename: doc?.name,
              servicetype: doc?.serviceType,
              remark: doc?.remark,
              edit: (
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
          setMajorProducts(majorProducts);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchsetDefault();
  }, [reloadData]);

  const columns = [
    { dataField: "sno", text: "S.No." },
    {
      dataField: "servicename",
      text: "Service Name",
    },
    { dataField: "servicetype", text: "Service Type" },
    { dataField: "remark", text: "Reamrk" },
    { dataField: "edit", text: "Edit" },
  ];

  const [seen, setSeen] = useState(false);
  const [editseen, setEditSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  function edittogglePop() {
    setEditSeen(!editseen);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <button
        type="button"
        class="btn btn-success float-end"
        onClick={togglePop}
      >
        Create
      </button>
      {seen ? <ServiceTypeAddForm toggle={togglePop} reloadData={setReloadData} /> : null}
      {editseen ? <ServiceTypeEditForm toggle={edittogglePop} reloadData={setReloadData} data={currentEditState} /> : null}

      <div className="row mt-5">
        <h3>Meteoto</h3>

        <div className="App col-sm-6">
          <h4 className="text-center" style={{ border: "2px solid #d7ddd7" }}>
            General Service
          </h4>
          <BootstrapTable
            keyField="id"
            data={generalProducts}
            columns={columns}
            footerClasses="table-dark"
          />
        </div>

        <div className="App col-sm-6">
          <h4 className="text-center" style={{ border: "2px solid #d7ddd7" }}>
            Major Service
          </h4>
          <BootstrapTable
            keyField="id"
            data={majorProducts}
            columns={columns}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ServiceType;
