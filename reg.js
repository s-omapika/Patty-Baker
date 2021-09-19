function form(){
  var ftname =  document.getElementById("itname").value;
  var  num =  document.getElementById("inum").value;
  var passs= document.getElementById("ipass").value;
  var cpasss= document.getElementById("icpass").value;
  var age = document.getElementById("age").value;
  
//age
  var agePattern = /^[1-9][0-9]*$/;
  if (age.length > 3) {
    document.getElementById("eage").innerHTML ="Invalid!";
    return false;
  } else if (!age.match(agePattern)) {
    document.getElementById("eage").innerHTML = "Only Digit !";
    return false;
  }

  
  //password
  var passPattern= /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!])).{6,20}/
  if(!passs.match(passPattern))
    {
        document.getElementById("epass").innerHTML="one digit,lower,upper,special(6-20)!";
        return false;

    }
    else{
      document.getElementById("epass").innerHTML="";
    }
    //confirm_password
   if(passs!=cpasss){
        document.getElementById("ecpass").innerHTML="Not Matching!";
        return false;

    }
    else{
      document.getElementById("ecpass").innerHTML="";

    }
    //Number
  var numPattern=/(\+88)?-?01[3-9]\d{8}$/

  if(!num.match(numPattern))
    {
        document.getElementById("enum").innerHTML="Invalid Number!";
        return false;
    }
    else{
      document.getElementById("enum").innerHTML="";
    }
    //Name
  var namePattern= /^[a-zA-Z .]+$/
   if(ftname.length<2 ||  ftname.length>20){
      document.getElementById("efname").innerHTML ="Length Range(2-20)!";
      return false;
 }
 else if(!ftname.match(namePattern))
    {
        document.getElementById("efname").innerHTML="only Alphabet!";
        return false;
    }
    else{
      document.getElementById("efname").innerHTML="";
    }
  
    

}