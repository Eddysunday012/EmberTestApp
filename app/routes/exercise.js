import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExerciseRoute extends Route {
  @service api;

  model(params) {
    const { exercise_id } = params;
    const exercise = this.api.getExerciseById(exercise_id);
    return exercise;
  }
}
