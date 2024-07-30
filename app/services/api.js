import Service from '@ember/service';
import { exercises } from '../data/exercises';

export default class ApiService extends Service {
  getExercises(BodyPart = null, Equipment = null, Level = null, Type = null) {
    let exerciseList = exercises;
    exerciseList.forEach((value) => {
      value['id'] = value[''];
    });
    exerciseList = exerciseList.slice(0, 30);
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

  searchExercises(query) {
    let exerciseList = exercises;
    exerciseList.forEach((value) => {
      value['id'] = value[''];
    });
    return exerciseList
      .filter((value) => {
        return value.Title.toLowerCase().includes(query.toLowerCase());
      })
      .slice(0, 30);
  }

  getExerciseById(id) {
    return exercises.find((value) => value[''] == id);
  }
}
