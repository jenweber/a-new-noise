import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class SelfieComponent extends Component {
  @service camera;
  @tracked showVideo = true;

  @action
  takeSnapshot() {
    this.camera.savePhoto(document.querySelector('#canvas'));
    this.showVideo = false;
  }

  @action
  turnOnCamera() {
    this.showVideo = true;
    this.camera.initCamera(document.querySelector('#video'));
  }
}
