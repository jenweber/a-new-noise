import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { guidFor } from '@ember/object/internals';

export default class FormComponent extends Component {
  @service formData;

  id = 'textInput-' + guidFor(this);
}
