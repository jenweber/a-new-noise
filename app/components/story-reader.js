import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

const key = '';

// https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript

var textToSpeech = function (state) {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`;
  const data = {
    input: {
      text: document.querySelector('#story').innerText,
    },
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

  const otherparam = {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
    method: 'POST',
  };
  fetch(url, otherparam)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res.audioContent);
      var audioElement = new Audio('data:audio/mp3;base64,' + res.audioContent);
      audioElement.play();
    })
    .catch((error) => {
      console.log(error);
      state.onError(error);
    });
};

export default class StoryReaderComponent extends Component {
  @service formData;

  @action play() {
    textToSpeech();
  }
}
