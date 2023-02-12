import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
              EXTENSIONES
            </Link>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/taskForm")}
          >
            NUEVA EXT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
