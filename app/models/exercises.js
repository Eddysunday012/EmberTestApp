import Model, { attr } from '@ember-data/model';

export default class ExercisesModel extends Model {
  @attr('list') exercises;
}
