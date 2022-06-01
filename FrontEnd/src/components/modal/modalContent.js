import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";
import ImageDisplay from "./imageDisplay";
//TODO Break this component down into multiple components
//TODO Add selection functionality so user can select between comics, events, stories, etc.
//TODO Need to make an API with the comic ID to retrieve it from the database
const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const paperStyle = {
  width: "100px",
  height: "100px",
};

export default function ModalContent(props) {
  const [mosaicDisplay, setMosaicDisplay] = React.useState(false);
  const [selection, setSelection] = React.useState("");

  const changeDisplay = (selection) => {
    console.log(selection);
  };
  const displayMosaic = () => {
    setMosaicDisplay(!mosaicDisplay);
  };
  // setMosaicDisplay(!mosaicDisplay);

  // setSelection();
  console.log(props.item);
  return (
    <>
      <Box sx={{ ...style }}>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              image={
                props.item.thumbnail.path +
                "/portrait_uncanny." +
                props.item.thumbnail.extension
              }
              alt={props.item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.item.name}
              </Typography>
              {props.item.description && (
                <Typography variant="body2" color="text.secondary">
                  {props.item.description
                    ? props.item.description
                    : "No Description Available"}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
        {mosaicDisplay ? (
          <ImageDisplay items={props.item.comics.items}></ImageDisplay>
        ) : (
          // <Box
          //   sx={{
          //     marginLeft: 10,
          //     display: "flex",
          //     gap: 10,
          //     width: 500,
          //     height: 450,
          //     overflowY: "scroll",
          //   }}
          // >
          //   <ImageList variant="masonry" cols={3} gap={8}>
          //     {props.item.comics.items.map(async (item) => {
          //       let result;
          //       let id = item.resourceURI.split("/");
          //       console.log(id);
          //       //TODO API call needs to be made here to get each comic image, need to create a way for this call to be async so the application can wait to get the needed result before rendering any elements
          //       await axios
          //         .get(`http://localhost:3001/comics/` + id[id.length - 1])
          //         .then((res) => {
          //           result =
          //             res.data.data[0].thumbnail.path +
          //             "/portrait_uncanny." +
          //             res.data.data[0].thumbnail.extension;
          //           console.log(result);
          //         });
          //       return (
          //         <ImageListItem key={1}>
          //           <img
          //             src={`${result}?w=164&h=164&fit=crop&auto=format`}
          //             srcSet={`${result}?w=248&fit=crop&auto=format&dpr=2 2x`}
          //             alt={item.name}
          //             loading="lazy"
          //           />
          //           <ImageListItemBar position="below" title={item.author} />
          //         </ImageListItem>
          //       );
          //     })}
          //   </ImageList>
          // </Box>
          <Box sx={{ marginLeft: 10, display: "flex", gap: 10 }}>
            {["comics", "events", "stories", "series"].map((option) => {
              if (props.item[option].available !== 0) {
                return (
                  <Card sx={{ ...paperStyle }}>
                    <CardActionArea
                      sx={{ height: "100%" }}
                      onClick={() => {
                        changeDisplay(option);
                        displayMosaic();
                      }}
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {option}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              }
            })}
          </Box>
        )}
      </Box>
    </>
  );
}
