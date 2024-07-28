import Service from '@ember/service';
import { exercises } from '../data/exercises';

export default class ApiService extends Service {
  getExercises(BodyPart = null, Equipment = null, Level = null, Type = null) {
    let exerciseList = exercises;
    exerciseList = exerciseList.sort((a, b) => a.Title.localeCompare(b.Title));
    return exerciseList.filter((value) => {
      return (
        (!BodyPart || BodyPart == value.BodyPart) &&
        (!Equipment || Equipment == value.Equipment) &&
        (!Level || Level == value.Level) &&
        (!Type || Type == value.Type)
      );
    });
  }
}
