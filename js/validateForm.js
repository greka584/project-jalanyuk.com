var form = document.getElementById('form');

function validate(){
	for(var i=0 ; i<6 ; i++){
		errorMessage(i, '');
	}

	var name = form['nameTxt'].value;
	var address = form['addressTxt'].value;
	var product = form['productTxt'].value;
	var quantity = form['quantityTxt'].value;
	var paymentMethod1 = form['radioCash'].checked;
	var paymentMethod2 = form['radioCredit'].checked;
	var agree = form['agreeTxt'].checked;
	var valid = true;

	if(name.length == 0){
		errorMessage(0, 'name must be filled');
		valid = false;
	}

	var space = false;
	for(var i=0 ; i<name.length ; i++){
		if(name[i] == ' '){
			space = true;
		}
	}
	if(space == false){
		errorMessage(0, 'name must contain space');
		valid = false;
	}

	var alpha = false;
	var numeric = false;
	for(var i=0 ; i<address.length ; i++){
		if(isNaN(address[i]) == false){
			numeric = true;
		}
		else{
			alpha = true;
		}
	}
	if(!alpha || !numeric){
		errorMessage(1, 'address must be alphanumeric');
		valid = false;
	}
	if(address.search('street') == -1){
		errorMessage(1, 'address must contain street');
		valid = false;
	}

	if(product == 'Choose'){
		errorMessage(2, 'product must be choosen');
		valid = false;
	}

	if(quantity == '' || quantity <= 0){
		errorMessage(3, 'quantity must be grater than 0');
		valid = false;
	}

	if(!paymentMethod1 && !paymentMethod2){
		errorMessage(4, 'choose payment method');
		valid = false;
	}

	if(!agree){
		errorMessage(5, 'you must agree');
		valid = false;
	}

	if(valid){
		alert('item has been purchased');
	}
	return valid;
}

function errorMessage(index, message){
	$('.err')[index].innerHTML = message;	
}


