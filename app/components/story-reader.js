import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import keys from 'a-new-noise/utils/keys';
export default class StoryReaderComponent extends Component {
  @service formData;
  @service narrator;
  @service firefoxNarrator;
  @service camera;

  @action play() {
    const text = document.querySelector('#story').innerText;
    if (keys.voice === '') {
      this.firefoxNarrator.narrate(text);
    } else {
      this.narrator.narrate(text);
    }
  }

  @action pause() {
    if (keys.voice === '') {
      this.firefoxNarrator.pause();
    } else {
      this.narrator.pause();
    }
  }

  @action resume() {
    if (keys.voice === '') {
      this.firefoxNarrator.resume();
    } else {
      this.narrator.resume();
    }
  }

  @action renderCanvas(canvasEl) {
    let context = canvasEl.getContext('2d');
    context.drawImage(this.camera.video, 0, 0, 400, 250);
    let drawing = new Image();
    drawing.src = 'murphy-drawing.png';
    drawing.onload = function () {
      context.drawImage(drawing, 270, 70, 162, 236);
    };
  }
}
