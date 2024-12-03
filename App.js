import React, { useState } from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Complete the project", dueDate: "2023-12-10", completed: false },
    { id: 2, title: "Task 2", description: "Prepare presentation", dueDate: "2023-12-12", completed: false },
  ]);

  const markTaskCompleted = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: true } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Container style={{ marginTop: "16px", marginLeft: "240px" }}>
          {/* Sidebar takes 240px width */}
          <TaskList
            tasks={tasks}
            onMarkCompleted={markTaskCompleted}
            onDelete={deleteTask}
          />
        </Container>
      </div>
    </>
  );
}

export default App;
