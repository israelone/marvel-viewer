import * as React from "react";
import List from "@mui/material/List";
import Item from "./item";

export default function ItemsList(props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {props.items.map((item) => {
        return (
          <>
            <Item item={item}></Item>
          </>
        );
      })}
    </List>
  );
}
