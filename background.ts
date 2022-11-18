import browser from "webextension-polyfill";

browser.runtime.onMessage.addListener((msg) => {
  console.log('message received from content script: ', msg);
})
