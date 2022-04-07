import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class StoryReaderComponent extends Component {
  @service formData;
  @service narrator;
  @service camera;

  @action play() {
    const text = document.querySelector('#story').innerText;
    this.narrator.narrate(text);
  }

  @action pause() {
    this.narrator.pause();
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
