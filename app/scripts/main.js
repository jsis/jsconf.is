import 'babel-polyfill';
import 'hammer-timejs';
import './modules/router';
import './modules/no-scroll';
import Modal from './modules/modal';
import styles from './data/gmaps-styles';

window.initMap = () => {
  const venueLocation = { lat: 64.1503366, lng: -21.9348961 };
  const marinaLocation = { lat: 64.150949, lng: -21.945676 };

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

  const pinImage = new window.google.maps.MarkerImage('/images/pin.png',
    new window.google.maps.Size(21, 34),
    new window.google.maps.Point(0, 0),
    new window.google.maps.Point(10, 34),
  );
  const pinShadow = new window.google.maps.MarkerImage('/images/pin-shadow.png',
    new window.google.maps.Size(40, 37),
    new window.google.maps.Point(0, 0),
    new window.google.maps.Point(12, 35),
  );

  const venueInfo = new window.google.maps.InfoWindow({
    content: `<h3 class="class="firstHeading">Harpa</h3><div id="bodyContent">Austurbakki 2, 101 Reykjavík, Iceland</div>`,
  });
  const venueMarker = new window.google.maps.Marker({
    position: venueLocation,
    title: 'Harpa',
    map,
    icon: pinImage,
    shadow: pinShadow,
  });
  venueMarker.addListener('click', () => {
    venueInfo.open(map, venueMarker);
  });

  const marinaInfo = new window.google.maps.InfoWindow({
    content: `<h3 class="class="firstHeading">Hotel Reykjavik Marina</h3><div id="bodyContent">Mýrargata 2, 101 Reykjavík, Iceland</div>`,
  });
  const marinaMarker = new window.google.maps.Marker({
    position: marinaLocation,
    title: 'Icelandair Hotel Reykjavik Marina',
    map,
    icon: pinImage,
    shadow: pinShadow,
  });
  marinaMarker.addListener('click', () => {
    marinaInfo.open(map, marinaMarker);
  });

  window.addEventListener('resize', () => {
    map.setCenter(venueLocation);
  });

  return { map, venueMarker };
};

// Finished loading
const html = document.documentElement;
html.className = html.className.replace(/\bis-loading\b/, '');

// Initiate Speaker Modal
const speakerModal = new Modal(document.body.querySelector(Modal.selectors.base));
const speakers = document.body.querySelector('[data-speakers]');

speakers.addEventListener('click', event => {
  const speaker = event.target;

  if (!speaker || !speaker.matches('[data-speaker]')) {
    return;
  }

  speakerModal.open({ content: JSON.parse(speaker.getAttribute('data-speaker')) });
});
