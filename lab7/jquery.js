$(document).ready(function()
{
var cookieName = $.cookie("customername");
var cookieDate = $.cookie("todate")

if(customername==null)
    {
        $("#pageHits").html("Welcome new customer!")
    }
else
{
    $("#pageHits").html("Welcome back " + cookieName + "<br> Your last visited was " + cookieDate);
}    

var date = new Date();
$("#dateField").html(date);

$("#button").click(function()
{
    var name = $("#customername").val();
    var address = $("#myaddress").val();
    var phone = $("#phone").val();
    
    if(name.length<1)
        {
            $("#name").css("background-color","red");
        }
    else
        {
            $("#name").css("background-color","white");
        }
    if(address.length<1)
        {
            $("#address").css("background-color","white");
        }
    else
        {
            $("#address").css("background-color","white");
        }        
    if(phone.length<1)
        {
            $("#phone").css("background-color","white");
        }
    else
        {
            $("#phone").css("background-color","white");
        }  
              
            
var totalPrint = parseFloat(0);
var message = "Your order:";
            
var size = $("input[name='pizzaSize']:checked").val();
size=parseFloat(0);
var type = $("input[name='special']:checked").val();
type=parseFloat(0);
            
if(size=8)
    {
        message +="Small,";
    }
else if(size=10)
    {
        message += "Medium, ";
    }
else if (size=15)
    {
        message +="Large,";
    }
else if (size=18)
    {
        message +="Extra Large, ";
    }

if(type =3)
    {
        message +=" Super Cheesy";
    }
else if(type= 5)
    {
        message +=" Extra Meaty";
    }
else if(type =2)
    {
        messae +=" Very Veggie";
    }
else
            
if($("#cheese").prop('checked')||$("#pepperoni").prop('checked')
 ||$("#mushroom").prop('checked')||$("#bacon").prop('checked')||$("#olive").prop('checked')){
   message += " with";
   }
   
if($("#cheese").prop('checked'))
    {
        totalPrint +=1.50;
        message += " extra cheese";
    }
if($("#pepperoni").prop('checked'))
    {
        totalPrint +=1.50;
        message += " extra pepperoni";
    }           
if($("#mushroom").prop('checked'))
    {
        totalPrint +=1.50;
        message += " extra mushroom";
    }
if($("#bacon").prop('checked'))
    {
        totalPrint +=1.50;
        message += " extra bacon";
    }    
if($("#olive").prop('checked'))
    {
        totalPrint +=1.50;
        message += " extra olive";
    } 
totalPrint += size + type; 
var totalPrice= totalPrint.toFixed(2);
message += ".<br>Your total comes to: $" +totalPrice; 
            
$("#result").html(message);
            
var newDate = new Date();
            
$.cookie("customername", name, {expires: 365});

$.cookie("todate", newDate, {expires: 365});
            
            
    });
});



