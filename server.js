// Import and require mysql2
const mysql = require('mysql2/promise');
const figlet = require('figlet');
const runApp = require('./app');

console.log(  
  figlet.textSync('Employee\n   Manager', {
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
    console.log(`Connected to the employee_manager database.`)
    // Run the app
    await runApp(db)
  } catch(err){
    console.log(err)
  } 
}

// start the server
startServer().then(()=>{
  console.log('Bye!')
  process.exit(0)
}).catch(err=> {
  console.log(err)
})


