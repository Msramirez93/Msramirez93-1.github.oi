let temp = 47;
let speed = 5.2;
let none = 'N/A';

document.querySelector('.temperature').textContent = ` ${temp} ${'°F'}`;
document.querySelector('.speed').textContent = ` ${speed} ${'mph'}`;

if (temp <= 50 && speed >= 3.0) {
    let f = (35.74 + (0.6215 * temp)) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * (temp * (Math.pow(speed, 0.16))));
    let result = f.toFixed(2);
    document.querySelector('.wChill').textContent = ` ${result} ${'°F'}`;
} else {
    document.querySelector('.wChill').textContent = none;
}