const colorBtn = document.getElementById('color');
const placeBtn = document.getElementById('place');
const ritualBtn = document.getElementById('ritual');


const colorAlert = () => {
    alert("My favorite color is yellow! No... wait... it's green! No... No... lets just go with black.")
}
const placeAlert = () => {
    alert('My favorite place is Disneyland.')
}
const ritualAlert = () => {
    alert('My favorite ritual is seeing the latest MCU releases.')
}
colorBtn.addEventListener('click', colorAlert);
placeBtn.addEventListener('click', placeAlert);
ritualBtn.addEventListener('click', ritualAlert);

