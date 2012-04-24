$(document).ready(function(){
	


/*$("#decrypt").click(function(){
	$("#decryptpass").val($("#passlist").val());
	
	console.log($("#decryptpass").val());
	console.log("click");
	});

});*/


$("#decrypt").click(function(){
		
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

$("#contactForm").submit(function(){
	$.ajax({
		url: 'http://www.zarnithon.com/php/generate.php',
		type: 'POST',
		data: {datapass: password,
			   length: passwordL,
			   lowercase: lowercase,
			   uppercase: uppercase,
			   numbers: numbers,
			   symbols: symbols	
			  },
		success: function(data){
			$("#password").val(data);
			
			console.log(data);
		
		}
	
	});

});


	
})

