import React, { useEffect, useState } from "react";
import SoftInput from "components/SoftInput";
// import Uploader from "components/ApnaUploader";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { Card } from "@mui/material";
import toast from "react-hot-toast";
import BasicModal from "components/Modal";
import Loading from "components/Loading";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const index = ({ show, unShow, handleRefresh, data }) => {

  const checkboxItems = [
    { id: 1, label: "ALL" },
    { id: 2, label: "CAR" },
    { id: 3, label: "PARTS" },
    { id: 4, label: "USERS" },
    { id: 5, label: "VENDORS" },
    { id: 6, label: "ORDERS" },
    { id: 6, label: "SUBADMIN" },
    { id: 7, label: "OFFER" },
    { id: 8, label: "SLIDER" },
    { id: 9, label: "PRIVACY" },

    // Add more items as needed
  ];
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [permission, setPermission] = useState([]);

  useEffect(() => {
    if (show) {
      if (data != null) {
        setEmail(data?.email || "");
        setPassword(data?.password || "");
        setPermission(data?.permission);
        setIsAll(data?.permission.includes("ALL"));
      } else {
        setEmail("");
        setPassword("");
        setPermission("");
        // setIsAll([]);
      }
    }
  }, [show, data]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const [isAll, setIsAll] = useState(false);

  const handleChange = (itemLabel) => {
    if (permission && permission.length > 0 && permission.includes(itemLabel)) {
      // If the item is already checked, uncheck it
      setPermission(permission.filter((label) => label !== itemLabel));
      if (itemLabel == "ALL") {
        setIsAll(false);
      }
    } else {
      // If the item is not checked, check it
      if (itemLabel == "ALL") {
        setPermission(["ALL"]);
        setIsAll(true);
      } else {
        setPermission((prev) => [...prev, itemLabel]);
        setIsAll(false);
      }
    }
  };


  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    handleCreateSubAdmin();
  };

  const handleCreateSubAdmin = () => {
    try {
      if (permission?.length === 0) {
        toast.error("Select Atleast one permission.");
        return;
      }

      setLoading(true);

    
      fetch(
        data == null
          ? `${process.env.REACT_APP_API}/api/createSubadmin`
          : `${process.env.REACT_APP_API}/api/updateSubadmin/${data?._id}`,
        {
          method: data == null ? "POST" : "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ email, password, permission }),
        }
      )
        .then((res) => res.json())
        .then((resp) => {
          // console.log(resp);
          if (resp.success) {
            toast.success(resp?.message);
            setLoading(false);
            setEmail("");
            setPassword("");
            setPermission([]);

            // Close the modal or perform any other necessary actions
            unShow();
            handleRefresh();
          } else {
            setLoading(false);
            toast.error(resp.error || resp?.message);
          }
        });
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  // ----------------------------------------------------------------------------------------
  // useEffect(() => {
  //   if (id != null) {
  //     setValues({
  //       title: data?.title,
  //       description: data?.description,
  //       amount: data?.amount,
  //       // photo: `${${process.env.REACT_APP_IMG}}/${data?.photo}`
  //     });
  //   }
  // }, [data]);

  // const id = localStorage.getItem("id");
  // const token = localStorage.getItem("token");

  // const handleCreateExpense = () => {
  //   try {
  //     const { title, description, amount, photo } = values;

  //     const formData = new FormData();
  //     typeof values.photo == "object" && formData.append("photo", photo);
  //     formData.append("title", title);
  //     formData.append("description", description);
  //     formData.append("amount", amount);

  //     fetch(
  //       data == null
  //         ? `${process.env.REACT_APP_API}/api/v1/create/expense/${id}`
  //         : `${process.env.REACT_APP_API}/api/v1/update/expense/${data?._id}`,
  //       {
  //         method: data == null ? "POST" : "PUT",
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: token,
  //         },
  //         body: formData,
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result.success) {
  //           toast.success(result.message);
  //           unShow();
  //           handleRefresh();
  //         } else {
  //           toast.error(result.message);
  //         }
  //       });
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  // ------------------------------------------------------------------------------------------

  return (
    <div>
      <BasicModal show={show} unShow={unShow}>
        <SoftBox
          mt={2}
          component="form"
          role="form"
          onSubmit={handleFormSubmit}
        >
          {/* <Card
            sx={{
              backdropFilter: `saturate(200%) blur(30px)`,
              backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                rgba(white.main, 0.8),
              boxShadow: ({ boxShadows: { navbarBoxShadow } }) =>
                navbarBoxShadow,
              position: "relative",
              mt: 2,
              mx: 3,
              py: 2,
              px: 2,
            }}
          > */}
          <SoftBox m={1}>
            Email:
            <SoftInput
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </SoftBox>
          <SoftBox m={1}>
            Password:
            <SoftInput
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </SoftBox>

          <SoftBox>
            Permissions:
            <div>
             
              {checkboxItems.map((item) => (
                <div key={item.id}>
                  <Checkbox
                    disabled={item.label != "ALL" && isAll}
                    checked={
                      permission &&
                      permission.length > 0 &&
                      permission.includes(item.label)
                    }
                    onChange={() => handleChange(item.label)}
                    inputProps={{ "aria-label": item.label }}
                  />
                  {item.label}
                </div>
              ))}
            </div>
          </SoftBox>

          {loading ? (
            <Loading />
          ) : (
            <>
              <SoftButton
                type="submit"
                size="small"
                color="info"
                fullWidth

                // onClick={handleCreateSubAdmin}
              >
                {data == null ? "submit" : "update"}
              </SoftButton>
            </>
          )}
          {/* </Card> */}
        </SoftBox>
      </BasicModal>
    </div>
  );
};

export default index;
