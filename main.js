const clockBoxHours = document.querySelector('.clockBox__hours');
const clockBoxMinutes = document.querySelector('.clockBox__minute');
const clockBoxSeconds = document.querySelector('.clockBox__second');

//  xử lí sự kiện laod 
const loader = document.querySelector('.container-loader');
window.onload = () => {
    loader.style.display = 'none';
    document.querySelector('.clock-container').style.display = 'flex';
}
// xử lí đồng hồ 
const audio = document.querySelector('audio');
const audioOpen = document.querySelector('.clock-container');
audioOpen.onclick = ()=> {
    audioOpen.classList.toggle('audioOpen');
    if(audioOpen.classList.contains('audioOpen')) 
        audio.play();
    else 
        audio.pause();
}

let date = new Date();
let seconds, minutes, hours;
seconds = date.getSeconds();
minutes = date.getMinutes();
hours = date.getHours();
clockBoxSeconds.style = 'transform: translate(-50%, -50%) rotate(' + seconds * 6 + 'deg)';
clockBoxMinutes.style = 'transform: translate(-50%, -50%) rotate(' + minutes * 6 + 'deg)';
clockBoxHours.style = 'transform: translate(-50%, -50%) rotate(' + hours * 30 + 'deg)';
setInterval(() => {
    if (seconds === 59) {
        seconds = 0;
        minutes ++;
        clockBoxMinutes.style = 'transform: translate(-50%, -50%) rotate(' + minutes * 6 + 'deg)';
    }
    else
        seconds++;
    if (minutes === 60 ) {
        minutes = 0;
        hours ++;
        clockBoxHours.style = 'transform: translate(-50%, -50%) rotate(' + hours * 30 + 'deg)';
    }
    if (hours === 60) {
        hours = 0;
    }
    clockBoxSeconds.style = 'transform: translate(-50%, -50%) rotate(' + seconds * 6 + 'deg)';
    // console.log(new Date().getHours() +' '+ new Date().getMinutes() +' '+ new Date().getSeconds());
}, 1000);