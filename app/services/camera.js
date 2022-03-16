import Service from '@ember/service';

const constraints = { audio: false, video: true };

export default class CameraService extends Service {
  constructor() {
    super();
    console.log('GET MEDIA');
    this.getMedia();
  }

  getMedia() {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        /* use the stream */
      })
      .catch(function (err) {
        /* handle the error */
      });
  }
}
