let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click', () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    console.log(red, green, blue);
    h2.innerText = `rgb(${red}, ${green}, ${blue})`;
    box.style.background = `rgb(${red}, ${green}, ${blue})`;
})