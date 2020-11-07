// app/routes/bands.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsRoute extends Route {
  @service catalog;
  model() {
    return [
      { name: 'Led Zeppelin' },
      { name: 'Pearl Jame' },
      { name: 'Foo Fighters' },
    ]
  //  return this.catalog.fetchAll('bands');
  }
}