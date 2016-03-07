// JSON Data
video([
    {
      'id': 'vegas',
      'image': 'vegas.png',
      'locationName': 'Las Vegas',
      'description': 'Las Vegas, in Nevada\'s Mojave Desert, is a resort town famed for its buzzing energy, 24-hour casinos and endless entertainment options. Its focal point is the Strip, just over 4 miles long and lined with elaborate theme hotels such as the pyramid-shaped Luxor and the Venetian, complete with ...Canal; luxury resorts including the Bellagio, set behind iconic dancing fountains; and innumerable casinos.',
      'price': '56'
    },

    {
      'id': 'ny',
      'image': 'newyork.png',
      'locationName': 'New York',
      'description': 'Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance. The city’s 5 boroughs sit where the Hudson River meets the Atlantic Ocean, with the island borough of Manhattan at the “Big Apple\'s" core.',
      'price': '120'
      },

      {
        'id': 'la',
        'image': 'losangeles.png',
        'locationName': 'Los Angeles',
        'description': 'Los Angeles is a sprawling Southern California city famed as the center of the nation\'s film and television industry. Not far from its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theater displays celebrities\' hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars\' homes.',
        'price': '88'
      }


]);




// JSON Data function
function video(arr){
  var out = '';

  for(var i=0; i<arr.length; i++){
      out += '<div class="col-md-12" id="' + arr[i].id + '">';
      out += '<div class="col-md-1"></div>';
      out += '<div class="col-md-10 flight">';
      out += '<div class="col-md-3 flightImage"><img src="images/destinations/'+ arr[i].image +'"></div>';
      out += '<div class="col-md-6">';
      out += '<h4>' + arr[i].locationName + '</h4>';
      out += '<p>' + arr[i].description + '</p>';
      out += '</div>';
      out += '<div class="col-md-3">';
      out += '<div class="contain">';
      out += '<button class="text-center center-block">Let\'s Go!</button>';
      out += '<h5>$' + arr[i].price + '</h5>';
      out += '</div>';
      out += '<div class="col-md-1"></div>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
  }

  document.getElementById('flightsContainer').innerHTML = out;
}
