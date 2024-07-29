import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service api;
  @service store;

  async model() {
    const exercises = this.api.getExercises();
    await this.store.createRecord('exercises', exercises);
    return exercises;
  }

  async afterModel() {
    const val = this.store.findRecord('exercises', 'all');
    console.log(val);
  }
}
