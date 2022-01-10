
function validate() {
    var amount=document.getElementById("five").value
    var draw=document.getElementById("two").checked
    var withdraw=document.getElementById("three").checked
    var desc = document.getElementById("ten").value
    
    let amount2=document.getElementById("nine").value
    var accname=document.getElementById("four").value
    var accno=document.getElementById("six").value
    if(draw==true){
        let total=Number(amount2)+Number(amount)
        console.log(total)
        var data = document.getElementsByTagName("table")[0] 
    var newRow = data.insertRow() 
    var cel1 = newRow.insertCell(0) 
    var cel2 = newRow.insertCell(1)
    var cel3 = newRow.insertCell(2)
    
    
    cel1.innerHTML = amount2
    cel2.innerHTML = desc
    cel3.innerHTML = total
    document.getElementById("availbal").innerHTML=total
    document.getElementById("accnam").innerHTML=accname
    document.getElementById("accno").innerHTML=accno
    }else if(withdraw==true){
        
        let amount2=document.getElementById("nine").value
        if(amount>=amount2){
        let total=Number(amount)-Number(amount2)
        
        console.log(total)
        var data = document.getElementsByTagName("table")[1] 
    var newRow = data.insertRow() 
    var cel1 = newRow.insertCell(0) 
    var cel2 = newRow.insertCell(1)
    var cel3 = newRow.insertCell(2)
    
    cel1.innerHTML = amount2
    cel2.innerHTML = desc
    cel3.innerHTML = total
    document.getElementById("availbal").innerHTML=total
    document.getElementById("accnam").innerHTML=accname
    document.getElementById("accno").innerHTML=accno
}
else{
    document.getElementById("baby").innerHTML="Balance is Low"
}    
        
    }
    
    else{
        document.getElementById("baby").innerHTML="Enter mode of operation"
    }

    
    
}
