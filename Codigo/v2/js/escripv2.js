navigator.geolocation.getCurrentPosition(fn_ok, fn_error);

var divmapa = document.getElementById("mapa");

function fn_error() {
	alert("algo malo paso ")
}

function fn_ok(respuesta) {
	//obteniendo coordenadas y guardandolas en variables
	var lat = respuesta.coords.latitude;
	var lon = respuesta.coords.longitude;

	var gLatLong = new google.maps.LatLng(lat, lon);//juntando lat y long

	objConfig = {
		zoom: 17,
		center: gLatLong
	};

	var mapita = new google.maps.Map(document.getElementById("mapa"), objConfig);// creando el objeto mapita de la clase de google

	var objConfigMarker1 = {//opciones del marcador 1
		position: gLatLong,
		map:mapita
	};
	var marcador_origen = new  google.maps.Marker(objConfigMarker1);//creando objeto marcador de la clase de google


	var objConfigMarker2 ={
		position: {lat: -12.04716391733084, lng: -75.19914149944458},
		map: mapita
	};

	var marcador_destino = new google.maps.Marker(objConfigMarker2);

	var objIW_HTML= { //creando la ventanita que saldra al hacerle click
		content: '<div style="height:150px; width: 300px;"><h3>Tu estas Aqui</h3></div>'
	};
	var gIW = new google.maps.InfoWindow(objIW_HTML);//creando el objeto infowindows de la clase de google

	google.maps.event.addListener(marcador_origen,'click', function() {
		gIW.open(mapita, marcador_origen); //agregardo un escuchador de eventos que abrila el objeto de la ifwindows y lo pone en el mapa
	});

	//INCIO CREANDO RUTAS
	var obConfigDR={ //Crando el objeto de configuracion para el renderizado
		map: mapita,
		suppressMarkers: true

	};

	var obConfigDS={
		origin: gLatLong,
		destination: {lat: -12.04716391733084, lng: -75.19914149944458} ,
		travelMode: google.maps.TravelMode.WALKING
	};

	var ds = new google.maps.DirectionsService(); // obtener coordenadas
	var dr = new google.maps.DirectionsRenderer(obConfigDR);//traduce la coordenada en una ruta


	ds.route(obConfigDS, fn_rutear);

	function fn_rutear (resultados, status) {
		if (status == 'OK') {
			 dr.setDirections(resultados);
		}else{
			alert("Error"+status)
		}
	}
//FIN CREANDO RUTAS


	google.maps.event.addListener(mapita, 'click', mifuncion);

	function mifuncion(event) {
		latdestino = event.latLng.lat();
	    londestino = event.latLng.lng();
	    destinofinal= new google.maps.LatLng(latdestino, londestino);
	    console.log( "ESTE ES TU PUNTO DE DESTINO \n"+latdestino + ', ' + londestino );
	}

}






/*function mostrar_objeto(obj) {
	for (var prop in obj) {
		document.write(prop+' : '+ obj[prop]+'<br/>' );
	}
}*/