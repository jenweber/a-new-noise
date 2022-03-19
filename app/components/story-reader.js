import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class StoryReaderComponent extends Component {
  @service formData;

  @action play() {
    // https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-web-speech-api
    async function speak() {
      await initVoices();
      const text = document.querySelector('#story').innerText;
      const msg = new SpeechSynthesisUtterance(text);
      // 1, 10, 11, 33
      msg.voice = speechSynthesis.getVoices()[50];
      msg.rate = 0.9;
      speechSynthesis.speak(msg);
    }

    function initVoices() {
      return new Promise(function (res, rej) {
        speechSynthesis.getVoices();
        if (window.speechSynthesis.onvoiceschanged) {
          res();
        } else {
          window.speechSynthesis.onvoiceschanged = () => res();
        }
      });
    }
    speak();
  }
}
