import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const imageCapture = () => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const snap = document.getElementById('snap');
  let stream;

  const constraints = {
    audio: false,
    video: {
      width: 1280,
      height: 720,
    },
  };

  // Access webcam
  async function init() {
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {
      console.log(e.toString());
    }
  }

  // Success
  function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
  }

  // Load init
  init();

  // Draw image
  var context = canvas.getContext('2d');
  snap.addEventListener('click', function () {
    context.drawImage(video, 0, 0, 400, 250);
    const tracks = window.stream.getTracks();

    tracks[0].stop();
  });
};

export default class SelfieComponent extends Component {
  @service camera;

  constructor() {
    super(...arguments);
    // this.camera;
    // imageCapture();
  }

  initCamera() {
    imageCapture();
  }
}
