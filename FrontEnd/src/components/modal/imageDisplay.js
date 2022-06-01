import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
export default function ImageDisplay(props) {
  const [items, setImages] = useState(props.items);
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    let result = [];
    items.map((item) => {
      let id = item.resourceURI.split("/");
      console.log(id);
      axios
        .get(`http://localhost:3001/comics/` + id[id.length - 1])
        .then((res) => {
          result.push(
            res.data.data[0].thumbnail.path +
              "/portrait_uncanny." +
              res.data.data[0].thumbnail.extension
          );
          console.log(result);
        });
    });
    setUrls(result);
  });

  return (
    <Box
      sx={{
        marginLeft: 10,
        display: "flex",
        gap: 10,
        width: 500,
        height: 450,
        overflowY: "scroll",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {urls.map(async (url) => {
          console.log(urls);
          return (
            <ImageListItem key={1}>
              <img
                src={`${url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={"hi"}
                loading="lazy"
              />
              <ImageListItemBar
                position="below"
                //   title={item.author}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}
