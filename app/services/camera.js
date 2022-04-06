import Service from '@ember/service';

const constraints = {
  audio: false,
  video: {
    width: 1280,
    height: 720,
  },
};

export default class CameraService extends Service {
  context;
  video;
  canvas;

  async initCamera(videoEl) {
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.handleSuccess(stream, videoEl);
    } catch (e) {
      console.log(e.toString());
    }
  }

  handleSuccess(stream, videoEl) {
    window.stream = stream;
    videoEl.srcObject = stream;
    this.video = videoEl;
  }

  savePhoto(canvas) {
    let context = canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 400, 250);
    const tracks = window.stream.getTracks();
    tracks[0].stop();
    this.context = context;
    this.canvas = canvas;
  }
}
