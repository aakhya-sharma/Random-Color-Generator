let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click', () => {
    // Generating random numbers between the range 0 to 255, both inclusive
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Verifying
    console.log(red, green, blue);

    // Manipulating DOM elements
    h2.innerText = `rgb(${red}, ${green}, ${blue})`;
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})