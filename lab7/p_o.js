//Pizza and order javaScript
window.onload=initfunction;

function initfunction()
{
var toDate = new Date();	
		
document.getElementById("dateField").innerHTML = toDate;
}
function buttonandchecks()
{
//this will use a 'for' loop to check the radio buttons and
//a series of 'if' statements to verify the check boxes
var x;
var message="";
var resultmessage="";
var resultmessage2="";
var orderamount=parseFloat(0);
var radio_value; //get value from radio button
var radio_value1;
var totalvalue=parseInt(0); //initialize this to 0


function validateform()
{
	/*Extract values from registration form*/
var firstname=document.getElementById("customername").value;	
var lastname=document.getElementById("myaddress").value;
var phone=document.getElementById("phone").value;

/*Error Checking */
/*This will check if the string lengths are 0 or greater than 20*/
	if(firstname.length<1||firstname.length>20)
		{
		alert("Your first name is not correctly entered");
		
		return false;
		}
	if(lastname.length<1||lastname.length>20)
	{
	alert("Your last name is not correctly entered");
	
	return false;
	}
	/*call function to validate e-mail*/
	validate_phone(phone);
}
    function validate_email(phone)
{
	/*Use rational expressions to validate e-mail*/
	var reg = /^\d{3}\d{3}\d{4}/;
	
	if(reg.test(phone) == false) {
		 
	      alert('Invalid phone number');
	      return false;
	      
	   }
	return true;
}
document.getElementById("phone").style.backgroundColor="red";
    document.getElementById("customername").style.backgroundColor="red";
    document.getElementById("myaddress").style.backgroundColor="red";


//use for loop to get value of radio button
		for(x=0;x<document.pizzaCost.pizzaSize.length;x++)
		{
		  if(document.pizzaCost.pizzaSize[x].checked)
			{
			 radio_value=document.pizzaCost.pizzaSize[x].value;
			}
		}
        for(x=0;x<document.pizzaCost.special.length;x++)
		{
		  if(document.pizzaCost.special[x].checked)
			{
			 radio_value1=document.pizzaCost.special[x].value;
			}
		}
		radio_value=parseFloat(radio_value);
        radio_value1=parseFloat(radio_value1);

//if statements to get the values from the check boxes
	if(document.pizzaCost.cheese.checked)
		{
		orderamount+=1.5;//the giftamount will by increased by this value, in this case 100
		message=(message+" Cheese");
		}
	if(document.pizzaCost.pepperoni.checked)
		{
		orderamount+=1.5;
		message=(message+" Pepperoni");
		}
    if(document.pizzaCost.mushroom.checked)
		{
		orderamount+=1.5;
		message=(message+" Mushroom");
		}
	if(document.pizzaCost.bacon.checked)
		{
		orderamount+=1.5;
		message=(message+" Bacon");
		}
	if(document.pizzaCost.olive.checked)
		{
		orderamount+=1.5;
		message=(message+" Olive");
		}
//calculate total cost of gift
    if(isNaN(radio_value1))
    radio_value1=0;
totalvalue=radio_value+ radio_value1+orderamount;
    

        

resultmessage=("Your Pizza will cost: "+ radio_value.toFixed(2) + " Your Special Pizza will cost: " + radio_value1.toFixed(2) + " And your toppings are: " + message + " for a total cost: " + totalvalue.toFixed(2));
document.getElementById("result").innerHTML=resultmessage;
    
    

}


//usercookie.js

$(document).ready(function() {
	
	$("#submit").click(function() {
		
		var customername = $("#customername").val();
	
	
	$.cookie('customername', customername);
          

});
   alert($.cookie("customername"));
});
