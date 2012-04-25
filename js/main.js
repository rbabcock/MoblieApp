$(document).ready(function(){

$("#retrieveForm").bind("submit", function(e){
		
		var uncrypt = $("#passlist").val();
		console.log(uncrypt);
		
		$.ajax({                                      
      			url: 'http://www.zarnithon.com/php/decode.php',                         
      			type: 'POST',
      			data: {passlist: uncrypt},                       
      			dataType: 'json',
      			success: function(data){
      				$("#decryptedpass").val(data);
      				console.log(data);
      			} 

		});
			e.preventDefault();
	});

	

$("#passwordForm").bind("submit", function(e){
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

	$(function (){
		$.ajax({
		url:'http://www.zarnithon.com/php/connect.php',
		dataType: "json",
		data: {},
		success: function(data){
				for(var i=0; i<data.length; i++){
					$("#passlist").append("<option>"+ data[i].Password + "</option>");
			
				}
				console.log(data);
						
			}

		}); 
	
	});
	
});

