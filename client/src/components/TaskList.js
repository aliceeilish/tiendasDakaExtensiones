import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTask = async () => {
    const res = await fetch("http://localhost:4000/");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTask();
  }, []);
  
  return (
    <>
     <TableContainer style={{ marginTop: 40}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>DEPARTAMNETO</TableCell>
            <TableCell align="right">EXT</TableCell>
            <TableCell align="right">NOMBRE</TableCell>
            <TableCell align="right">LOCALIDAD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ background: "#7f7f7f"}}>
          {tasks.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Departamento}
              </TableCell>
              <TableCell align="right">{row.Ext}</TableCell>
              <TableCell align="right">{row.Nombre}</TableCell>
              <TableCell align="right">{row.Localidad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
