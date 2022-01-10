function display(){
    var un=document.getElementById("username").value 
    var pass=document.getElementById("password").value
    if(un!="ABCD"){
document.getElementById("msg").innerHTML="you enter your first name"
return false;
    }
    if(pass!= "ABCD@1234"){
        document.getElementById("msg1").innerHTML="you enter your exact password"
        return false;
}
}