//1) import json server
const jsonServer = require('json-server')

//2) create path for db.json file using router method-for storing data
const router = jsonServer.router("db.json")

//3)create middleware to convert json to js - defaults()
const middleware = jsonServer.defaults()

//4)create json server
const mpserver = jsonServer.create()

//5)server should use first middleware and second use router
mpserver.use(middleware)
mpserver.use(router)

//6)set port for server
const PORT = 3000 || process.env.PORT

//7)run server
mpserver.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})