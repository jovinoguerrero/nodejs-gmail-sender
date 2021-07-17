import { app } from "./app";

require("dotenv/config");

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`----- connected to the port: ${PORT} -----`);
});