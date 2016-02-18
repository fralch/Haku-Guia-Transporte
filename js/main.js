$(document).ready(mifuncion);

function mifuncion () {

	$("#agregar").click(function () {
		//document.getElementById('ultimo').innerHTML='test';
		$('#ultimo').append("<p>Ingresar Latitud y Longitud</p>"+"<input type='text'>");
	});
}