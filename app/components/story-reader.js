import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';


var textToSpeech = function (state) {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`;
  const data = {
    input: {
      text: 'Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets.',
    },
    voice: {
      languageCode: 'en-gb',
      name: 'en-GB-Standard-A',
      ssmlGender: 'FEMALE',
    },
    audioConfig: {
      audioEncoding: 'MP3',
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
    })
    .catch((error) => {
      console.log(error);
      state.onError(error);
    });
};

export default class StoryReaderComponent extends Component {
  @service formData;

  @action play() {
    textToSpeech()
  }
}
