import React from "react";
import { Grid } from "@mui/material";
import TaskCard from "./TaskCard"; // Import TaskCard component

function TaskList({ tasks, onMarkCompleted, onDelete }) {
  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <TaskCard
            task={task}
            onMarkCompleted={onMarkCompleted}
            onDelete={onDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default TaskList;
