import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class SelfieComponent extends Component {
  @service camera;

  @action
  takeSnapshot() {
    this.camera.savePhoto(document.querySelector('#canvas'));
  }

  @action
  turnOnCamera() {
    this.camera.initCamera();
  }
}
