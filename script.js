
const change = document.getElementById('bulb');

turnOnBtn.addEventListener('click', turnOn);
turnOffBtn.addEventListener('click', turnOff);

function turnOn(event){
    change.src = "/bulb-on.jpg";
}
function turnOff(event){
    change.src = "/bulb-off.jpg";
}