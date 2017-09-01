
module.exports = function(io_clients){
    
    io_clients.on("connection", function(client){
        console.log("new Client")
        client.on("add_c",function(mess){
            var cl = require("../db/client")
            cl.push(mess)
            console.log(cl)
            client.emit("db",cl);
        })
    })
}