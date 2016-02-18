$(document).ready(function() {
	$.getJSON('coordenadas.json', function (datos) {
		var  coord = datos.longitud;
		console.log(coord);
	});


 });


