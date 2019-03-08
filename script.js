$(document).ready(function() {

	let design = {
		color: 'blue',
		background: 'green',
		border: '3px solid black'
	}

	let imgSize = {
		width: '200',
		height: '200',
		display: 'block'
	}

	//change css styling or return properties
	$('a').css('color', 'red')
	$('h1').css('background', 'blue')
	console.log($('h1').css('background'))
	$('h1').css(design)
	$('img').css(imgSize)
	$('.puppers').css('float', 'left')

	//add content before or after a selector
	$('ul').before('<h2>My favorite dogs!</h2>')
	$('ul').after('<h2>Are adorable</h2>')

	// text() method used to set or return content of the selected element
	//.text grabs the value of the selector
	console.log($('li').text());
	console.log($('li:first').text());
	//change text of p tag
	$('p').text('Welcome to this jQuery crash course')
	$('li:first').text('Weiner Dog')

	// html() method used to set or return html content of the selected element
	console.log($('li:last').html())
	console.log($('ul').html())
	$('li:last').html('Corgi')

	//attr() method
	$('img').attr('border', '5px solid black')
	console.log($('img').attr('border'))
	console.log($('img').css('border'))

	//val() method returns the value
	//click() function
	// $('#sometext').val('yo')
	// console.log($('#sometext').val())

	$('#inputVal').css('visibility', 'hidden')
	$('button').attr('disabled',true);
	$('#sometext').keyup(function(){
			if($(this).val().length !=0)
					$('button').attr('disabled', false);            
			else
					$('button').attr('disabled',true);
	})

	$('button').click(function() {
	// alert('Value: ' + $('#sometext').val())
	$('#inputVal').css('visibility', 'visible')
	$('#inputVal').text($('#sometext').val())
	})


	// let inputVal = $('#sometext').val()
	// $('#sometext').keyup(function() {
	// 	let empty = false
	// 	$('#somtext').each(function() {
	// 		if ($(this).val().length == 0) {
	// 			empty = true;
	// 		}
	// 	})
	// 	if (empty) {
	// 		$('.actions input').attr('disabled', 'disabled');
	// 	} else {
	// 		$('.actions input').removeAttr('disabled');
	// 		console.log('VAL: ', $('#sometext').val().length)
	// 		alert('Value: ' + $('#sometext').val())
	// 	}
	// })

	// console.log(inputVal.length)
	// if (inputVal.length < 1) {
	// 	console.log('nope')
	// } else if (inputVal.length > 2) {
	// 	$('button').click(function() {
	// 		// alert('Value: ' + $('#sometext').val())
	// 		// $('img').css('border', '5px dashed black')
	// 		console.log('VAL: ', $('#sometext').val().length)
	// 	})
	// }
	

})