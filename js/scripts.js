mapboxgl.accessToken= 'pk.eyJ1IjoiYWt3YXNpMzAiLCJhIjoiY2t6aG5wN2Q1NDNndTJvcDQ0ZzBkbzQyOSJ9.Om7ek_mM4fe3ClIt_IrOIw'

// lngLat New York University
var nyu = [-73.997453,40.730842]

var map = new mapboxgl.Map({
  container:'mapContainer', // HTML container id
  style:'mapbox://styles/mapbox/dark-v9', // style URL
  center: nyu, //starting position as [lng, lat]
  zoom: 9,
  minzoom: 7,
  maxzoom: 14

});

var popup = new mapboxgl.Popup({
  offset:10,
})
   .setHTML('<h3>New York University</h3>');

// add a marker for the New York University
var marker = new mapboxgl.Marker({
  color:'purple'
})
.setLngLat (nyu)
.setPopup(popup)
.addTo(map);


var pointsOfInterest= [
{
lnglat: [-74.3488255519917,40.6601743341045],
popupHtml: 'Westfiled Trader Joes',
subText: '155 Elm St, Westfield, NJ 07090,'
},
{
lnglat: [-74.0301636910109,40.780997463518],
popupHtml: 'Hoboken Trader Joes',
subText:'1350 Willow Ave, Hoboken, NJ 07030'
},
{
lnglat: [-74.3879684404156,40.8164249735125],
popupHtml: 'Florharm  Park Trader Joes',
subText:'176 Columbia Turnpike, Florham Park, NJ 07932'
},
{
lnglat: [-74.664798062094,40.3184023735658],
popupHtml: 'Princeton Trader Joes',
subText:'3528 Brunswick Pike, Princeton, NJ 08540'
},
{
lnglat: [-74.2915283036735,40.740775917977],
popupHtml: 'Milburn Trader Joes',
subText:'187 Millburn Ave, Millburn, NJ 07041'
},
{
lnglat: [-74.4526942028119,40.4812181440146],
popupHtml: 'North Brunswick Trader Joes',
subText:'869 US-1, North Brunswick Township, NJ 08902'
},

{
lnglat: [-74.5569822635288,40.5659682728994],
popupHtml: 'Bridgewater Trader Joes',
subText:'315 Promenade Blvd, Bridgewater Township, NJ 08807'
},
{
lnglat: [-74.1485936652491,40.8522679066134],
popupHtml: 'Clifton Trader Joes',
subText:' 259 Allwood Rd, Clifton, NJ 07012'
},
]

pointsOfInterest.forEach(function(pointOfInterest) {
var popup = new mapboxgl.Popup({offset:40 })
 .setHTML(`
   <h3>${pointOfInterest.popupHtml}</h3>
   <p>${pointOfInterest.subText}</p>
  `);
new mapboxgl.Marker({
color:'yellow'
})
  .setLngLat(pointOfInterest.lnglat)
  .setPopup(popup)
  .addTo(map);
})
