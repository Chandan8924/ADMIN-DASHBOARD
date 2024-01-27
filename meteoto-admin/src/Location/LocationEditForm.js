import React, { useEffect, useState } from "react";
import SoftInput from "components/SoftInput";
// import Uploader from "components/ApnaUploader";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Card } from "@mui/material";
import toast from "react-hot-toast";
import BasicModal from "components/Modal";
import "../form/style.css";
import { lightBlue } from "@mui/material/colors";

const LocationEditForm = ({ show, unShow, handleRefresh, elm }) => {

  console.log('here');
  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState(elm?.oldcity);
  const [selectedState, setSelectedState] = useState(elm?.oldstate);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `https://api.countrystatecity.in/v1/countries/IN/states`,
          {
            method: "GET",
            headers: {
              "X-CSCAPI-KEY": process.env.REACT_APP_TOKEN,
            },
          }
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {}
    };
    fetchCountries();
  }, []);

  const countryOptions =
    countries.length > 1 &&
    countries.map(country => (
      <option key={country.iso2} value={country.name}>
        {country.name}
      </option>
    ));

  const handleUpdateLocation = async () => {
    try {
      // const location = await handleLocation();
      setLoading(true);
      const adminId = localStorage.getItem("userid");

      fetch(`${process.env.REACT_APP_API}/api/location/update/${elm?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          city: city,
          state: selectedState,
        }),
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            toast.success(result.message);
            setLoading(false);
            unShow();

            handleRefresh();
          } else {
            setLoading(false);
            toast.error(result.message);
          }
        });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (show) {
      if (data != null) {
      } else {
        setCity("");
      }
    }
  }, [show, data]);

  return (
    <div>
      <BasicModal show={show} unShow={unShow} height="80%">
        <SoftBox mt={2}>
          <div>
            <div
              className="super"
              style={{
                // background: "lightBlue",
                boxShadow:
                  " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                border: "1px solid  gainsboro",
                fontSize: "1rem",
                padding: "1rem",
                borderRadius: ".5rem",
                marginBottom: ".5rem",
                width: "100%",
              }}
            >
              <h5 style={{ marginBottom: "0.5rem" }}>Location Details -</h5>
              <SoftBox m={1}>
                <label style={{ fontSize: "1rem" }}>City</label>

                <SoftInput
                  type="city"
                  name="city"
                  placeholder="Enter Your City"
                  onChange={e => {
                    const input = e.target.value;
                    const trimmedValue = input.substring(0, 100);
                    setCity(trimmedValue);
                  }}
                  value={city}
                  required
                />
              </SoftBox>

              <div>
                <label style={{ fontSize: "1rem" }}>
                  Select State:
                  <select
                    style={{
                      width: "100%",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "8px",
                      border: "2px solid  gainsboro",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                    autoFocus={true}
                    value={selectedState}
                    onChange={e => {
                      setSelectedState(e.target.value);
                    }}
                  >
                    {countryOptions}
                  </select>
                </label>
              </div>
            </div>
            <SoftButton
              type="submit"
              size="small"
              color="info"
              fullWidth
              onClick={handleUpdateLocation}
            >
              {data == null ? "submit" : "update"}
            </SoftButton>
          </div>
          {/* </Card> */}
        </SoftBox>
      </BasicModal>
    </div>
  );
};

export default LocationEditForm;