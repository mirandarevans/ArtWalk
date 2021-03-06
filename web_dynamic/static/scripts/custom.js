let gatherInput = function () {
  let params = {};
  params.origin = $('#origin').val();
  params.waypoints = $('#waypoints').val();
  return params;
};

let customRoute = function (directionsService, directionsDisplay) {
  $('#loader').css('display', 'block');
  $.ajax({
    url: 'http://127.0.0.1:5000/api/v1/customRoute',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(gatherInput()),
    dataType: 'json',
    headers: {'Content-Type': 'application/json'}
  }).done(function (data) { calculateAndDisplayRoute(directionsService, directionsDisplay, data); });
};
