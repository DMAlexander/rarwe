// app/routes/bands/band/songs.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandSongsRoute extends Route {
  @service catalog;

  async model() {
    let band = this.modelFor('bands.band');
    return band.songs;
//    await this.catalog.fetchRelated(band, 'songs');
//    return band;
  }

  /*
  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
  */
}