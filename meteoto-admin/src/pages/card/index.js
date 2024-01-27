import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import SoftBox from "components/SoftBox";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

function MediaCard({ name, image, key }) {
  console.log(name,"nameeeeeeeeeee")
  return (
    <SoftBox key={key} sx={{ listStyle: "none", width: "240px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography> */}
          <CardActions>
            <Stack direction="row" spacing={7}>
              <Button variant="contained" style={{ color: "white" }}>
                <DeleteIcon />
              </Button>
              <Button variant="contained" style={{ color: "white" }}>
                <EditIcon />
              </Button>
            </Stack>
          </CardActions>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button
            color="secondary"
            variant="contained"
            style={{ color: "white", margin: "auto", marginBottom: "20px" }}
          >
            view Models
          </Button>
        </CardActions>
      </Card>
    </SoftBox>
  );
}

// MediaCard.defaultProps = {
//   noGutter: false,
// };

MediaCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  // prop2: PropTypes.number,
  // company: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // vat: PropTypes.string.isRequired,
  // noGutter: PropTypes.bool,
};

// MediaCard.propTypes = {
//   // Define your prop types here
//   prop1: PropTypes.string,
//   prop2: PropTypes.number,
//   // ...
// };

export default MediaCard;
