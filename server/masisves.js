const massive = require("massive");
require("dotenv").config();

const {CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  }).then((db) => {
    app.set("db", db);
    console.log("db ready!");
  
    app.listen(SERVER_PORT, console.log(`RUNNING @ PORT ${SERVER_PORT}`));
  });