document.getElementById("display-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

function calcLength() {
  let metricToImperialResult =
    document.getElementById("display-el").value * 3.28;
  let imperialToMetricResult =
    document.getElementById("display-el").value / 3.28;
  lengthEl.innerText =
    document.getElementById("display-el").value +
    " " +
    "meters =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "feet" +
    " " +
    "|" +
    " " +
    document.getElementById("display-el").value +
    " " +
    "feet =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "meters";
}

calcLength();

function calcVolume() {
  let metricToImperialResult =
    document.getElementById("display-el").value * 0.264172;
  let imperialToMetricResult =
    document.getElementById("display-el").value / 0.264172;
  volumeEl.innerText =
    document.getElementById("display-el").value +
    " " +
    "liters =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "gallons" +
    " " +
    "|" +
    " " +
    document.getElementById("display-el").value +
    " " +
    "gallons =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "liters";
}

calcVolume();

function calcMass() {
  let metricToImperialResult =
    document.getElementById("display-el").value * 2.205;
  let imperialToMetricResult =
    document.getElementById("display-el").value / 2.205;
  massEl.innerText =
    document.getElementById("display-el").value +
    " " +
    "kilos =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "pounds" +
    " " +
    "|" +
    " " +
    document.getElementById("display-el").value +
    " " +
    "pounds =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "kilos";
}

calcMass();
