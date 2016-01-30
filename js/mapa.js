var lon;
var lati;

function loadlocation () {
  navigator.geolocation.getCurrentPosition(viewMap, viewError);
}

function viewMap (position) {

  var lati = position.coords.latitude;
  var lon = position.coords.longitude;

  alert(lon);
}

//--------------------------

function initMap() {
  var origen = {lat: -12.0684149, lng: -75.2199987};
  var destino = {lat: -12.0650444, lng: -75.2131115};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: origen,
    scrollwheel: false,
    zoom: 5
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: destino,
    origin: origen,
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}

