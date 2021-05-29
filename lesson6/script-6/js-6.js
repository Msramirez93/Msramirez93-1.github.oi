function toggleMenu() {
    // console.log(document.getElementById("primaryNav").class);
    document.getElementById("primaryNav").classList.toggle("hide");
}
document.querySelector('#lastmod').textContent = document.lastModified;
// for current date in the footer
/*const yearElement = document.querySelector("#date");*/
/*yearElement.innerText = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });*/


// for the banner
const banner = document.querySelector('.banner');
const dayOfWeek = new Date().getDay();
if (dayOfWeek === 5) {
    banner.classList.add('visible');
}
 WebFont.load({google: {families: ['Acme']}});