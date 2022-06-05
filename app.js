let numberInput = document.getElementById("number-input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

function calcLength() {
  let metricToImperialResult = numberInput.value * 3.28;
  let imperialToMetricResult = numberInput.value / 3.28;
  lengthEl.innerText =
    numberInput.value +
    " " +
    "meters =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "feet" +
    " " +
    "|" +
    " " +
    numberInput.value +
    " " +
    "feet =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "meters";
}

calcLength();

function calcVolume() {
  let metricToImperialResult = numberInput.value * 0.264172;
  let imperialToMetricResult = numberInput.value / 0.264172;
  volumeEl.innerText =
    numberInput.value +
    " " +
    "liters =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "gallons" +
    " " +
    "|" +
    " " +
    numberInput.value +
    " " +
    "gallons =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "liters";
}

calcVolume();

function calcMass() {
  let metricToImperialResult = numberInput.value * 2.205;
  let imperialToMetricResult = numberInput.value / 2.205;
  massEl.innerText =
    numberInput.value +
    " " +
    "kilos =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "pounds" +
    " " +
    "|" +
    " " +
    numberInput.value +
    " " +
    "pounds =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "kilos";
}

calcMass();
