
function myfunction(){
    var x=document.getElementById('user').value;
var y=document.getElementById('pass').value;
if(x==='admin12' && y==='Admin@1234'){
    document.write("<h1> Welcome to the Hopspital facility</h2>")
}
else{
    alert("You Enter wrong UserId and password");
}
}