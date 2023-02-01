import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import axios from "axios";

export default function Item(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    let info = props.item.resourceURI.split("/");

    axios
      .get(
        `http://localhost:3001/${info[info.length - 2]}/` +
          info[info.length - 1]
      )
      .then((res) => {
        let response = res.data.data[0];
        setData(response);
      });
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={() => handleClick()}>
        <ListItemText primary={props.item.name.split("cover from ").pop()} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {data ? (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image={
                data.thumbnail.path +
                "/portrait_uncanny." +
                data.thumbnail.extension
              }
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </Collapse>
    </>
  );
}
