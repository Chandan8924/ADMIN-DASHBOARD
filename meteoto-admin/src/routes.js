// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Part from "layouts/parts";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import User from "layouts/user";
import ListShop from "layouts/listShop";
import Shops from "layouts/shop";
import Offer from "layouts/offer";
import Slider from "layouts/slider";
import Policy from "pages/policy";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import BuildIcon from "@mui/icons-material/Build";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ViewListIcon from "@mui/icons-material/ViewList";
import ShopIcon from "@mui/icons-material/Shop";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ReviewRating from "layouts/ReviewRating";
import Location from "layouts/Location";
import Complain from "layouts/dashboard/components/Complain";
import CopyAllIcon from '@mui/icons-material/CopyAll';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Orders from "Order/Orders";
import ServiceType from "ServiceType/ServiceType";
import Complaint from "layouts/Complaint";
import GarageOrders from "GarageOrders";

import GarageIcon from '@mui/icons-material/Garage';
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
    permission: [
      "ALL",
      "CAR",
      "PARTS",
      "USERS",
      "VENDORS",
      "SHOP",
      "ORDERS",
      "GARAGEORDERS",
      "SERVICETYPE",
      "LOCATION",
      "SUBADMIN",
      "OFFER",
      "SLIDER",
      "PRIVACY",
      "REVIEWRATING",
      "COMPLAINT"
    ],
  },
  {
    type: "collapse",
    name: "Sub Admin",
    key: "subAdmin",
    route: "/subAdmin",
    icon: <GroupAddIcon size="12px" />,
    component: <Tables />,
    noCollapse: true,
    permission: ["ALL", "SUBADMIN"],
  },
  {
    type: "collapse",
    name: "Car",
    key: "car",
    route: "/car",
    icon: <TimeToLeaveIcon size="12px" />,
    component: <Billing />,
    noCollapse: true,
    permission: ["ALL", "CAR"],
  },
  {
    type: "collapse",
    name: "Parts",
    key: "parts",
    route: "/parts",
    icon: <BuildIcon size="12px" />,
    component: <Part />,
    noCollapse: true,
    permission: ["ALL", "PARTS"],
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    route: "/user",
    icon: <AccountCircleIcon size="12px" />,
    component: <User />,
    noCollapse: true,
    permission: ["ALL", "USERS"],
  },
  {
    type: "collapse",
    name: "ListShop",
    key: "listshop",
    route: "/listshop",
    icon: <ViewListIcon size="12px" />,
    component: <ListShop />,
    noCollapse: true,
    permission: ["ALL", "VENDORS"],
  },
  {
    type: "collapse",
    name: "Shop",
    key: "shop",
    route: "/shop",
    icon: <ShopIcon size="12px" />,
    component: <Shops />,
    noCollapse: true,
    permission: ["ALL", "SHOP"],
  },
  {
    type: "collapse",
    name: "Auto-Parts Orders",
    key: "orders",
    route: "/orders",
    icon: <LocalShippingIcon size="12px" />,
    component: <Orders />,
    noCollapse: true,
    permission: ["ALL", "ORDERS"],
  },
  {
    type: "collapse",
    name: "Garage Orders",
    key: "garageorders",
    route: "/garageorders",
    icon: <GarageIcon size="12px" />,
    component: <GarageOrders />,
    noCollapse: true,
    permission: ["ALL", "GARAGEORDERS"],
  },
  {
    type: "collapse",
    name: "Service Type",
    key: "servicetype",
    route: "/servicetype",
    icon: <MiscellaneousServicesIcon size="12px" />,
    component: <ServiceType />,
    noCollapse: true,
    permission: ["ALL", "SERVICETYPE"],
  },
  {
    type: "collapse",
    name: "Location",
    key: "location",
    route: "/location",
    icon: <LocationOnIcon size="12px" />,
    component: <Location />,
    noCollapse: true,
    permission: ["ALL", "LOCATION"],
  },
  {
    type: "collapse",
    name: "offer",
    key: "offer",
    route: "/offer",
    icon: <LocalOfferIcon size="12px" />,
    component: <Offer />,
    noCollapse: true,
    permission: ["ALL", "OFFER"],
  },
  {
    type: "collapse",
    name: "slider",
    key: "slider",
    route: "/slider",
    icon: <SlideshowIcon size="12px" />,
    component: <Slider />,
    noCollapse: true,
    permission: ["ALL", "SLIDER"],
  },

  {
    type: "collapse",
    name: "Policy",
    key: "policy",
    route: "/policy",
    icon: <CustomerSupport size="12px" />,
    component: <Policy />,
    noCollapse: true,
    permission: ["ALL", "PRIVACY"],
  },
  {
    type: "collapse",
    name: "Review Rating",
    key: "reviewrating",
    route: "/reviewrating",
    icon: <SwipeRightIcon size="12px" />,
    component: <ReviewRating />,
    noCollapse: true,
    permission: ["ALL", "REVIEWRATING"],
  },
  {
    type: "collapse",
    name: "Complaint",
    key: "complaint",
    route: "/complaint",
    icon: <CopyAllIcon size="12px" />,
    component: <Complaint />,
    noCollapse: true,
    permission: ["ALL", "COMPLAINT"],
  },
  {
    // type: "collapse",
    // name: "Profile",
    key: "profile",
    route: "/profile",
    // icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    // noCollapse: true,
    permission: [
      "ALL",
      "CAR",
      "PARTS",
      "USERS",
      "VENDORS",
      "ORDERS",
      "SUBADMIN",
      "OFFER",
      "SLIDER",
      "PRIVACY",
    ],
  },
  {
    // type: "collapse",
    // name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    // icon: <Document size="12px" />,
    component: <SignIn />,
    // noCollapse: true,
    permission: [
      "ALL",
      "CAR",
      "PARTS",
      "USERS",
      "VENDORS",
      "ORDERS",
      "SUBADMIN",
      "OFFER",
      "SLIDER",
      "PRIVACY",
    ],
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];

export default routes;
