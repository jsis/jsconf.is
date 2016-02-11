import 'babel-polyfill';
import 'hammer-timejs';
import './modules/router';
import './modules/no-scroll';
import styles from './data/gmaps-styles';

window.initMap = () => {
  const venueLocation = { lat: 64.1503366, lng: -21.9348961 };

  const map = new window.google.maps.Map(document.querySelector('.google-maps'), {
    center: venueLocation,
    zoom: 14,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    disableDefaultUI: true,
    styles,
  });

  const info = new google.maps.InfoWindow({
    content: `<h3 class="class="firstHeading">Harpa</h3><div id="bodyContent">Austurbakki 2, 101 Reykjavík, Iceland</div>`
  });

  var pinColor = "B3008B";
  var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
    new google.maps.Size(21, 34),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34)
  );
  var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
    new google.maps.Size(40, 37),
    new google.maps.Point(0, 0),
    new google.maps.Point(12, 35)
  );
  const marker = new window.google.maps.Marker({
    position: venueLocation,
    title: 'Harp',
    map,
    icon: pinImage,
    shadow: pinShadow
  });

  marker.addListener('click', () => {
    info.open(map, marker);
  });

  window.addEventListener('resize', () => {
    map.setCenter(venueLocation);
  });

  return { map, marker };
};

// Finished loading
const html = document.documentElement;
html.className = html.className.replace(/\bis-loading\b/, '');
