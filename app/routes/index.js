import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { computed, action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service api;

  queryParams = {
    searchQuery: {
      refreshModel: true,
    },
  };

  model({ searchQuery }) {
    if (searchQuery) {
      return this.api.searchExercises(searchQuery);
    } else {
      return this.api.getExercises();
    }
  }
}
