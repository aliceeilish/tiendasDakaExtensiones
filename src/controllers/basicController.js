import { getConnection, sql } from "../config";

export const basicCreate = async (req, res) => {
  try {
    const { Departamento, Ext, Nombre, Localidad } = req.body;
    const pool = await getConnection();
    
    await pool.request()
    .input("Departamento", sql.VarChar, Departamento)
    .input("Ext", sql.Int, Ext)
    .input("Nombre", sql.VarChar, Nombre)
    .input("Localidad", sql.VarChar, Localidad)
    .query("INSERT INTO [dbo].[EXTENSIONES_DAKA] (Departamento, Ext, Nombre, Localidad) values (@Departamento,@Ext,@Nombre,@Localidad)")

  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM [dbo].[EXTENSIONES_DAKA]");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const basicUpdate = (req, res) => {
  res.send("update");
};

const basicDelete = (req, res) => {
  res.send("delete");
};

module.exports = {
  getProducts,
  basicCreate,
  basicUpdate,
  basicDelete,
};
