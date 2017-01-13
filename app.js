/**
 * Created by sanjay on 2017-01-11.
 */

function playSound(e) {
    // console.log("audio[data-key=\"" + e.keyCode +"\"]");
    // console.log(document.querySelector("audio[data-key=\"" + e.keyCode +"\"]"));
    //above code can be written in ES6 as below
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);

    // const key = document.querySelector(`key[data-key="${e.keyCode}"]`);

    //following line looks very strange
    //audio is an object but when you write it as !audio it has a boolean value
    if (!audio) return; //stops the function from running

    //rewind and play every time key is pressed
    audio.currentTime = 0;
    audio.play();
    // console.log(key);

    //adding the transition effect to the key pressed
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName === "transform") {
        this.classList.remove("playing");
    }
    //Following code will do the same as above
    // if (e.propertyName !== "transform") return;
    //this.classList.remove("playing");
}

//now we need to remove the effect
const keys = document.querySelectorAll(".key");
// console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// keys.forEach(function (key) {
//     key.addEventListener("transitionend", removeTransition);
// });

window.addEventListener("keydown", playSound);
