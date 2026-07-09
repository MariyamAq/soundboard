const soundFiles = [
"sounds/mixkit-tick-tock-clock-timer-1045.wav",
"sounds/mixkit-keyboard-typing-1386.wav",
"sounds/mixkit-air-whoosh-1489.wav",
"sounds/mixkit-cartoon-toy-whistle-616.wav",
"sounds/mixkit-small-group-cheer-and-applause-518.wav",
"sounds/mixkit-retro-game-emergency-alarm-1000.wav",
"sounds/mixkit-game-show-suspense-waiting-667.wav",
"sounds/mixkit-classic-alarm-995.wav",
"sounds/mixkit-fast-rocket-whoosh-1714.wav",
"sounds/mixkit-fast-small-sweep-transition-166.wav",
"sounds/mixkit-arcade-retro-game-over-213.wav",
"sounds/mixkit-crickets-and-insects-in-the-wild-ambience-39.wav"
];

const buttons = document.querySelectorAll(".sound-btn");
const volumeSlider = document.getElementById("volumeSlider");
const stopButton = document.getElementById("stopAll");

const audios = soundFiles.map(file => new Audio(file));

let volume = volumeSlider.value / 100;

audios.forEach(audio => audio.volume = volume);

buttons.forEach((button,index)=>{

button.addEventListener("click",()=>{

audios.forEach(audio=>{
audio.pause();
audio.currentTime=0;
});

buttons.forEach(btn=>btn.classList.remove("playing"));

audios[index].volume=volume;

audios[index].play();

button.classList.add("playing");

audios[index].onended=()=>{

button.classList.remove("playing");

};

});

});

volumeSlider.addEventListener("input",()=>{

volume=volumeSlider.value/100;

audios.forEach(audio=>audio.volume=volume);

});

stopButton.addEventListener("click",()=>{

audios.forEach(audio=>{

audio.pause();

audio.currentTime=0;

});

buttons.forEach(btn=>btn.classList.remove("playing"));

});

const keys=[
"1","2","3","4","5","6",
"7","8","9","q","w","e"
];

document.addEventListener("keydown",(event)=>{

const key=event.key.toLowerCase();

const index=keys.indexOf(key);

if(index!==-1){

buttons[index].click();

}

});
