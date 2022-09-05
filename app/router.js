import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('about');
  this.route('getting-in-touch');
  this.route('rentals', { path: '/rentals/:r_address' });
  this.route('error', { path: '/*' });
});
