import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/taskForm" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
