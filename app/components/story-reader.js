import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class StoryReaderComponent extends Component {
  @service formData;
  @service narrator;

  @action play() {
    const text = document.querySelector('#story').innerText;
    this.narrator.narrate(text);
  }
}
