import Component from '@glimmer/component';

export default class ExerciseInfoComponent extends Component {
  colorMapper = {
    Beginner: 'bg-green-900 text-green-300',
    Intermediate: 'bg-yellow-900 text-yellow-300',
    Expert: 'bg-red-900 text-red-300',
    Strength: 'bg-blue-900 text-blue-300',
    Plyometrics: 'bg-purple-900 text-purple-300',
    Cardio: 'bg-green-900 text-green-300',
    Stretching: 'bg-yellow-900 text-yellow-300',
    Powerlifting: 'bg-red-900 text-red-300',
    Strongman: 'bg-orange-900 text-orange-300',
    'Olympic Weightlifting': 'bg-pink-900 text-pink-300',
  };

  get levelColor() {
    const level = this.args.exercise.Level;
    return this.colorMapper[level];
  }

  get bodyPartColor() {
    return 'bg-gray-700 text-gray-300';
  }

  get typeColor() {
    const type = this.args.exercise.Type;
    return this.colorMapper[type];
  }
}
