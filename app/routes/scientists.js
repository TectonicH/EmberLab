import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Cameron Sapp', 'Kristian Biviens', 'Anthony Sapp', 'Michael Lynch'];
  }
}
