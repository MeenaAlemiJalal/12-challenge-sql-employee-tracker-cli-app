// Import and require mysql2
const mysql = require('mysql2/promise');
const figlet = require('figlet');
const runAllQueries = require('./lib/userInputes');

console.log(  
  figlet.textSync('Employee\n   Tracker', {
      horizontalLayout: 'full',
      whitespaceBreak: true
  })
)
const startServer = async () => {
  try{
    // Connect to database
    const db = await mysql.createConnection(
      {
        host: 'localhost',
        user: 'root',
        password: '12345@2021',
        database: 'employee_tracker_db'
      },
    );
    console.log(`Connected to the emplyee_tracker database.`)
    await runAllQueries(db)
    return console.log('Bye Bye')
  } catch(err){
    console.log(err.message)
  } 
}
startServer()


