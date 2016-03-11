$(document).ready(function() {
	var counter;
	var cookiedata
	//see if cookie exists
	if (!$.cookie('pagehits')) {
	$.cookie('pagehits', '1', { expires: 365 });//creates cookie, good for a year
	counter=$.cookie('pagehits');
		$("#pageHits").html("Welcome new Customer");
	}
	else {//cookie exists
		counter=$.cookie('pagehits');
		counter=parseInt(counter);//get counter, parse and increment
		counter++;
		$.cookie('pagehits', counter, { expires: 365 });
		$("#pageHits").html("welcome back "+counter);
		
	}

});
