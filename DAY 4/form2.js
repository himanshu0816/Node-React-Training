function validate(){
    var a=document.getElementById('pn').value;
    var b=document.getElementById('fn').value;
    var c=document.getElementById('ln').value;
    var d=document.getElementById('mn').value;
    var e=document.getElementById('male');
    var f=document.getElementById('female');
    var g=document.getElementById('an').value;
    var h=document.getElementById('email').value;
    var i=document.getElementById('dob').value;
    var j=document.getElementById('bg').value;
    var k=document.getElementById('check1');
    var l=document.getElementById('check2');
    var m=document.getElementById('check3');
    var o=document.getElementById('check4');
    var p=document.getElementById('check5');
    var q=document.getElementById('check6');
    
    document.write(`Patient Number is: ${a} <br> Patient First Name is: ${b} <br> Patient Last Name is: ${c} <br> Patient Mobile Number is: ${d} <br>`)
    
    if(e.checked){
        document.write("Your Gender is :"+e.value+"<br>")
    }
    else if(f.checked){
        document.write("Your Gender is:"+f.value+"<br>")
    }
    document.write(`Patient Adhar Number is: ${g} <br> Patient Email Address is: ${h} <br> Patient Date Of Birth is: ${i} <br> Patient Blood Group is: ${j} <br>`)
    if(k.checked){
        document.write("You Are Suffering From: "+k.value);
    }
    else if(l.checked){
        document.write("Your are suffering From: "+l.value);
    }
    else if(m.checked){
        document.write("Your are suffering From :"+m.value);
    }
    else if(o.checked){
        document.write("Your are suffering From: "+o.value);
    }
    else if(p.checked){
        document.write("Your are suffering From: "+p.value);
    }
    else if(q.checked){
        document.write("Your are suffering From :"+q.value);
    }
    else if(e.checked && f.checked && k.checked && l.checked && m.checked && o.checked && p.checked && q.checked){
        alert("Select Only One");
    }
}