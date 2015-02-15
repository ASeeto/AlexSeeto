$(document).ready(function(){
	$(".subject").on("click",function(){
		if(!$(this).is('subjectselect')){
			$(this).siblings().removeClass('subjectselect');
			$(this).addClass('subjectselect');
			$('#subject').val($(this).val());
		}
	});
	$("#ajax-contact-form").submit(function(){
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "validate.php",
			data: str,
			success: function(msg){
				$(document).ajaxComplete(function(event, request, settings){
					if(msg == 'OK'){
						result = '<div class="notification_ok">Your message has been sent Succesfully. Thank you!!!</div>';
						$("#fields").hide();
					}else{result = msg;}
					$('#note').hide();
					$('#note').html(result).slideDown("slow");
					$('#note').html(result);
				});
			}
		});
		return false;
	});
});