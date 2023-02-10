import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../assets/Marvel_Logo.png";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} alt="Marvel Logo" width="140" height="40" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
