let t = 47;
let s = 5.2;
let none = 'N/A';

document.querySelector('.temperature').textContent = ` ${t} ${'°F'}`;
document.querySelector('.speed').textContent = ` ${s} ${'mph'}`;

if (t <= 50 && s >= 3.0) {
    let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
    let result = f.toFixed(2);
    document.querySelector('.wChill').textContent = ` ${result} ${'°F'}`;
} else {
    document.querySelector('.wChill').textContent = none;
}