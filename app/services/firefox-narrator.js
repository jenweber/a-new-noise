import Service from '@ember/service';

export default class FirefoxNarratorService extends Service {
  narrate(text) {
    // https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-web-speech-api
    async function speak() {
      const msg = new SpeechSynthesisUtterance(text);
      console.log(speechSynthesis.getVoices());
      // msg.voice = speechSynthesis.getVoices()[50]; // best chrome
      msg.voice = speechSynthesis.getVoices()[7]; // best firefox
      msg.rate = 0.9;
      msg.pitch = 1.2;
      speechSynthesis.speak(msg);
    }
    speak();
  }

  pause() {
    window.speechSynthesis.pause();
  }

  resume() {
    window.speechSynthesis.resume();
  }
}
