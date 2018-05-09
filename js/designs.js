// Select color input

var datColor = $('#colorPicker')
// Select size input
var datX = $('#inputWeight')
var datY = $('#inputHeight')
// When size is submitted by the user, call makeGrid()

function makeGrid() {
	var height, width, colors
	height = datY.val()
	width = datX.val()
	colors = datColor.val()
	console.log(height,'heihgt',width,'width',colors,'colors')
	//make table for grid
	//$('body').append('<table class=thegrid></table>')
	var i =0 
	while(i < height){
		$('#pixelCanvas').append('<tr class=rows> </tr>')
	i++
	}
	for(l= 0; l <width; l++){
		$('tr').append('<td class=' + l + '> </td>')
	}

// Your code goes here!

}
$('.subbed').click(function(event){
	$('.rows').remove()
	makeGrid()
	event.preventDefault();
})
	$('#pixelCanvas').on('click','td', function(){
	//var pixel = $('td').get(0)
	console.log(datColor.val(),'datColor',$('td').get(),'get0')
	$(this).css('background-color', datColor.val())
	
})