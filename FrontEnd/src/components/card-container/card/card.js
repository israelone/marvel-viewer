import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, display: "inline-block" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={props.item.thumbnail.path+'/portrait_uncanny.'+ props.item.thumbnail.extension}
          alt={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description ? props.item.description : "No Description Available"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
