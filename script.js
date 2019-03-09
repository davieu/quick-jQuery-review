$(document).ready(function() {

	let design = {
		color: 'blue',
		background: 'green',
		border: '3px solid black'
	};

	let imgSize = {
		width: '200',
		height: '200',
		display: 'block'
	};

	//change css styling or return properties
	$('a').css('color', 'red');
	$('h1').css('background', 'blue');
	console.log($('h1').css('background'));
	$('h1').css(design);
	$('img').css(imgSize);
	$('.puppers').css('float', 'left');

	//add content before or after a selector
	$('ul').before('<h2>My favorite dogs!</h2>');
	$('ul').after('<h2>Are adorable</h2>');

	// text() method used to set or return content of the selected element
	//.text grabs the value of the selector
	console.log($('li').text());
	console.log($('li:first').text());
	//change text of p tag
	$('p').text('Welcome to this jQuery crash course');;
	$('li:first').text('Weiner Dog');

	// html() method used to set or return html content of the selected element
	console.log($('li:last').html());
	console.log($('ul').html());
	$('li:last').html('Corgi');

	//attr() method
	$('img').attr('border', '5px solid black');
	console.log($('img').attr('border'));
	console.log($('img').css('border'));

	//disable button when page is loaded, if input val() length === 0 then disable button
	$('#inputVal').css('visibility', 'hidden');
	$('#alert-submit').attr('disabled',true);
	$('#sometext').keyup(function(){
			if($(this).val().length != 0)
					$('#alert-submit').attr('disabled', false);            
			else
					$('#alert-submit').attr('disabled',true);
	});

	//click function to alert the val of input
	$('#alert-submit').click(function() {
	alert('Value: ' + $('#sometext').val());
	$('#inputVal').css('visibility', 'visible');
	$('#inputVal').text($('#sometext').val())
	});

	//adding classes 
	$('#addClass-submit').click(function() {
		$('img').addClass('styleclass');
	});

	//remove class
	$('#removeClass-submit').click(function() {
		$('img').removeClass('styleclass')
	})

	//toggle class
	$('#toggleClass-submit').click(function() {
		$('img').toggleClass('styleclass')
	})


});