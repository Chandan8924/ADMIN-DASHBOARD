import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from "react-bootstrap/Dropdown";

import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function Orders() {
  const location = useLocation();

  const { pickup_location, vendorName } = location.state || {};

  const [refresh, setRefresh] = useState();

  const [orders, setOrders] = useState([]);

  const getAllOrder = () => {
    try {
      fetch(
        `${process.env.REACT_APP_API}/api/getAllOrder/shop?pickup_location=${pickup_location}`,
        {
          method: "GET",
        }
      )
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            setOrders(result?.orders);
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllOrder();
  }, [refresh]);

  const calculateTotalProfitLoss = (data, optionalField) => {
    if (optionalField === "vendorPrice") {
      const totalVendorPrice = data?.reduce((acc, row) => {
        const singleOrderVendorPrice = row?.data?.others?.order_items?.reduce((acc1, doc) => {
          let vendorPrice = doc.selling_price - (doc.brandCommisionInPerc * doc.selling_price / 100);
          return acc1 + vendorPrice;
        }, 0);
        return acc + singleOrderVendorPrice;
      }, 0);
      return totalVendorPrice.toFixed(2);
    } else if (optionalField === "totalCommision") {
      const totalVendorCommision = data?.reduce((acc, row) => {
        const singleOrderVendorCommision = row?.data?.others?.order_items?.reduce((acc1, doc) => {
          let vendorCommision = doc.brandCommisionInPerc * doc.selling_price / 100
          return acc1 + vendorCommision;
        }, 0);
        return acc + singleOrderVendorCommision;
      }, 0);
      return totalVendorCommision.toFixed(2);
    } else if (optionalField === "totalSellingPrice") {
      const totalSellingPrice = data?.reduce((acc, row) => {
        const singleSellingPrice = row?.data?.others?.order_items?.reduce((acc1, doc) => {
          let sellingPrice = doc.selling_price
          return acc1 + sellingPrice;
        }, 0);
        return acc + singleSellingPrice;
      }, 0);
      return totalSellingPrice.toFixed(2);
    }
  };

  const columns = [
    { dataField: "data.id", text: "Order Id", footer: "Total" },

    {
      dataField: "data.payment_method",
      text: "Payment Method",
      footer: "-",
    },

    {
      dataField: "data.others.order_items",
      text: "Vendor Price (Dena)",
      formatter: (cell, row) => {
        const totalSellingPrice = cell.reduce(
          (total, item) => total + item.selling_price,
          0
        );
        const vendorBrandCommission = cell.reduce(
          (total, item) =>
            total + (item.selling_price * item.brandCommisionInPerc) / 100,
          0
        );

        const profitLoss = totalSellingPrice - vendorBrandCommission;

        return profitLoss;
      },
      footer: `${calculateTotalProfitLoss(orders, "vendorPrice")}`, // Display the total profit/loss in the footer
    },

    {
      dataField: "data.others.order_items",
      text: "Commission",
      formatter: (cell, row) => {
        // Calculate the sum of selling_price in order_items
        console.log(cell, "4515");
        const totalSellingPrice = cell.reduce(
          (total, item) =>
            total + (item.selling_price * item.brandCommisionInPerc) / 100,
          0
        );
        return totalSellingPrice;
      },
      footer: `${calculateTotalProfitLoss(orders, "totalCommision")}`,
    },

    {
      dataField: "data.others.order_items",
      text: "Selling Price",
      formatter: (cell, row) => {
        // Calculate the sum of selling_price in order_items
        console.log(cell, "4515");
        const totalSellingPrice = cell.reduce(
          (total, item) => total + item.selling_price,
          0
        );
        return totalSellingPrice;
      },
      footer: `${calculateTotalProfitLoss(orders, "totalSellingPrice")}`,
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
    totalSize: orders.length,
  };

  const startIndex = (currentPage - 1) * paginationOptions.sizePerPage;
  const endIndex = startIndex + paginationOptions.sizePerPage;
  const currentData = orders.slice(startIndex, endIndex);

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
                  setContent("This Week"),
                  setData(
                    customerData({
                      data: shopsData?.filter(
                        doc => doc.shopType === "THIS WEEK"
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
              <CalendarMonthIcon size="12px" /> &nbsp; This Week
            </Dropdown.Item>
            <Divider sx={{ my: 0.5 }} />

            <Dropdown.Item
              onClick={() => {
                return (
                  setContent("Last Week"),
                  setData(
                    customerData({
                      data: shopsData?.filter(
                        doc => doc.shopType === "LAST WEEK"
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
              <CalendarMonthIcon size="12px" /> &nbsp; Last Week
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
        <BootstrapTable
          keyField="id"
          data={orders}
          columns={columns}
          footerClasses="table-dark"
        />
      </div>

      <Pagination className="mt-4" style={{ display: "flex", justifyContent: "center" }}>
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />

        {Array.from(
          { length: Math.ceil(orders.length / paginationOptions.sizePerPage) },
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}

        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
        <Pagination.Last
          onClick={() =>
            setCurrentPage(
              Math.ceil(orders.length / paginationOptions.sizePerPage)
            )
          }
        />
      </Pagination>
    </DashboardLayout>
  );
}

export default Orders;
