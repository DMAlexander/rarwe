// app/routes/bands.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

/* Need to run with special proxy command (see tutorial) */
export default class BandsRoute extends Route {
  @service catalog;
  async model() {
    return this.catalog.fetchAll('bands');
  }
}