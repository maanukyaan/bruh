const button = document.querySelector("button");
const gifContainer = document.querySelector(".gif__container");
const imageContainer = document.querySelector(".img__container");

button.addEventListener("click", function (e) {
  const sounds = [
    "audio/augh.mp3",
    "audio/bruh.mp3",
    "audio/fart.mp3",
    "audio/laugh.mp3",
    "audio/moan.mp3",
    "audio/ohio_alarm.mp3",
    "audio/ohio_collection.mp3",
    "audio/ohio_mashup.mp3",
    "audio/ohio_ringtone.mp3",
    "audio/ohio.mp3",
    "audio/omg.mp3",
    "audio/scream.mp3",
    "audio/shocked.mp3",
    "audio/strokin.mp3",
    "audio/travis.mp3",
    "audio/what_the_dog_doin.mp3",
    "audio/what_the_hell.mp3",
    "audio/yeet.mp3",
  ];
  const randomIndex = Math.floor(Math.random() * sounds.length);
//   gifContainer.querySelector("img").src = `gif/${randomIndex + 1}.gif`;
  const sound = new Howl({
    src: [sounds[randomIndex]],
    onend: () => {
      gifContainer.classList.remove("visible");
      imageContainer.classList.add("visible");
    },
  });
  sound.play();

  gifContainer.classList.add("visible");
  imageContainer.classList.remove("visible");
});
