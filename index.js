
// jsonServer creation

const jsonServer = require('json-server')
const rbServer = jsonServer.create()
const router = jsonServer.router('db.json')  //router() method used to mention where we want to store the jsonServer
const middileware = jsonServer.defaults()   

// mention port for json server

const PORT = 4000  

rbServer.use(middileware)  
rbServer.use(router)

// if the port working then show this message 
rbServer.listen(PORT,()=>{
    console.log(`RB-Server stardet running at PORT:${PORT} successfully `);
    
})
// the open terminal and type command "npm start"
// then the port started working to check that open browser and check "localhost:4000"