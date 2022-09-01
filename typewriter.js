"use strict";
let text = document.getElementById("typewriter").textContent;
let counter = 0;
let key1 = document.querySelector("#typekey1");
let key2 = document.querySelector("#typekey2");

let spacebar = document.querySelector("#typespace");

// loop();

function loop() {
  if (counter < text.length) {
    counter += 1;
    // console.log(text.substring(counter, 0));
    document.querySelector(".typewritten").textContent = text.substring(counter, 0);

    if (text.substring(counter - 1, counter).includes(" ")) {
      //Plan space sound
      console.log("spacebar");
      spacebar.load();
      spacebar.play();
    } else {
      if (keySound() == 0) {
        console.log("key");
        key1.load();
        key1.play();
      } else {
        key2.load();
        key2.play();
        console.log("key2");
      }
    }

    setTimeout(loop, Math.floor(Math.random() * (400 - 50) + 50));
  } else {
    console.log("Iz done");
  }
}

function keySound() {
  let randomNumber = Math.floor(Math.random() * 2);
  return randomNumber;
}

// Math.floor(Math.random() * (400 - 50) + 50)
