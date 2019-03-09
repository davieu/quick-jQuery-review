$(document).ready(function() {

	//short for $(document).ready(function(){})
	/*
	$(function() {
		$('#drag').draggable();
	});
	*/

	let design = {
		color: 'blue',
		background: 'green',
		border: '3px solid black'
	};

	let imgSize = {
		width: '200',
		height: '200'
	};

	//change css styling or return properties
	$('a').css('color', 'red');
	$('h1').css('background', 'blue');
	console.log($('h1').css('background'));
	$('h1').css(design);
	$('.pets').css(imgSize);
	// $('.puppers').css('float', 'left');

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
	$('.pets').attr('border', '5px solid black');
	console.log($('.pets').attr('border'));
	console.log($('.pets').css('border'));

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
		$('.pets').addClass('styleclass');
	});

	//remove class
	$('#removeClass-submit').click(function() {
		$('.pets').removeClass('styleclass')
	})

	//toggle class
	$('#toggleClass-submit').click(function() {
		$('.pets').toggleClass('styleclass')
	})

	//hides the specific image you click on with 'this'
	$('.pets').click(function() {
		$(this).hide();
	})

	//just toggles the imgages. hide/show
	$('#reset-img-btn').click(function() {
		$('.pets').toggle();
	})

	//testing keyup for dynamic DOM
	$('#press').keyup(function(){
		if($(this).val().length != 0) {
			$('#typing1').hide();  
		}	else
		$('#typing1').show();
	});

	//on() off()
	//keypress() keydown() keyup()
	$('#press2').on('keypress', function() {
		$('#typing2').hide();
	});

	//fadeOut() fadeIn() fadeToggle()
	$('#fadeOut-btn').click(function() {
		$('.img1').fadeOut('slow');
		$('.img2').fadeOut('fast');
		$('.img3').fadeOut('slow');
	})

	$('#fadeIn-btn').click(function() {
		$('.img1').fadeIn('slow');
		$('.img3').fadeIn('slow');
		$('.img2').fadeIn('fast');
	})

	$('.fadeIn-colors-btn').click(function() {
		$('#one').fadeIn();
		$('#two').fadeIn('slow');
		$('#three').fadeIn(3000);
	})

	$('.fadeOut-colors-btn').click(function() {
		$('#one').fadeOut();
		$('#two').fadeOut('slow');
		$('#three').fadeOut(3000);
	});

	//slideUp() slideDown() slideToggle()
	$('#slideUp-btn').on('click', function() {
		$('#div1').slideUp('slow');
	});
	$('#slideDown-btn').on('click', function() {
		$('#div1').slideDown('slow');
	});
	$('#slideToggle-btn').on('click', function() {
		$('#div1').slideToggle('slow');
	});

	//draggable() droppable()
	$(function() {
		$('#drag').draggable();
		$('#drop').droppable();
	});
	

	$(function() {
		$('#drag-img').draggable();
	});

	//datepicker()
	$('#date').datepicker()

});