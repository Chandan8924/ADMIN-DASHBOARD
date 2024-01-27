

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
import '../Reveiw.css'








function ReviewRating() {
 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div id="yry" class="content container-fluid">
     
      <div class="page-header">
        <h1 class="page-header-title">Manage reviews</h1>

      
        <ul class="nav nav-tabs page-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Published
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pending <span class="badge bg-soft-dark text-dark rounded-pill ms-1">2</span>
            </a>
          </li>
        </ul>
   
      </div>
    

   
      <div class="card mb-3 mb-lg-5">
        
        <div class="card-body">
          <div class="row align-items-md-center gx-md-5">
            <div class="col-md-auto mb-3 mb-md-0">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img class="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default"/>
                  <img class="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark"/>
                </div>

                <div class="flex-grow-1 ms-5">
                  <h4 class="display-3 text-dark mb-0">4.84</h4>
                  <p>— of 7 reviews <span class="badge bg-soft-dark text-dark rounded-pill ms-1">+1 this week</span></p>
                </div>
              </div>
            </div>
         

            <div class="col-md">
            
              <ul class="list-unstyled list-py-1 mb-0">
               
                <li class="d-flex align-items-center fs-6">
                  <span class="me-3">5 star</span>
                  <div class="progress flex-grow-1">
                    <div class="progress-bar" role="progressbar"   style={{width: "82%"}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span class="ms-3">4</span>
                </li>
              

              
                <li class="d-flex align-items-center fs-6">
                  <span class="me-3">4 star</span>
                  <div class="progress flex-grow-1">
                    <div class="progress-bar" role="progressbar" style={{width: "18%"}} aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span class="ms-3">3</span>
                </li>
              
                <li class="d-flex align-items-center fs-6">
                  <span class="me-3">3 star</span>
                  <div class="progress flex-grow-1">
                    <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span class="ms-3">0</span>
                </li>
               
                <li class="d-flex align-items-center fs-6">
                  <span class="me-3">2 star</span>
                  <div class="progress flex-grow-1">
                    <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span class="ms-3">0</span>
                </li>
             
                <li class="d-flex align-items-center fs-6">
                  <span class="me-3">1 star</span>
                  <div class="progress flex-grow-1">
                    <div class="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span class="ms-3">0</span>
                </li>
              
              </ul>
            
            </div>
          
          </div>
       
        </div>
      
      </div>
    
      <div class="card">
    
        <div class="card-header card-header-content-md-between">
          <div class="mb-2 mb-md-0">
            <form>
           
              <div class="input-group input-group-merge input-group-flush">
                <div class="input-group-prepend input-group-text">
                  <i class="bi-search"></i>
                </div>
                <input id="datatableSearch" type="search" class="form-control" placeholder="Search reviews" aria-label="Search reviews"/>
              </div>
             
            </form>
          </div>

          <div class="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
         
            <div id="datatableCounterInfo" style={{display: "none"}}>
              <div class="d-flex align-items-center">
                <span class="fs-5 me-3">
                  <span id="datatableCounter">0</span>
                  Selected
                </span>
                <a class="btn btn-outline-danger btn-sm" href="javascript:;">
                  <i class="bi-trash"></i> Delete
                </a>
              </div>
            </div>
          

         
            <div class="dropdown">
              <button type="button" class="btn btn-white btn-sm dropdown-toggle w-100" id="usersExportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi-download me-2"></i> Export
              </button>

              <div class="dropdown-menu dropdown-menu-sm-end" aria-labelledby="usersExportDropdown">
                <span class="dropdown-header">Options</span>
                <a id="export-copy" class="dropdown-item" href="javascript:;">
                  <img class="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description"/>
                  Copy
                </a>
                <a id="export-print" class="dropdown-item" href="javascript:;">
                  <img class="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description"/>
                  Print
                </a>
                <div class="dropdown-divider"></div>
                <span class="dropdown-header">Download options</span>
                <a id="export-excel" class="dropdown-item" href="javascript:;">
                  <img class="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description"/>
                  Excel
                </a>
                <a id="export-csv" class="dropdown-item" href="javascript:;">
                  <img class="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description"/>
                  .CSV
                </a>
                <a id="export-pdf" class="dropdown-item" href="javascript:;">
                  <img class="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description"/>
                  PDF
                </a>
              </div>
            </div>
           
            <div class="tom-select-custom tom-select-custom-end">
              <select class="js-select js-datatable-filter form-select form-select-sm tomselected ts-hidden-accessible" data-target-column-index="5" data-hs-tom-select-options="{
                        &quot;searchInDropdown&quot;: false,
                        &quot;hideSearch&quot;: true,
                        &quot;dropdownWidth&quot;: &quot;11rem&quot;,
                        &quot;placeholder&quot;: &quot;Filters&quot;,
                        &quot;dropdownWrapperClass&quot;: &quot;tom-select-custom tom-select-custom-end&quot;
                      }" id="tomselect-1" tabindex="-1">
                
                <option value="Published">Published</option>
                <option value="Pending">Pending</option>
              <option value="null" selected="">All</option></select><div class="ts-wrapper js-select js-datatable-filter form-select form-select-sm single plugin-change_listener plugin-hs_smart_position input-hidden full has-items"><div class="ts-control"><div data-value="null" class="item" data-ts-item="">All</div></div><div class="tom-select-custom tom-select-custom-end"><div class="ts-dropdown single plugin-change_listener plugin-hs_smart_position" style={{display: "none"}}><div role="listbox" tabindex="-1" class="ts-dropdown-content" id="tomselect-1-ts-dropdown"></div></div></div></div>
            </div>
       
          </div>
        </div>
      
        <div class="table-responsive datatable-custom">
          <div id="datatable_wrapper" class="dataTables_wrapper no-footer"><div class="dt-buttons">          <button class="dt-button buttons-copy buttons-html5 d-none" tabindex="0" aria-controls="datatable" type="button"><span>Copy</span></button> <button class="dt-button buttons-excel buttons-html5 d-none" tabindex="0" aria-controls="datatable" type="button"><span>Excel</span></button> <button class="dt-button buttons-csv buttons-html5 d-none" tabindex="0" aria-controls="datatable" type="button"><span>CSV</span></button> <button class="dt-button buttons-pdf buttons-html5 d-none" tabindex="0" aria-controls="datatable" type="button"><span>PDF</span></button> <button class="dt-button buttons-print d-none" tabindex="0" aria-controls="datatable" type="button"><span>Print</span></button> </div><div id="datatable_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="datatable"/></label></div><table id="datatable" class="table table-borderless table-thead-bordered table-nowrap card-table dataTable no-footer" data-hs-datatables-options="{
                   &quot;columnDefs&quot;: [{
                      &quot;targets&quot;: [0, 3, 6],
                      &quot;orderable&quot;: false
                    }],
                   &quot;order&quot;: [],
                   &quot;info&quot;: {
                     &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                   },
                   &quot;search&quot;: &quot;#datatableSearch&quot;,
                   &quot;entries&quot;: &quot;#datatableEntries&quot;,
                   &quot;pageLength&quot;: 5,
                   &quot;isResponsive&quot;: false,
                   &quot;isShowPaging&quot;: false,
                   &quot;pagination&quot;: &quot;datatablePagination&quot;
                 }" role="grid" aria-describedby="datatable_info">
            <thead class="thead-light">
              <tr role="row"><th scope="col" class="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1" aria-label="
                  
                    
                    
                  
                " style={{width: "24px"}}>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="datatableCheckAll"/>
                    <label class="form-check-label" for="datatableCheckAll"></label>
                  </div>
                </th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Product: activate to sort column ascending" style={{width: "196.663px"}}>Product</th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Reviewer: activate to sort column ascending" style={{width: "183.3px"}}>Reviewer</th><th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Review" style={{width: "288px"}}>Review</th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style={{width: "139.663px"}}>Date</th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{width: "71.912px"}}>Status</th><th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Actions" style={{width: "52.675px"}}>Actions</th></tr>
            </thead>

            <tbody>
              

              

              

              

              

              

              
            <tr role="row" class="odd">
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="usersDataCheck2"/>
                    <label class="form-check-label" for="usersDataCheck2"></label>
                  </div>
                </td>
                <th>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar">
                      <img class="avatar-img" src="./assets/img/400x400/img18.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">Brown Hat</span>
                    </div>
                  </a>
                </th>
                <td>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar avatar-circle">
                      <img class="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-inherit">Amanda Harvey <i class="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified purchase"></i></span>
                      <span class="d-block fs-6 text-body">amanda@site.com</span>
                    </div>
                  </a>
                </td>
                <td>
                  <div class="text-wrap" style={{width: "18rem"}}>
                    <div class="d-flex gap-1 mb-2">
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                    </div>

                    <h4 class="mb-1">I just love it!</h4>
                    <p>I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens" hat.</p>
                  </div>
                </td>
                <td>Aug 17, 2020, 5:48</td>
                <td><span class="badge bg-soft-success text-success ms-2">Published</span></td>
                <td>
                
                  <div class="hs-unfold">
                    <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi-three-dots-vertical"></i>
                    </button>

                    <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown1">
                      <span class="dropdown-header">Settings</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-pencil-fill dropdown-item-icon"></i> Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-upload dropdown-item-icon"></i> Publish
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-trash dropdown-item-icon"></i> Delete
                      </a>

                      <div class="dropdown-divider"></div>

                      <span class="dropdown-header">Feedback</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-reply dropdown-item-icon"></i> Reply
                      </a>
                    </div>
                  </div>
                
                </td>
              </tr><tr role="row" class="even">
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="usersDataCheck3"/>
                    <label class="form-check-label" for="usersDataCheck3"></label>
                  </div>
                </td>
                <th>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar">
                      <img class="avatar-img" src="./assets/img/400x400/img3.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">Calvin Klein t-shirts</span>
                    </div>
                  </a>
                </th>
                <td>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar avatar-soft-dark avatar-circle">
                      <span class="avatar-initials">A</span>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">Anne Richard</span>
                      <span class="d-block fs-6 text-body">anne@site.com</span>
                    </div>
                  </a>
                </td>
                <td>
                  <div class="text-wrap" style={{width: "18rem"}}>
                    <div class="d-flex gap-1 mb-2">
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                    </div>

                    <h4 class="mb-1">Really nice</h4>
                    <p>Material is great and very comfortable and stylish.</p>
                  </div>
                </td>
                <td>Aug 04, 2020, 3:17</td>
                <td><span class="badge bg-soft-warning text-warning ms-2">Pending</span></td>
                <td>
                
                  <div class="hs-unfold">
                    <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi-three-dots-vertical"></i>
                    </button>

                    <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown2">
                      <span class="dropdown-header">Settings</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-pencil-fill dropdown-item-icon"></i> Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-upload dropdown-item-icon"></i> Publish
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-trash dropdown-item-icon"></i> Delete
                      </a>

                      <div class="dropdown-divider"></div>

                      <span class="dropdown-header">Feedback</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-reply dropdown-item-icon"></i> Reply
                      </a>
                    </div>
                  </div>
                
                </td>
              </tr>
              <tr role="row" class="odd">
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="usersDataCheck4"/>
                    <label class="form-check-label" for="usersDataCheck4"></label>
                  </div>
                </td>
                <th>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar">
                      <img class="avatar-img" src="./assets/img/400x400/img24.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">Clarks shoes</span>
                    </div>
                  </a>
                </th>
                <td>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar avatar-circle">
                      <img class="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">David Harrison</span>
                      <span class="d-block fs-6 text-body">david@site.com</span>
                    </div>
                  </a>
                </td>
                <td>
                  <div class="text-wrap" style={{width: "18rem"}}>
                    <div class="d-flex gap-1 mb-2">
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width="14" data-hs-theme-appearance="default"/>
                      <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width="14" data-hs-theme-appearance="dark"/>
                    </div>

                    <h4 class="mb-1">Good product</h4>
                    <p>A really well built shoe. It looks great and wears just as well. A great staple in ball caps.</p>
                  </div>
                </td>
                <td>June 18, 2020, 09:19</td>
                <td><span class="badge bg-soft-success text-success ms-2">Published</span></td>
                <td>
             
                  <div class="hs-unfold">
                    <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi-three-dots-vertical"></i>
                    </button>

                    <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown3">
                      <span class="dropdown-header">Settings</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-pencil-fill dropdown-item-icon"></i> Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-upload dropdown-item-icon"></i> Publish
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-trash dropdown-item-icon"></i> Delete
                      </a>

                      <div class="dropdown-divider"></div>

                      <span class="dropdown-header">Feedback</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-reply dropdown-item-icon"></i> Reply
                      </a>
                    </div>
                  </div>
                
                </td>
              </tr>
              <tr role="row" class="even">
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="usersDataCheck5"/>
                    <label class="form-check-label" for="usersDataCheck5"></label>
                  </div>
                </td>
                <th>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar">
                      <img class="avatar-img" src="./assets/img/400x400/img19.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">Levis women's jeans</span>
                    </div>
                  </a>
                </th>
                <td>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar avatar-circle">
                      <img class="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">David Harrison</span>
                      <span class="d-block fs-6 text-body">david@site.com</span>
                    </div>
                  </a>
                </td>
                <td>
                  <div class="text-wrap" style={{width: "18rem"}}>
                    <div class="d-flex gap-1 mb-2">
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                    </div>

                    <h4 class="mb-1">Buy the product, you will not regret it!</h4>
                    <p>Don't let this merchandise get away! It's a must buy and you will look good in it while working out.</p>
                  </div>
                </td>
                <td>June 08, 2020, 07:22</td>
                <td><span class="badge bg-soft-success text-success ms-2">Published</span></td>
                <td>
                
                  <div class="hs-unfold">
                    <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi-three-dots-vertical"></i>
                    </button>

                    <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown4">
                      <span class="dropdown-header">Settings</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-pencil-fill dropdown-item-icon"></i> Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-upload dropdown-item-icon"></i> Publish
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-trash dropdown-item-icon"></i> Delete
                      </a>

                      <div class="dropdown-divider"></div>

                      <span class="dropdown-header">Feedback</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-reply dropdown-item-icon"></i> Reply
                      </a>
                    </div>
                  </div>
               
                </td>
              </tr><tr role="row" class="odd">
                <td class="table-column-pe-0">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="usersDataCheck6"/>
                    <label class="form-check-label" for="usersDataCheck6"></label>
                  </div>
                </td>
                <th>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar">
                      <img class="avatar-img" src="./assets/img/400x400/img11.jpg" alt="Image Description"/>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">Asos t-shirts</span>
                    </div>
                  </a>
                </th>
                <td>
                  <a class="d-flex align-items-center" href="./user-profile.html">
                    <div class="avatar avatar-soft-dark avatar-circle">
                      <span class="avatar-initials">B</span>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <span class="card-title h5 text-dark text-inherit">Bob Dean</span>
                      <span class="d-block fs-6 text-body">bob@site.com</span>
                    </div>
                  </a>
                </td>
                <td>
                  <div class="text-wrap" style={{width: "18rem"}}>
                    <div class="d-flex gap-1 mb-2">
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width="14"/>
                      <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width="14" data-hs-theme-appearance="default"/>
                      <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width="14" data-hs-theme-appearance="dark"/>
                    </div>

                    <h4 class="mb-1">Ready for the heat!</h4>
                    <p>As good as the heat Rdy T-shirt but without the sleeves. Love the stripes on the back.</p>
                  </div>
                </td>
                <td>May 27, 2020, 04:01</td>
                <td><span class="badge bg-soft-warning text-warning ms-2">Pending</span></td>
                <td>
                
                  <div class="hs-unfold">
                    <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi-three-dots-vertical"></i>
                    </button>

                    <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown5">
                      <span class="dropdown-header">Settings</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-pencil-fill dropdown-item-icon"></i> Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-upload dropdown-item-icon"></i> Publish
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="bi-trash dropdown-item-icon"></i> Delete
                      </a>

                      <div class="dropdown-divider"></div>

                      <span class="dropdown-header">Feedback</span>

                      <a class="dropdown-item" href="#">
                        <i class="bi-reply dropdown-item-icon"></i> Reply
                      </a>
                    </div>
                  </div>
                 
                </td>
              </tr></tbody>
          </table><div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 5 of 7 entries</div></div>
        </div>
      
        <div class="card-footer">
          <div class="row justify-content-center justify-content-sm-between align-items-sm-center">
            <div class="col-sm mb-2 mb-sm-0">
              <div class="d-flex justify-content-center justify-content-sm-start align-items-center">
                <span class="me-2">Showing:</span>

           
                <div class="tom-select-custom">
                  <select id="datatableEntries" class="js-select form-select form-select-borderless w-auto tomselected ts-hidden-accessible" autocomplete="off" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true
                          }" tabindex="-1">
                    <option value="5">5</option>
                    
                    <option value="12">12</option>
                  <option value="7" selected="">7</option></select><div class="ts-wrapper js-select form-select form-select-borderless w-auto single plugin-change_listener plugin-hs_smart_position input-hidden full has-items"><div class="ts-control"><div data-value="7" class="item" data-ts-item="">7</div></div><div class="tom-select-custom"><div class="ts-dropdown single plugin-change_listener plugin-hs_smart_position" style={{display: "none"}}><div role="listbox" tabindex="-1" class="ts-dropdown-content" id="datatableEntries-ts-dropdown"></div></div></div></div>
                </div>
              

                <span class="text-secondary me-2">of</span>

              
                <span id="datatableWithPaginationInfoTotalQty">7</span>
              </div>
            </div>
          

            <div class="col-sm-auto">
              <div class="d-flex justify-content-center justify-content-sm-end">
            
                <nav id="datatablePagination" aria-label="Activity pagination"><div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate"><ul id="datatable_pagination" class="pagination datatable-custom-pagination"><li class="paginate_item page-item disabled"><a class="paginate_button previous page-link" aria-controls="datatable" data-dt-idx="0" tabindex="0" id="datatable_previous"><span aria-hidden="true">Prev</span></a></li><li class="paginate_item page-item active"><a class="paginate_button page-link" aria-controls="datatable" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_item page-item"><a class="paginate_button page-link" aria-controls="datatable" data-dt-idx="2" tabindex="0">2</a></li><li class="paginate_item page-item"><a class="paginate_button next page-link" aria-controls="datatable" data-dt-idx="3" tabindex="0" id="datatable_next"><span aria-hidden="true">Next</span></a></li></ul></div></nav>
              </div>
            </div>
          
          </div>
       
        </div>
       
      </div>
   
    </div>
    </DashboardLayout>
  );
}

export default ReviewRating;
