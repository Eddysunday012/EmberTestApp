import Component from '@glimmer/component';

export default class ExerciseImageComponent extends Component {
  imageMapper = {
    Strength: 'Barbells.jpg',
    Plyometrics: 'plyometrics.jpg',
    Cardio: 'cardio.jpg',
    Stretching: 'stretching.jpg',
    Powerlifting: 'powerlifting.jpg',
    Strongman: 'Strongman.jpg',
    'Olympic Weightlifting': 'OlympicWeightlifting.jpg',
  };

  get ExerciseImage() {
    return `/assets/img/${this.imageMapper[this.args.exercise.Type]}`;
  }
}
