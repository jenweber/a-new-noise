import EmberRouter from '@ember/routing/router';
import config from 'a-new-noise/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('setup');
  this.route('story');
  this.route('about');
  this.route('photo-booth');
});
