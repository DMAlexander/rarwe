import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { dasherize } from '@ember/string';
import { Band } from 'rarwe/routes/bands';


export default class BandsNewController extends Controller {
    @service catalog;
    @service router;

    @action
    saveBand() {
        debugger;
        new Band({ name: this.name, slug: dasherize(this.name) })
//        let band = await this.catalog.create('band', { name: this.name });
//        this.router.transitionTo('bands.band.songs', band.id);
    }
}
