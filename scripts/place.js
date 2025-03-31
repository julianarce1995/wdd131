const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.textContent = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
const nLastModif = document.lastModified;
lastModified.innerHTML = `last modified: ${nLastModif.toLocaleString()}`;

const temperature = 8;
const windSpeed = 6;

function calculateWindChill(temperature, windSpeed) {
    return (
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ); 
}

let windChillValue = "N/A";
if (
  (temperature <= 50 && windSpeed > 3) ||
  (temperature <= 10 && windSpeed > 4.8)
) {
  windChillValue =
    calculateWindChill(temperature, windSpeed).toFixed(1) + "°" + "F";
}

document.getElementById("windChill").textContent = windChillValue;