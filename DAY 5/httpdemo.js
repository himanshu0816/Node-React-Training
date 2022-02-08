var http= require('http');

//creating a server object
http.createServer(function(req,res){
    res.write('Hello World!');//response want to show for client
    res.end();//end
}).listen(8080);//the server object listning on port 8080