import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class SelfieComponent extends Component {
  @service camera;

  constructor() {
    super(...arguments);
    this.camera;
  }
}
