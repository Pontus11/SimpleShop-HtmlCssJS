/**
 * Created by pontu on 2019-01-05.
 */

/*
Javascript file for the functionality of the about pages.
Takes care of displaying the google map and setting the map location to the users current location.
 */
var map;
$(document).ready(function( ) {
  var mapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  map = new google.maps.Map($("#map")[0], mapOptions);
  navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true, timeout: 10000, maximumAge: 60000});

});

function success(position) {
  var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  map.setCenter(location);
}

function error(e) {
  if(e.code == 1) {
    alert("Location access denied.")
  }
  else if(e.code == 2) {
    alert("Network or positioning service error.")
  }
  else if(e.code == 3) {
    alert("Attempt timed out.")
  }
  else {
    alert("Unknown error.")
  }
}
