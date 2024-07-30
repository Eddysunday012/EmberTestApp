import Model, { attr } from '@ember-data/model';

export default class ExercisesModel extends Model {
  @attr('string') Title;
  @attr('string') Desc;
  @attr('string') Type;
  @attr('string') BodyPart;
  @attr('string') Equipment;
  @attr('string') Level;
  @attr('number') Rating;
  @attr('string') RatingDesc;
}
