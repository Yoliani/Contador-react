if ('serviceWorker' in navigator) {
  //navigator.serviceWorker
  // console.log('Service Worker is supported');
  navigator.serviceWorker.register('./serviceWorker.js');
}
