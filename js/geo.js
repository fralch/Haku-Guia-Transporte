function iniciando_mapa () {

	var coordenadas={lat: 0, lon:0};

	if (navigator.geolocation) {
		getCurrentPosition(milocalizacion, errores);
	}else{
		alert("no se puede")
	};
	function milocalizacion (posicion) {
		coordenadas={
			lat:posicion.coords.latitude,
			lon: posicion.coords.longitude
		}

		var opcionesmapa{
			zoom:16,
			center: new google.maps.LatLng(coordenadas.Lat, coordenadas.Lng),
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP

		}
		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
			


	}
}