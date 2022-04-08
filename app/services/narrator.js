import Service from '@ember/service';
import keys from 'a-new-noise/utils/keys';

const fetchNarration = function (text) {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${keys.voice}`;
  const data = {
    input: { text },
    voice: {
      languageCode: 'en-us',
      name: 'en-US-Standard-I', // en-US-Wavenet-I
    },
    audioConfig: {
      audioEncoding: 'MP3',
      pitch: 1.5,
      speakingRate: 0.95,
    },
  };

  const opts = {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
    method: 'POST',
  };

  return fetch(url, opts)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      let audioElement = new Audio('data:audio/mp3;base64,' + res.audioContent);
      audioElement.play();
      return audioElement;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default class NarratorService extends Service {
  audioElement;

  async narrate(text) {
    this.audioElement = await fetchNarration(text);
  }

  pause() {
    this.audioElement.pause();
  }

  resume() {
    this.audioElement.resume();
  }
}
