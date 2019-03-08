//change css styling
$('a').css('color', 'red')
$('h1').css('background', 'blue')
//add content before or after a selector
$('ul').before('<h2>My favorite dogs!</h2>')
$('ul').after('<h2>Are adorable</h2>')
//.text grabs the value of the selector
console.log($('li').text());
console.log($('li:first').text());
//change text of p tag
$('p').text('Welcome to this jQuery crash course')