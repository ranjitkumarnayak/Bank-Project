function validate1(){
    var nam=document.getElementById("name").value
    var emel=document.getElementById("email").value
    var mobail=document.getElementById("mobile").value
    var siti=document.getElementById("city").value
    var psd=document.getElementById("password").value
    var cpsd=document.getElementById("ConfirmPassword").value
    if(nam == ""){
        document.getElementById("namemsg").innerHTML = " Name can't be blank"
        return false;
    }else if(nam.length < 2 || nam.length > 20 ){
        document.getElementById("namemsg").innerHTML = "Name Should Contain Characters 3-20 "
        return false;
} 
else if(emel == ""){
    document.getElementById("emailmsg").innerHTML = " Email can't be blank"
    return false;
}else if(mobail == ""){
document.getElementById("mobilemsg").innerHTML="Mobile number can't blank"
return false
}else if(siti == ""){
    document.getElementById("citymsg").innerHTML = " city can't be blank"
    return false;
}else if(siti.length < 2 || siti.length > 20 ){
    document.getElementById("citymsg").innerHTML = "City name Should Contain Characters 3-20 "
    return false;
}
else if(psd == ""){
    document.getElementById("passwordmsg").innerHTML = " password can't be blank"
    return false;
}else if(psd.length < 2 || psd.length > 20 ){
    document.getElementById("passwordmsg").innerHTML = "Password Should Contain Characters 3-20 "
    return false;
} 
else if(psd != cpsd){
    document.getElementById("confirmpasswordmsg").innerHTML = " password wont be match"
    return false;
}
}