$(document).ready(function(){

	var $formLogin = $("#formLogin");
	var $userEmail = $("#userEmail");
	var $userPass = $("userPass");
	var $submitForm = $("#submitForm");
	var $alertError = $(".alert-danger");
	var $alertSuccess = $(".alert-success");

	$formLogin.on('submit', function(e){
		e.preventDefault();
		showAlert(true);
	});

	$submitForm.on('click', function(){
		var email = $userEmail.val();
		var pass = $userPass.val();
		var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

		if( email == '' || email == null ) {
			showAlert(false);
		}else if( caract.test(email) == false ){
			showAlert(false);
		}

		if( pass == '' || pass == null ){
			showAlert(false);
		}
	});

	function showAlert(bool){
		if( bool == true ){
			if( $alertError.is(":visible") ){
				$alertError.hide();
			}
			$alertSuccess.show();	
		}else {
			if( $alertSuccess.is(":visible") ){
				$alertSuccess.hide();
			}
			$alertError.show();	
		}
	}

});