const clockBoxHours = document.querySelector('.clockBox__hours');
const clockBoxMinutes = document.querySelector('.clockBox__minute');
const clockBoxSeconds = document.querySelector('.clockBox__second');

const boxTimeHours = document.querySelector(".box_time__hours")
const boxTimeMinute = document.querySelector(".box_time__minute")
const boxTimeSecond = document.querySelector(".box_time__second")

//  xử lí sự kiện laod 
const loader = document.querySelector('.container-loader');
window.onload = () => {
    loader.style.display = 'none';
    document.querySelector('.clock-container').style.display = 'flex';
}
// xử lí đồng hồ 
const audio = document.querySelector('audio');
audio.loop = true;
const audioOpen = document.querySelector('.clock-container');
audioOpen.onclick = () => {
    audioOpen.classList.toggle('audioOpen');
    if (audioOpen.classList.contains('audioOpen'))
        audio.play();
    else
        audio.pause();
}

setInterval(() => {
    let date = new Date();
    let seconds, minutes, hours;
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();
    clockBoxSeconds.style = 'transform: translate(-50%, -50%) rotate(' + seconds * 6 + 'deg)';
    clockBoxMinutes.style = 'transform: translate(-50%, -50%) rotate(' + minutes * 6 + 'deg)';
    clockBoxHours.style = 'transform: translate(-50%, -50%) rotate(' + hours * 30 + 'deg)';

    boxTimeHours.innerHTML = hours < 10 ? `0${hours}` : hours
    boxTimeMinute.innerHTML = minutes < 10 ? `0${minutes}` : minutes
    boxTimeSecond.innerHTML = seconds < 10 ? `0${seconds}` : seconds
});