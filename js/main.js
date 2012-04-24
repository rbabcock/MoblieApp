$(document).ready(function(){

$("#decrypt").click(function(e){
		
		var decrypt = $("#passlist").val();
		
		$.ajax({                                      
      			url: 'http://www.zarnithon.com/php/decode.php',                         
      			data: {decrypt: decrypt},                       
      			dataType: 'json',
      			success: function(data){
      				$("#decryptpass").val(data);
      			} 

		});

	});

	

$("#contactForm").bind("submit", function(e){
	var length = $("#passwordL").val();
	var lc = $("#lowercase").val();
	var uc = $("#uppercase").val();
	var num = $("#numbers").val();
	var symb = $("#symbols").val();

	
	
	var onSuccess = function(response){
	
	   if(typeof response != "undefined" && typeof response.password != "undefined" && response.password != "") {
	   
	   		$("#password").val(response.password);
	   
	   }
	   
	   
	       
	};

	$.ajax({
		   url: 'http://www.zarnithon.com/php/generate.php',
		   type: 'POST',
		   dataType: 'json',
		   data: {
		       passwordL: length,
		       lowercase: lc,
		       uppercase: uc,
		       numbers: num,
		       symbols: symb
		   },
		   success: onSuccess
	});	
	
	
	e.preventDefault();
	
});

	

	/*$.ajax({
		url:'http://www.zarnithon.com/php/connect.php',
		dataType:'POST',
		data: {}
	
	})*/
	
});

