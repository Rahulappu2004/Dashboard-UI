import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar } from "@mui/material";
import { Dashboard, Task, CalendarToday } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#1e1e2d", // Adjust the color as needed
          color: "#ffffff", // Text color
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Task style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CalendarToday style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
