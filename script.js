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

// $().attr()

