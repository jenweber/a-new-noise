import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormDataService extends Service {
  @tracked name = '';
  @tracked soundA = '';
  @tracked vehicle = '';
  @tracked animal = '';
  @tracked soundB = '';
  @tracked nonsenseA = '';
  @tracked nonsenseB = '';
  @tracked verb = '';
  @tracked noun = '';

  autofill() {
    this.name = 'Jen Weber';
    this.soundA = 'vroom';
    this.vehicle = 'Toyota Prius';
    this.animal = 'Rhea the Cat';
    this.soundB = 'rattle';
    this.nonsenseA = 'lalalala';
    this.nonsenseB = 'choochoo';
    this.verb = 'eat';
    this.noun = 'piano';
  }
}
