/*document.querySelector("#Year").innerHTML=document.lastModified;
document.querySelector('#lastmod').textContent = document.lastModified;*/

/*const todaysDate = new Date();
document.querySelector(`#idName`).textContent = `${todaysDate.getFullYear()}`;*/
const dayNames = [
	`Sunday`,
	`Monday`,
	`Tuesday`,
	`Wednesday`,
	`Thursday`,
	`Friday`,
	`Saturday`
  ]
  
  const monthNames = [
	`January`,
	`February`,
	`March`,
	`April`,
	`May`,
	`June`,
	`July`,
	`August`,
	`September`,
	`October`,
	`November`,
	`December`
  ]
  
  const todaysDate = new Date();
  const dayName = dayNames[todaysDate.getDay()];
  const monthName = monthNames[todaysDate.getMonth()];
  const currentDate = `${dayName}, ${todaysDate.getDate()} ${monthName}, ${todaysDate.getFullYear()}`;
  
  document.getElementById(`currentDate`).textContent = currentDate;
  document.querySelector(`#rigthsYear`).textContent = `${todaysDate.getFullYear()}, `;
  document.getElementById(`modifiedTime`).textContent = `${document.lastModified}`;