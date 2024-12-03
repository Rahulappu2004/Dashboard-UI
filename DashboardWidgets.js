import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function DashboardWidgets() {
  const widgets = [
    { title: "Website Analytics", stats: "28.5% Conversion Rate" },
    { title: "Daily Sales", stats: "$28,450" },
    { title: "Earning Reports", stats: "$468 (+4.2%)" },
    { title: "Support Tracker", stats: "164 Tickets" },
  ];

  return (
    <Grid container spacing={3} style={{ marginTop: "20px" }}>
      {widgets.map((widget, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{ background: "#1e1e2d", color: "white" }}>
            <CardContent>
              <Typography variant="h6">{widget.title}</Typography>
              <Typography variant="h5">{widget.stats}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardWidgets;
