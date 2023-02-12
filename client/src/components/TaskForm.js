import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
  const navigate = useNavigate();

  // state
  const [task, setTask] = useState({
    Departamento: "",
    Ext: "",
    Nombre: "",
    Localidad: "",
  });

  const [loading, setLoading] = useState(false);

  const handlerSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/v1/create", {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    navigate("/");
  };

  const handlerChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      direction="colum"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={5}>
        <Card
          sx={{ mt: 12 }}
          style={{
            backgroundColor: "#1e272e",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            CREAR EXTENSION
          </Typography>
          <CardContent>
            <form onSubmit={handlerSubmit}>
              <TextField
                fullWidth
                variant="filled"
                label="DEPARTAMENTO"
                name="Departamento"
                onChange={handlerChange}
                InputLabelProps={{ style: { color: "white" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="EXT"
                name="Ext"
                onChange={handlerChange}
                InputLabelProps={{ style: { color: "white" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="NOMBRE"
                name="Nombre"
                onChange={handlerChange}
                InputLabelProps={{ style: { color: "white" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="LOCALIDAD"
                name="Localidad"
                onChange={handlerChange}
                InputLabelProps={{ style: { color: "white" } }}
                inputProps={{ style: { color: "white" } }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                //disabled={!task.Departamento || !task.Ext}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "crear"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
