import Service from '@ember/service';

const key = '';

// https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript

const fetchNarration = function (text) {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`;
  const data = {
    input: { text },
    voice: {
      languageCode: 'en-us',
      name: 'en-US-Standard-I', // en-US-Wavenet-I
    },
    audioConfig: {
      audioEncoding: 'MP3',
      pitch: 2,
      speakingRate: 0.93,
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
      var audioElement = new Audio('data:audio/mp3;base64,' + res.audioContent);
      audioElement.play();
      Promise.resolve(audioElement);
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
