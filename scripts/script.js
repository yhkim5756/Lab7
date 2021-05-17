// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
      });
    });
});

window.onpopstate = function(event){
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
  if (event.state.page == 1){
    router.setState("setting");
  } else if (event.state.page == 2){
    router.setState("entry");
  } else{
    router.setState("default"); 
  }
};

document.querySelector("img[src='settings.svg']").addEventListener('click', () => {
  router.setState("setting");
});


const articles = Array.from(this.shadowRoot.querySelector(".entry"));

articles.forEach(article => {
  article.addEventListener('click', () => {
    alert("HA");
    router.setState("entry");
  });
});



