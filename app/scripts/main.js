
import router from './modules/router';

var routes = [...document.querySelectorAll('[route]')];
routes.forEach((route) => {
  route.addEventListener('click', () => {
    router.navigate(route.getAttribute('route'));
  });
});
