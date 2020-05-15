const http = require('http') //pulls in http library
const fs = require("fs")
const port = 3000 //tells where to run server

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile("index.html", function(error, data) {
    if(error) {
      res.writeHead(404)
      res.write("AHHH . Error, File not found")
    } else {
      res.write(data)
    }
    res.end()
  })
}) //use library to create function that handles activity on server

//set upo server to listen on port we want it to
server.listen(port, function(error) {
  if(error){
    console.log("Uh oh! Here's what happened: ", error)
  } else {
    console.log("Listening on port ", port)
  }
})