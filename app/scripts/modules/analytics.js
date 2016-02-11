window.GoogleAnalyticsObject = 'ga';
window.ga = function ga_() {
  (window.ga.q = window.ga.q || []).push(arguments);
};
window.ga.l = 1 * new Date();

window.ga('create', 'UA-71097907-1', 'auto');
window.ga('send', 'pageview');

const analytics = function analytics_() {
  window.ga.apply(this, arguments);
};

analytics.logTime = function logTime_(category, id) {
  if (window.hasOwnProperty('performance') && category !== undefined && id !== undefined) {
    this('send', 'timing', category, id, window.performance.now());
  }
};

analytics.logException = function logException_(desc, fatal) {
  if (desc === undefined) { return; }
  this('send', 'exception', desc, !!fatal);
};

let flag = false;
analytics.logFirst = function logFirst_(type) {
  if (flag) { return; }
  flag = true;
  analytics.logTime('First Interaction', type || 'unknown');
};

analytics.cleanUrl = function cleanUrl_(dirtyUrl) {
  if (!dirtyUrl) {
    return window.location.pathname.toString().toLowerCase();
  }

  let url = dirtyUrl;

  if (url.indexOf('localhost') > -1 || url.indexOf('.is') > -1) {
    url = url.split(url.indexOf('localhost') > -1 ? 'localhost:3000' : '.is');
    url = url[1] || url[0];
  }

  if (url.indexOf('#') > -1) {
    url = url.split('#');
    url = url[0];
  }

  if (url.indexOf('?') > -1) {
    url = url.split('?');
    url = url[0];
  }
  return url.toString().toLowerCase();
};

export default analytics;
