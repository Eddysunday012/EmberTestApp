import Route from '@ember/routing/route';
import { exercises } from '../data/exercises';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service api;

  model() {
    const exercises = this.api.getExercises();
    return exercises;
  }
}
