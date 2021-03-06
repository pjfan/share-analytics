import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('dashboards', {
        path: ""
    }, function() {
        this.route('dashboard', {
            path: ':dashboard'
        });
    });
});

export default Router;
