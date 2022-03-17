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
  @tracked nonsenseC = '';
  @tracked nonsenseD = '';
}
