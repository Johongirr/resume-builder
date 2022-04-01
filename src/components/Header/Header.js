import React from "react";
import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ padding: "20px 0" }}>
      <Typography variant="h4" component="h1" textAlign="center">
        Resume Builder
      </Typography>
    </AppBar>
  );
}

export default Header;
