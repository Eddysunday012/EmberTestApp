import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {
  @action
  updateSearch(event) {
    this.args.searchQuery = event.target.value;
  }
}
