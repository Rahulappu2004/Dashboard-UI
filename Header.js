import React from "react";
import { AppBar, Toolbar, InputBase, Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

function Header() {
  return (
    <AppBar position="static" style={{ background: "#1e1e2d", padding: "10px 20px" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", background: "#2a2a3c", padding: "5px 10px", borderRadius: "5px" }}>
          <SearchIcon />
          <InputBase placeholder="Search…" style={{ marginLeft: "10px", color: "white" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <SettingsIcon style={{ color: "white" }} />
          </IconButton>
          <Avatar alt="User" src="https://via.placeholder.com/40" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
