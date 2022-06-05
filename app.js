let conversionNumber = 8;
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

function calcLength() {
  let metricToImperialResult = conversionNumber * 3.28;
  let imperialToMetricResult = conversionNumber / 3.28;
  lengthEl.innerText =
    conversionNumber +
    " " +
    "meters =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "feet" +
    " " +
    "|" +
    " " +
    conversionNumber +
    " " +
    "feet =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "meters";
}

calcLength();

function calcVolume() {
  let metricToImperialResult = conversionNumber * 0.264172;
  let imperialToMetricResult = conversionNumber / 0.264172;
  volumeEl.innerText =
    conversionNumber +
    " " +
    "liters =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "gallons" +
    " " +
    "|" +
    " " +
    conversionNumber +
    " " +
    "gallons =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "liters";
}

calcVolume();

function calcMass() {
  let metricToImperialResult = conversionNumber * 2.205;
  let imperialToMetricResult = conversionNumber / 2.205;
  massEl.innerText =
    conversionNumber +
    " " +
    "kilos =" +
    " " +
    metricToImperialResult.toFixed(3) +
    " " +
    "pounds" +
    " " +
    "|" +
    " " +
    conversionNumber +
    " " +
    "pounds =" +
    " " +
    imperialToMetricResult.toFixed(3) +
    " " +
    "kilos";
}

calcMass();
