import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class StoryReaderComponent extends Component {
  @service formData;

  @action play() {
    // https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-web-speech-api
    async function speak() {
      // await initVoices();
      const text = document.querySelector('#story').innerText;
      const msg = new SpeechSynthesisUtterance(text);
      // 1, 10, 11, 33
      console.log(speechSynthesis.getVoices())
      // msg.voice = speechSynthesis.getVoices()[50]; // best chrome
      msg.voice = speechSynthesis.getVoices()[33]; // best firefox
      msg.pitch = 1.2;
      msg.rate = 1;
      window.speechSynthesis.speak(msg);
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
