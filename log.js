function formm(){
    var passs= document.getElementById("ipass").value;
    
    var passPattern= /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!])).{6,20}/
    if(!passs.match(passPattern))
      {
          document.getElementById("epass").innerHTML="one digit,lower,upper,special(6-20)!";
          return false;
  
      }

}