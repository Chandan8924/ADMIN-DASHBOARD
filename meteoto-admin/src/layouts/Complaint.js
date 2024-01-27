

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







function Complaint() {



  





  return (
    <DashboardLayout>
      <DashboardNavbar />
      
    <authorsTableData />


    </DashboardLayout>
  );
}

export default Complaint;
