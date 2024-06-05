const sql = require("msnodesqlv8");

const connectionString = "Server=(localDb)\\MSSQLLocalDB;Database=master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM sys.databases";

sql.query(connectionString, query, (err, rows) => {
  if(err){
    console.log(err);
  } else {
    console.log(rows);
  }
});
