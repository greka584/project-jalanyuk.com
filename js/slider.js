$(document).ready(function(){

	var $slider = $('.slider-container');
	var $imgLength = $('.slider-container img').length;
	var $imgWidth = $('.slider-container img').width();
	var kanan = true;
	var curr = 1;

	setInterval(function(){
		if(curr == $imgLength)kanan = false;
		if(curr == 1)kanan = true;

		if(kanan){
			$slider.animate({
				'margin-left' : '-=' + $imgWidth +  'px'
			}, 1000);
			++curr;
		}else{
			$slider.animate({
				'margin-left' : '+=' + $imgWidth +  'px'
			}, 1000);
			--curr;
		}
	}, 5000);

});