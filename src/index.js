// Migrar por completo a es6+
import app from "./app";
import  router from "./routes/apiV1Routes";
import "./config";

// middlewares
app.use(router);

app.listen(app.get("port"));
console.log("server on port " + app.get("port"));
