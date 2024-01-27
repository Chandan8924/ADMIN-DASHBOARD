import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from "react-bootstrap/Dropdown";

import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";


import BootstrapTable from "react-bootstrap-table-next";






function GarageOrders() {
  const location = useLocation();

  const { garageId, vendorName } = location.state || {};

  const [refresh, setRefresh] = useState(null);

  const [garageOrders, setGarageOrders] = useState([]);

  const getAllGarageOrder = () => {
    try {
      fetch(
        `${process.env.REACT_APP_API}/api/allservices/by/garage/${garageId}`,
        {
          method: "GET",
        }
      )
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            setGarageOrders(
              result?.data?.filter(doc => doc.status === "DELIVERED")
            );
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllGarageOrder();
  }, [refresh]);

  const calculateTotalProfitLoss = (data, optionalField) => {
    if (optionalField === "netTotal") {
      const total = data.reduce((acc, row) => {
        const profitLoss = (5 * row.jobCard.totalAmount) / 100;
        return acc + profitLoss;
      }, 0);
      return total.toFixed(2);
    } else if (optionalField === "totalCash") {
      const total = data.reduce((acc, row) => {
        const profitLoss =
          row.payment_status === "PAID_IN_CASH" && row.jobCard.totalAmount;
        return acc + profitLoss;
      }, 0);
      return total.toFixed(2);
    } else if (optionalField === "totalOnline") {
      const total = data.reduce((acc, row) => {
        const profitLoss =
          row.payment_status === "PAID_IN_ONLINE" && row.jobCard.totalAmount;
        return acc + profitLoss;
      }, 0);
      return total.toFixed(2);
    } else {
      let newTotal = 0;
      const total = data.map((doc) => {
        return doc.payment_status === "PAID_IN_CASH"
          ? newTotal - (doc.jobCard.totalAmount - (5 * doc.jobCard.totalAmount) / 100)
          : newTotal + (doc.jobCard.totalAmount - (5 * doc.jobCard.totalAmount) / 100)
      });
      
      return total.reduce((start, value) => start + value, 0).toFixed(2);    
    }
    
  };

  const columns = [
    {
      dataField: "data._id",
      formatter: (cell, row) => {
        const ownerName = row.name;
        const ownercontact = row.contact || 0;
        return ownerName + "/" + ownercontact;
      },
      text: "owner name/mobile",
      footer: "Total",
    },
    {
      dataField: "data.delivery_date",
      text: "Deliver Date",
      formatter: (cell, row) => {
        const deliveryDate = row.delivery_date || 0;
        return deliveryDate;
      },
      footer: "-",
    },
    {
      dataField: "data?.jobCard?.totalAmount",
      text: "Profit",
      formatter: (cell, row) => {
        const isProfitOrLoss =
          row.payment_status === "PAID_IN_CASH" ? (
            <span style={{ color: "green" }}>
              +{(5 * row.jobCard.totalAmount) / 100}
            </span>
          ) : (
            <span style={{ color: "green" }}>
              +{(5 * row.jobCard.totalAmount) / 100}
            </span>
          );
        return isProfitOrLoss;
      },
      footer: `+ ${calculateTotalProfitLoss(garageOrders, "netTotal")}`,
    },

    {
      dataField: "data.payment_status",
      text: "Cash",
      formatter: (cell, row) =>
        row.payment_status === "PAID_IN_CASH" ? row?.jobCard?.totalAmount : "-",
      footer: `${calculateTotalProfitLoss(garageOrders, "totalCash")}`,
    },
    {
      dataField: "data.payment_status",
      text: "Online",
      formatter: (cell, row) =>
        row.payment_status === "PAID_IN_ONLINE"
          ? row?.jobCard?.totalAmount
          : "-",
      footer: `${calculateTotalProfitLoss(garageOrders, "totalOnline")}`,
    },
    {
      dataField: "data.jobCard.totalAmount",
      text: "(-Lena / +Dena)",
      formatter: (cell, row) => {
        const garageBalance =
          row.payment_status === "PAID_IN_CASH" ? (
            <span style={{ color: "red" }}>
              -{row.jobCard.totalAmount - (5 * row.jobCard.totalAmount) / 100}
            </span>
          ) : (
            <span style={{ color: "green" }}>
              +{row.jobCard.totalAmount - (5 * row.jobCard.totalAmount) / 100}
            </span>
          );
        return garageBalance; // Adjust the precision as needed
      },      
      footer: ` ${calculateTotalProfitLoss(garageOrders, "garageBalance")}`,
    },
  ];
  
  
 
  const [currentPage, setCurrentPage] = useState(1);

  const paginationOptions = {
    sizePerPage: 15,
    pageStartIndex: 1,
    paginationSize: 3,
    prePageText: "Previous",
    nextPageText: "Next",
    showTotal: true,
    totalSize: garageOrders.length,
  };


  const startIndex = (currentPage - 1) * paginationOptions.sizePerPage;
  const endIndex = startIndex + paginationOptions.sizePerPage;
  const currentData = garageOrders.slice(startIndex, endIndex);


  const [content, setContent] = useState();

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div>
        <Dropdown style={{ float: "inline-end" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                return (
                  setContent("Last 15 Day's"),
                  setData(
                    customerData({
                      data: shopsData?.filter(
                        doc => doc.shopType === "Last 15 Day's"
                      ),
                      // view: handleHide,
                      edit: handleShopShowInfo,
                      update: handleShowForm,
                    })
                  )
                );
              }}
            >
              {" "}
              <CalendarMonthIcon size="12px" /> &nbsp; Last 15 Day's
            </Dropdown.Item>

            <Divider sx={{ my: 0.5 }} />
            <Dropdown.Item
              onClick={() => {
                return (
                  setContent("LAST Months"),
                  setData(
                    customerData({
                      data: shopsData?.filter(
                        doc => doc.shopType === "LASTMONTHS"
                      ),
                      // view: handleHide,
                      edit: handleShopShowInfo,
                      update: handleShowForm,
                    })
                  )
                );
              }}
            >
              <CalendarMonthIcon size="12px" /> &nbsp; Last Months
            </Dropdown.Item>
            <Divider sx={{ my: 0.5 }} />
            <Dropdown.Item
              onClick={() => {
                return (
                  setContent("Last Year"),
                  setData(
                    customerData({
                      data: shopsData?.filter(
                        doc => doc.shopType === "Last Year"
                      ),
                      // view: handleHide,
                      edit: handleShopShowInfo,
                      update: handleShowForm,
                    })
                  )
                );
              }}
            >
              <CalendarMonthIcon size="12px" /> &nbsp; Last Year
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="App mt-5">
        <h3>Meteoto - {vendorName}</h3>

        <div className="App col-sm-12">
          <BootstrapTable
            keyField="_id"
            data={currentData}
            columns={columns}
            footerClasses="table-dark"
     
          />
        </div>
      </div>
      <Pagination className="mt-4" style={{ display: "flex", justifyContent: "center" }}>
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />

        {Array.from({ length: Math.ceil(garageOrders.length / paginationOptions.sizePerPage) }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
        <Pagination.Last onClick={() => setCurrentPage(Math.ceil(garageOrders.length / paginationOptions.sizePerPage))} />
      </Pagination>
    </DashboardLayout>
  );
}

export default GarageOrders;
