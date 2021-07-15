function sgallery(){
  document.getElementById("gallery").style.display = "block";
}
function clos(){
   document.getElementById("gallery").style.display="none";
}
function makefriend(){
	document.getElementById("fform").style.display="inline";
}
function validate(){
		var a=document.getElementById("number").value;
		if(a>0 && a<11)
		{
			document.getElementById("error").innerHTML="You will be added as a friend"
		}
		else
		{
			document.getElementById("error").innerHTML="Error"
		}
		var pass=document.getElementById("pass").value
		var comfirmpass=document.getElementById("retypepassword").value
		 if(pass!=comfirmpass){
		 	document.getElementById("errorpass").innerHTML="Password and retypepassword not matching"
		 }
		 return false;
	}