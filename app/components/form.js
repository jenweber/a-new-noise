import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FormComponent extends Component {
  @service formData;
  @service router;

  @action submit() {
    this.router.transitionTo('/');
  }

  @action autofill() {
    this.formData.autofill();
  }
}
