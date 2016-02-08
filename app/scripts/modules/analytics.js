
window.GoogleAnalyticsObject = 'ga';
window.ga = () => {
  (window.ga.q = window.ga.q || []).push(arguments);
};
window.ga.l = 1 * new Date();

window.ga('create', 'UA-71097907-1', 'auto');
window.ga('send', 'pageview');

function analytics() {
  window.ga.apply(this, arguments);
}

analytics.logTime = function logtime(category, id) {
  if (window.hasOwnProperty('performance') && category !== undefined && id !== undefined) {
    this('send', 'timing', category, id, window.performance.now());
  }
};

analytics.logException = function logException(desc, fatal) {
  if (desc === undefined) { return; }
  this('send', 'exception', desc, !!fatal);
};

let flag = false;

analytics.logFirst = function logFirst(type) {
  if (flag) { return; }
  flag = true;
  analytics.logTime('First Interaction', type || 'unknown');
};

analytics.cleanUrl = function cleanUrl(url) {
  let divider;
  let clean = url;

  if (!clean) {
    return window.location.pathname.toString().toLowerCase();
  }

  if (clean.indexOf('localhost') > -1 || clean.indexOf('.is') > -1) {
    divider = clean.indexOf('localhost') > -1 ? 'localhost:3000' : '.is';
    clean = clean.split(divider);
    clean = clean[1] || clean[0];
  }
  if (clean.indexOf('#') > -1) {
    clean = clean.split('#');
    clean = clean[0];
  }
  if (clean.indexOf('?') > -1) {
    clean = clean.split('?');
    clean = clean[0];
  }
  return clean.toString().toLowerCase();
};

export default analytics;
