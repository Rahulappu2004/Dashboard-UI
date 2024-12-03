import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

function TaskCard({ task, onMarkCompleted, onDelete }) {
  return (
    <Card style={{ margin: "16px" }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary" style={{ margin: "8px 0" }}>
          {task.description}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Due Date: {task.dueDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onMarkCompleted(task.id)}>
          Mark as Completed
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TaskCard;
